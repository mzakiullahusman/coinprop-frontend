import { useState } from "react";
import { Button, FormControl, FormHelperText } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Loader from "../Loader";
import { forgetPassword, resetPassword } from "../../services/authService";
import UserInputField from "../UserInputs/UserInputField";
import pwdEye from "../../assets/icons/pwdEye.svg";

const AuthForgot = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (values, { setErrors, setSubmitting }) => {
    setLoading(true);
    try {
      const response = await forgetPassword({ email: values.email });
      toast.success("OTP sent to your email!");
      setEmail(values.email);
      setOtpSent(true);
      setStep(2);
    } catch (err) {
      console.error("Error in sending OTP:", err);
      toast.error("Failed to send OTP. Please try again.");
      setErrors({ email: "Failed to send OTP. Please try again." });
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  const handleResetPassword = async (values, { setErrors, setSubmitting }) => {
    setLoading(true);
    try {
      const resetData = {
        email,
        otp: values.otp,
        password: values.password,
      };
      await resetPassword(resetData);
      toast.success("Password reset successfully!");
      setStep(1);
    } catch (err) {
      console.error("Error in resetting password:", err);
      toast.error("Failed to reset password. Please try again.");
      setErrors({ submit: "Failed to reset password. Please try again." });
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div>
      {step === 1 ? (
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .required("Email is required"),
          })}
          onSubmit={handleSendOtp}
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
              <FormControl
                fullWidth
                error={Boolean(touched.email && errors.email)}
              >
                <div className="mb-[18px] flex flex-col gap-2">
                  <p className="text-[12px] font-medium">Email</p>
                  <UserInputField
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error>{errors.email}</FormHelperText>
                  )}
                </div>
              </FormControl>

              <div className="mt-4 lg:mt-8">
                <Button variant="containedGradient" type="submit">
                  {loading && <Loader isWrapper={false} />}
                  Send OTP
                </Button>
              </div>

              <p className="text-[#14b8a6] text-[14px] mt-6 lg:mt-[38px]">
                <Link to="/auth/sign-in">&lt; &nbsp;Back to login</Link>
              </p>
            </form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{ otp: "", password: "", confirmPassword: "" }}
          validationSchema={Yup.object().shape({
            otp: Yup.string().required("OTP is required"),
            password: Yup.string().max(255).required("Password is required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm Password is required"),
          })}
          onSubmit={handleResetPassword}
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
              <FormControl fullWidth error={Boolean(touched.otp && errors.otp)}>
                <div className="mb-[18px] flex flex-col gap-2">
                  <p className="text-[12px] font-medium">OTP</p>
                  <UserInputField
                    type="text"
                    placeholder="Enter OTP"
                    name="otp"
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.otp && errors.otp && (
                    <FormHelperText error>{errors.otp}</FormHelperText>
                  )}
                </div>
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
              >
                <div className="mb-[18px] flex flex-col gap-2">
                  <p className="text-[12px] font-medium">Password</p>
                  <UserInputField
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    decorator={pwdEye}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onDecoratorClick={() => setShowPassword(!showPassword)}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error>{errors.password}</FormHelperText>
                  )}
                </div>
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
              >
                <div className="mb-[18px] flex flex-col gap-2">
                  <p className="text-[12px] font-medium">Re-type Password</p>
                  <UserInputField
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-type password"
                    decorator={pwdEye}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onDecoratorClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <FormHelperText error>
                      {errors.confirmPassword}
                    </FormHelperText>
                  )}
                </div>
              </FormControl>

              <div className="mt-4 lg:mt-8">
                <Button variant="containedGradient" type="submit">
                  {loading && <Loader isWrapper={false} />}
                  Reset Password
                </Button>
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default AuthForgot;
