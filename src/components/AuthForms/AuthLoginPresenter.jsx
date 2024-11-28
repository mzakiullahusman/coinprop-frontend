// AuthLoginPresenter.js
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Button, FormControl, FormHelperText } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import OtpInput from "react-otp-input";
import checked from "@assets/icons/checkFilled.svg";
import unChecked from "@assets/icons/checkUnfilled.svg";
import pwdEye from "@assets/icons/pwdEye.svg";
import Loader from "../Loader";
import UserInputField from "../UserInputs/UserInputField";

const AuthLoginPresenter = ({
  formState,
  updateFormState,
  handleLoginSubmit,
  handleOtpSubmit,
  handleResendOtp,
}) => {
  const {
    loginStep,
    loading,
    showPassword,
    rememberPassword,
    qrCodeDataUrl,
    otpCode,
    isDisabled,
    timer,
  } = formState;

  const handleClickShowPassword = () => {
    updateFormState({ showPassword: !showPassword });
  };

  const toggleRememberPassword = () => {
    updateFormState({ rememberPassword: !rememberPassword });
  };

  const loginForm = (
    <Formik
      initialValues={{
        email: "",
        password: "",
        recaptchaToken: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
      })}
      onSubmit={handleLoginSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
      }) => (
        <form noValidate onSubmit={handleSubmit} className="w-full">
          <FormControl fullWidth error={Boolean(touched.email && errors.email)}>
            <div className="mb-[18px] flex flex-col gap-2">
              <p className="text-[15px] font-medium">Username or Email</p>
              <UserInputField
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent"
              />
              {touched.email && errors.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </div>
          </FormControl>

          <FormControl
            fullWidth
            error={Boolean(touched.password && errors.password)}
          >
            <div className="mb-[18px] flex flex-col gap-2">
              <p className="text-[15px] font-medium">Password</p>
              <UserInputField
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                decorator={pwdEye}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onDecoratorClick={handleClickShowPassword}
              />
              {touched.password && errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </div>
          </FormControl>

          <div className="flex justify-center lg:justify-between text-[14px] text-custom-color flex-wrap lg:flex-nowrap">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleRememberPassword}
            >
              <img
                src={rememberPassword ? checked : unChecked}
                alt="Remember Password"
                className="mr-2"
              />
              <p className="text-[14px]">Remember Me</p>
            </div>
            <Link
              to="/auth/forgot-password"
              className="text-custom-color mt-2 lg:mt-0"
            >
              Forgot Password
            </Link>
          </div>

          <div className="mt-8 lg:mt-[32px]">
            <Button variant="containedGradient" type="submit">
              {loading && <Loader isWrapper={false} />}
              Login
            </Button>
          </div>

          <div className="flex justify-center text-[14px] font-medium mt-8 lg:mt-[22px] gap-2 flex-wrap lg:flex-nowrap">
            Don't have an account?{" "}
            <p className="text-custom-color">
              <Link to="/auth/sign-up">Sign Up</Link>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );

  const otpForm = (
    <div className="w-full">
      <form>
        {loginStep === "setup2fa" && (
          <div className="w-full flex flex-col justify-center items-center text-center gap-4 mb-2">
            <p className="text-[16px]">
              Please scan the QR code with your authenticator app:
            </p>
            <img
              src={qrCodeDataUrl}
              alt="2FA QR Code"
              className="w-[70%] lg:w-[40%] mt-2"
            />
          </div>
        )}
        <div className="mt-4">
          <FormControl fullWidth>
            <div className="w-full flex justify-center">
              <OtpInput
                value={otpCode}
                onChange={(value) => updateFormState({ otpCode: value })}
                numInputs={6}
                shouldAutoFocus
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  margin: "0.2rem",
                  width: "2.7rem",
                  height: "5rem",
                  fontSize: "1.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  color: "transparent",
                }}
              />
            </div>
          </FormControl>
          <div className="mt-8 lg:mt-[32px]">
            <Button
              variant="containedGradient"
              onClick={handleOtpSubmit}
              disabled={loading}
              type="submit"
            >
              {loading ? <Loader isWrapper={false} /> : "Verify OTP"}
            </Button>
          </div>
          {loginStep === "verifyRegistrationOtp" && (
            <div className="mt-4 lg:mt-[16px]">
              <Button
                variant="containedNoGradient"
                onClick={handleResendOtp}
                disabled={isDisabled}
              >
                {isDisabled ? "Please Wait" : "Resend OTP"}
              </Button>
              {isDisabled && (
                <p className="text-sm text-gray-500 mt-2">
                  Try again in {Math.floor(timer / 60)}:
                  {String(timer % 60).padStart(2, "0")}
                </p>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );

  return (
    <>
      {loginStep === "login" && loginForm}
      {(loginStep === "setup2fa" ||
        loginStep === "verifyOtp" ||
        loginStep === "verifyRegistrationOtp") &&
        otpForm}
    </>
  );
};

export default AuthLoginPresenter;
