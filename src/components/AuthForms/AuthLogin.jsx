import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "@context/AuthContext";
import {
  generate2faSecret,
  verifyOtp,
  verifyRegistrationOtp,
  resendRegistrationOtp,
  loginUser,
} from "@services/authService";
import { getToken } from "@services/mt5ApiClient";
import AuthLoginPresenter from "./AuthLoginPresenter";

const AuthLogin = () => {
  // State Management
  const [formState, setFormState] = useState({
    userEmail: "",
    userID: "",
    loading: false,
    showPassword: false,
    rememberPassword: false,
    loginStep: "login", // 'login', 'verifyRegistrationOtp', 'setup2fa', 'verifyOtp'
    qrCodeDataUrl: "",
    otpCode: "",
    isDisabled: false,
    timer: 0,
    intervalDuration: 60,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Handlers
  const updateFormState = (updates) => {
    setFormState((prev) => ({ ...prev, ...updates }));
  };

  const handleLoginSubmit = async (values) => {
    updateFormState({ loading: true });
    try {
      const response = await loginUser(values);

      if (!response.isVerified) {
        updateFormState({
          userEmail: values.email,
          loginStep: "verifyRegistrationOtp",
          isDisabled: false,
          timer: 0,
        });
        toast.info("Please enter the OTP sent to your email");
      } else if (!response.twofaVerified) {
        const secretResponse = await generate2faSecret(response.userID);
        updateFormState({
          userEmail: values.email,
          userID: response.userID,
          qrCodeDataUrl: secretResponse.qrImageDataUrl,
          loginStep: "setup2fa",
        });
        toast.info("Please set up 2-factor authentication");
      } else if (response.twofaVerified && !response.user) {
        updateFormState({
          userEmail: values.email,
          loginStep: "verifyOtp",
        });
        toast.info("Please complete 2-factor authentication");
      } else if (response.twofaVerified && response.user) {
        await handleSuccessfulLogin(response);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed");
    } finally {
      updateFormState({ loading: false });
    }
  };

  const handleOtpSubmit = async () => {
    updateFormState({ loading: true });
    try {
      let response;
      if (formState.loginStep === "verifyRegistrationOtp") {
        response = await verifyRegistrationOtp(formState.otpCode);
        if (response.success) {
          const secretResponse = await generate2faSecret(response.userID);
          updateFormState({
            otpCode: "",
            userID: response.userID,
            qrCodeDataUrl: secretResponse.qrImageDataUrl,
            loginStep: "setup2fa",
          });
          return;
        }
      } else {
        response = await verifyOtp(formState.otpCode, formState.userEmail);
      }

      if (response.twofaVerified || response.registrationVerified) {
        await handleSuccessfulLogin(response);
      } else {
        toast.error("OTP verification failed");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      toast.error("OTP verification failed");
    } finally {
      updateFormState({ loading: false });
    }
  };

  const handleSuccessfulLogin = async (response) => {
    const {
      user: {
        email,
        id,
        firstName,
        lastName,
        referredUsersCount,
        access_token: token,
        referralLink,
      },
    } = response;

    const userDetailsWithToken = {
      token,
      id,
      email,
      firstName,
      lastName,
      referredUsersCount,
      ...(referralLink && { referralLink }),
    };

    // await getToken();
    login(userDetailsWithToken);
    toast.success("Login successful!");

    if (formState.rememberPassword) {
      localStorage.setItem("rememberMe", true);
    } else {
      localStorage.removeItem("rememberMe");
    }

    navigate("/dashboard");
  };

  const handleResendOtp = async () => {
    updateFormState({
      isDisabled: true,
      timer: formState.intervalDuration,
    });
    try {
      await resendRegistrationOtp(formState.userEmail);
      updateFormState({ intervalDuration: 180 });
    } catch (error) {
      console.error("Resend OTP failed:", error);
    }
  };

  // Effects
  useEffect(() => {
    if (formState.otpCode.length === 6) {
      handleOtpSubmit();
    }
  }, [formState.otpCode]);

  useEffect(() => {
    if (location.state?.fromRegistration) {
      updateFormState({
        loginStep: "verifyRegistrationOtp",
        userEmail: location.state.email,
        isDisabled: true,
        timer: 60,
      });
      toast.info("Please enter the OTP sent to your email");
    }
  }, [location.state]);

  useEffect(() => {
    if (formState.timer === 0) return;

    const intervalId = setInterval(() => {
      updateFormState((prev) => ({
        timer: prev.timer - 1,
        isDisabled: prev.timer !== 1,
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [formState.timer]);

  return (
    <AuthLoginPresenter
      formState={formState}
      updateFormState={updateFormState}
      handleLoginSubmit={handleLoginSubmit}
      handleOtpSubmit={handleOtpSubmit}
      handleResendOtp={handleResendOtp}
      navigate={navigate}
    />
  );
};

export default AuthLogin;
