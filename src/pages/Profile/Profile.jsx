import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, Button, TextField, Autocomplete } from "@mui/material";
import toast from "react-hot-toast";

import { updateProfile, getProfile } from "../../services/userService";
import { getInitials } from "../../utils/getInitials";
import { useAuth } from "../../context/AuthContext";
import UploadButton from "../../components/Buttons/UploadButton";
import UserInputField from "../../components/UserInputs/UserInputField";
import PageCardMain from "../../components/PageCards/PageCardMain";
import Loader from "../../components/Loader";
import { countriesList } from "../../constants/countriesList";

const textFieldStyles = {
  "& .MuiInputBase-root": {
    fontSize: "12px",
    height: "54px",
    backgroundColor: "transparent",
    borderRadius: "10px",
    border: "1px solid",
    borderColor: "#ffffff1a",
    padding: "0 14px",
    "&:hover": {
      borderColor: "#06b6d4",
    },
    "&.Mui-focused": {
      borderColor: "#06b6d4",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: 500,
    transform: "translate(14px, 16px) scale(1)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.85)",
  },
  "& .MuiInputBase-input": {
    color: "white",
    fontSize: "14px",
    fontWeight: 500,
    padding: "10px 0",
    "&::placeholder": {
      fontSize: "14px",
      color: "white",
    },
  },
  "& .MuiPaper-root": {
    backgroundColor: "#000000 !important",
  },
  // Transparent dropdown styles
  "& .MuiAutocomplete-paper": {
    backgroundColor: "transparent !important",
    boxShadow: "none",
  },
  "& .MuiMenuItem-root": {
    color: "#ffffff !important",
    fontSize: "14px !important",
  },
};

const Profile = () => {
  const { user } = useAuth();
  const [previewImage, setPreviewImage] = useState("/Icons/profileMain.svg");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
  });
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const countries = countriesList;

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const profile = await getProfile();
        setFormData({
          firstName: profile.firstName || "",
          lastName: profile.lastName || "",
          companyName: profile.companyName || "",
          phoneNumber: profile.phoneNum || "",
          country: profile.country || "",
          state: profile.state || "",
          city: profile.city || "",
          zipCode: profile.zipCode || "",
        });

        if (profile.profileImage) {
          setPreviewImage(profile.profileImage);
        }
      } catch (error) {
        toast.error("Failed to fetch profile details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileDetails();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setPreviewImage(event.target?.result);
        setSelectedImage(file);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const updatedFields = { ...formData };

    delete updatedFields.state;
    delete updatedFields.city;
    delete updatedFields.zipCode;

    Object.keys(updatedFields).forEach((key) => {
      if (
        updatedFields[key] === "" ||
        updatedFields[key] === null ||
        updatedFields[key] === undefined
      ) {
        delete updatedFields[key];
      }
    });

    if (selectedImage) {
      updatedFields.profileImage = selectedImage;
    }

    const payload = { updateObject: updatedFields };

    try {
      await updateProfile(payload);
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      toast.error("Error updating profile. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <PageCardMain isBlur={true} isAboveMargin={true}>
        <div id="buttons" className="flex justify-center w-full">
          <div className="flex gap-4 w-full lg:w-[50%] flex-wrap sm:flex-nowrap">
            <Button
              variant="containedGradient"
              onClick={() => navigate("/profile")}
              sx={{
                background:
                  location.pathname !== "/account-security"
                    ? ""
                    : "transparent",
              }}
            >
              Personal Information
            </Button>
            <Button
              variant="containedGradient"
              onClick={() => navigate("/account-security")}
              sx={{
                background:
                  location.pathname === "/account-security"
                    ? ""
                    : "transparent",
              }}
            >
              Account Security
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full items-center lg:mt-2">
          <Avatar
            sx={{
              width: 96,
              height: 96,
              backgroundColor: "tranparent",
              color: "#D974F3",
            }}
          >
            {getInitials(user?.firstName, user?.lastName)}
          </Avatar>
        </div>
        <div id="profile-info" className="flex flex-col w-full lg:px-40">
          <div className="flex flex-col gap-[27px] w-full">
            <div className="flex gap-[20px] w-full flex-wrap lg:flex-nowrap">
              <UserInputField
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                value={formData.firstName || user?.firstName}
                onChange={handleChange}
              />
              <UserInputField
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                value={formData.lastName || user?.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-[20px] w-full flex-wrap lg:flex-nowrap">
              <UserInputField
                label="Company Name"
                name="companyName"
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
              <UserInputField
                label="Email"
                type="text"
                value={user?.email || ""}
                placeholder="Email"
                readOnly={true}
              />
            </div>
            <div className="flex gap-[20px] w-full flex-wrap lg:flex-nowrap">
              <UserInputField
                label="Phone number"
                name="phoneNumber"
                type="text"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-[20px] w-full flex-wrap lg:flex-nowrap">
              <Autocomplete
                id="country-select"
                fullWidth
                options={countriesList}
                autoHighlight
                PaperComponent={({ children }) => (
                  <div className="blurry-effect text-sm">{children}</div>
                )}
                getOptionLabel={(option) => option.label}
                value={
                  countriesList.find((c) => c.code === formData.country) || null
                }
                onChange={(event, newValue) => {
                  if (newValue) {
                    setFormData((prev) => ({
                      ...prev,
                      country: newValue.code,
                    }));
                  } else {
                    setFormData((prev) => ({
                      ...prev,
                      country: "",
                      state: "",
                      city: "",
                    }));
                  }
                }}
                renderOption={(props, option) => (
                  <li {...props}>
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                    {option.label}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Country"
                    placeholder="Please Select"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                    sx={textFieldStyles}
                  />
                )}
              />

              <UserInputField
                label="State / Province"
                name="state"
                type="text"
                placeholder="State / Province"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-[20px] w-full flex-wrap lg:flex-nowrap">
              <UserInputField
                label="City"
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
              <UserInputField
                label="Zip Code"
                name="zipCode"
                type="text"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[25%] lg:mt-2 lg:w-[50%] lg:px-40">
          <Button variant="containedGradient" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>
      </PageCardMain>
    </>
  );
};

export default Profile;
