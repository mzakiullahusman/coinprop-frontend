import { useState } from "react";
import { Button, FormControl, FormHelperText } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import UserInputField from "@components/UserInputs/UserInputField";
import PageCardMain from "@components/PageCards/PageCardMain";
import pwdEye from "@assets/icons/pwdEye.svg";
import { updatePassword } from "@services/userService";
import { useLocation, useNavigate } from "react-router-dom";

const AccountTab = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClickShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <PageCardMain isBlur={true} isAboveMargin={true}>
      <div id="buttons" className="flex justify-center w-full">
        <div className="flex gap-4 w-full lg:w-[50%] flex-wrap sm:flex-nowrap">
          <Button
            variant="containedGradient"
            onClick={() => navigate("/profile")}
            sx={{
              background:
                location.pathname !== "/account-security" ? "" : "transparent",
            }}
          >
            Personal Information
          </Button>
          <Button
            variant="containedGradient"
            onClick={() => navigate("/account-security")}
            sx={{
              background:
                location.pathname === "/account-security" ? "" : "transparent",
            }}
          >
            Account Security
          </Button>
        </div>
      </div>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }}
        validationSchema={Yup.object().shape({
          currentPassword: Yup.string().required(
            "Current Password is required"
          ),
          newPassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("New Password is required"),
          confirmNewPassword: Yup.string()
            .oneOf([Yup.ref("newPassword")], "Passwords must match")
            .required("Confirm New Password is required"),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const response = await updatePassword({
              currentPassword: values.currentPassword,
              newPassword: values.newPassword,
            });

            toast.success("Password updated successfully!");
            console.log(response);
          } catch (error) {
            toast.error(
              `Failed to update password: ${
                error.response?.data?.message || error.message
              }`
            );
            setErrors({ submit: error.message });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full lg:mt-2"
          >
            <div className="flex flex-col gap-[27px] w-full md:w-[51%]">
              <FormControl
                fullWidth
                error={Boolean(
                  touched.currentPassword && errors.currentPassword
                )}
              >
                <UserInputField
                  label="Current Password"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Password"
                  decorator={pwdEye}
                  name="currentPassword"
                  value={values.currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onDecoratorClick={handleClickShowCurrentPassword}
                />
                {touched.currentPassword && errors.currentPassword && (
                  <FormHelperText error>
                    {errors.currentPassword}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(touched.newPassword && errors.newPassword)}
              >
                <UserInputField
                  label="New Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  decorator={pwdEye}
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onDecoratorClick={handleClickShowPassword}
                />
                {touched.newPassword && errors.newPassword && (
                  <FormHelperText error>{errors.newPassword}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(
                  touched.confirmNewPassword && errors.confirmNewPassword
                )}
              >
                <UserInputField
                  label="Confirm New Password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  decorator={pwdEye}
                  name="confirmNewPassword"
                  value={values.confirmNewPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onDecoratorClick={handleClickShowConfirmPassword}
                />
                {touched.confirmNewPassword && errors.confirmNewPassword && (
                  <FormHelperText error>
                    {errors.confirmNewPassword}
                  </FormHelperText>
                )}
              </FormControl>

              <Button
                variant="containedGradient"
                type="submit"
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting ? "Updating..." : "Update Password"}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </PageCardMain>
  );
};

export default AccountTab;
