import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { Button, FormControl, FormHelperText } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";

import Loader from "../Loader";
import checked from "../../assets/icons/checkFilled.svg";
import unChecked from "../../assets/icons/checkUnfilled.svg";
import pwdEye from "../../assets/icons/pwdEye.svg";
import UserInputField from "../UserInputs/UserInputField";
import {
  registerUser,
  verifyRegistrationOtp,
} from "../../services/authService";

const AuthRegister = () => {
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checkedNewsletter, setCheckedNewsletter] = useState(false);
  const [loading, setLoading] = useState(false);

  const recaptchaRef = useRef();
  const navigate = useNavigate();

  const handleRegisterSubmit = async (values, { setErrors, setSubmitting }) => {
    setLoading(true);
    try {
      // Create a copy of values and remove frontend-only fields
      const {
        checkedPrivacy,
        checkedCorrect,
        retypePassword,
        // phoneNum,
        ...submitValues
      } = values;
      // Execute reCAPTCHA
      // const recaptchaValue = await recaptchaRef.current.executeAsync();
      // recaptchaRef.current.reset();

      // Include the reCAPTCHA token in the values
      // values.recaptchaToken = recaptchaValue;
      // Proceed with registration using only necessary fields
      const response = await registerUser(submitValues);

      setEmail(values.email);
      setIsRegistrationComplete(true);
      toast.success(response.message);
      navigate("/auth/sign-in", {
        state: { fromRegistration: true, email: values.email },
      });
    } catch (err) {
      toast.error(`Registration error: ${err.message}`);
      setErrors({ submit: err.message });
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  const handleRegistrationOtpSubmit = async (
    otpValue,
    { setErrors, setSubmitting }
  ) => {
    setLoading(true);
    try {
      await verifyRegistrationOtp(otpValue.otp);
      toast.success("Registration OTP verified successfully!");
      navigate("/auth/sign-in");
    } catch (err) {
      toast.error(`OTP verification failed: ${err.message}`);
      setErrors({ submit: err.message });
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  const toggleNewsletter = () => {
    setCheckedNewsletter(!checkedNewsletter);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onRecaptchaChange = (token) => {
    // Handle automatic reCAPTCHA events here if needed
    console.log("ReCAPTCHA token received:", token);
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNum: "",
          password: "",
          retypePassword: "",
          checkedPrivacy: false,
          checkedCorrect: false,
          // checkedNewsletter: false,
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          phoneNum: Yup.string()
            .matches(
              /^\+?[1-9]\d{1,14}$/,
              "Phone number must be a valid international number."
            )
            .required("Phone number is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              "Password must contain an uppercase letter, a lowercase letter, a number, and a special character."
            )
            .required("Password is required"),
          retypePassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Re-type Password is required"),
          checkedPrivacy: Yup.boolean().oneOf(
            [true],
            "The above checkbox is required"
          ),
          checkedCorrect: Yup.boolean().oneOf(
            [true],
            "The above checkbox is required"
          ),
        })}
        onSubmit={handleRegisterSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          setFieldValue,
          setFieldTouched,
          submitCount,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {/* Registration input fields */}
            <div className="gap-4 flex flex-col" id="input-fields">
              {/* First Name and Last Name */}
              <div className="flex flex-col md:flex-row gap-4 items-end mb-[18px]">
                <FormControl
                  fullWidth
                  error={Boolean(touched.firstName && errors.firstName)}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-[12px] font-medium">First Name</p>
                    <UserInputField
                      type="text"
                      placeholder="Enter First Name"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.firstName && errors.firstName && (
                      <FormHelperText error>{errors.firstName}</FormHelperText>
                    )}
                  </div>
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(touched.lastName && errors.lastName)}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-[12px] font-medium">Last Name</p>
                    <UserInputField
                      type="text"
                      placeholder="Enter Last Name"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.lastName && errors.lastName && (
                      <FormHelperText error>{errors.lastName}</FormHelperText>
                    )}
                  </div>
                </FormControl>
              </div>

              {/* Email */}
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

              {/* Phone number */}
              <FormControl
                fullWidth
                error={Boolean(touched.phoneNum && errors.phoneNum)}
              >
                <div className="mb-[18px] flex flex-col gap-2">
                  <p className="text-[12px] font-medium">Phone Number</p>
                  <UserInputField
                    type="text"
                    placeholder="Enter Your Phone Number"
                    name="phoneNum"
                    value={values.phoneNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phoneNum && errors.phoneNum && (
                    <FormHelperText error>{errors.phoneNum}</FormHelperText>
                  )}
                </div>
              </FormControl>

              {/* Password */}
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
                    onDecoratorClick={handleClickShowPassword}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error>{errors.password}</FormHelperText>
                  )}
                </div>
              </FormControl>

              {/* Retype Password */}
              <FormControl
                fullWidth
                error={Boolean(touched.retypePassword && errors.retypePassword)}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-[12px] font-medium">Re-type Password</p>
                  <UserInputField
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-type Password"
                    decorator={pwdEye}
                    name="retypePassword"
                    value={values.retypePassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onDecoratorClick={handleClickShowConfirmPassword}
                  />
                  {touched.retypePassword && errors.retypePassword && (
                    <FormHelperText error>
                      {errors.retypePassword}
                    </FormHelperText>
                  )}
                </div>
              </FormControl>
            </div>
            {/* Privacy Policy Checkbox */}
            <div
              className="flex flex-col gap-3 mt-8 lg:mt-[30px]"
              id="checkboxes"
            >
              {/* Privacy Policy Checkbox */}
              <FormControl
                fullWidth
                error={
                  (touched.checkedPrivacy || submitCount > 0) &&
                  Boolean(errors.checkedPrivacy)
                }
              >
                <div className="flex items-center cursor-pointer">
                  <img
                    src={values.checkedPrivacy ? checked : unChecked}
                    alt="checkedPrivacy"
                    className="mr-[11px] cursor-pointer"
                    onClick={() => {
                      const newValue = !values.checkedPrivacy;
                      setFieldValue("checkedPrivacy", newValue);
                      setFieldTouched("checkedPrivacy", true, false);
                    }}
                  />
                  <p className="text-[12px] font-medium">
                    I agree to the processing of my personal data according to
                    the PRIVACY POLICY
                  </p>
                </div>
                {(touched.checkedPrivacy || submitCount > 0) &&
                  errors.checkedPrivacy && (
                    <FormHelperText error>
                      {errors.checkedPrivacy}
                    </FormHelperText>
                  )}
              </FormControl>

              {/* Newsletter Checkbox (Optional) */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  const newValue = !checkedNewsletter;
                  setCheckedNewsletter(newValue);
                }}
              >
                <img
                  src={checkedNewsletter ? checked : unChecked}
                  alt="checkedNewsletter"
                  className="mr-[11px]"
                />
                <p className="text-[12px] font-medium">
                  Do you want to receive news about our project? Sign up to our
                  NEWSLETTER
                </p>
              </div>

              {/* Correct Name Checkbox */}
              <FormControl
                fullWidth
                error={
                  (touched.checkedCorrect || submitCount > 0) &&
                  Boolean(errors.checkedCorrect)
                }
              >
                <div className="flex items-center cursor-pointer">
                  <img
                    src={values.checkedCorrect ? checked : unChecked}
                    alt="checkedCorrect"
                    className="mr-[11px] cursor-pointer"
                    onClick={() => {
                      const newValue = !values.checkedCorrect;
                      setFieldValue("checkedCorrect", newValue);
                      setFieldTouched("checkedCorrect", true, false);
                    }}
                  />
                  <p className="text-[12px] font-medium">
                    I declare that my name is correct and corresponds to
                    government-issued identification
                  </p>
                </div>
                {(touched.checkedCorrect || submitCount > 0) &&
                  errors.checkedCorrect && (
                    <FormHelperText error>
                      {errors.checkedCorrect}
                    </FormHelperText>
                  )}
              </FormControl>
            </div>
            {/* ... rest of your form, including submit button ... */}
            {/* <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={import.meta.env.}
                onChange={onRecaptchaChange}
              /> */}
            <div className="mt-4 lg:mt-6">
              <Button variant="containedGradient" type="submit">
                {loading && <Loader isWrapper={false} />}
                Register
              </Button>
            </div>
            <p className="text-[#14b8a6] text-[14px] mt-6 lg:mt-[30px] text-center">
              <Link to="/auth/sign-in">&lt; &nbsp;Back to login</Link>
            </p>{" "}
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
