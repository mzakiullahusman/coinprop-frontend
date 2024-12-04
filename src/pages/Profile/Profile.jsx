import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  Autocomplete,
  Box,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import { Info, Lock, Group } from "@mui/icons-material";
import toast from "react-hot-toast";

import { updateProfile, getProfile } from "../../services/userService";
import { getInitials } from "../../utils/getInitials";
import { useAuth } from "../../context/AuthContext";
import { countriesList } from "../../constants/countriesList";

const textFieldStyles = {
  "& .MuiInputBase-root": {
    fontSize: "12px",
    height: "54px",
    backgroundColor: "#182230",
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
  "& .MuiAutocomplete-paper": {
    backgroundColor: "transparent !important",
    boxShadow: "none",
  },
  "& .MuiMenuItem-root": {
    color: "#ffffff !important",
    fontSize: "14px !important",
  },
};

const InfoCard = ({ icon, title, description }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      p: 2,
      bgcolor: "rgba(22, 24, 35, 0.7)",
      borderRadius: 2,
      border: "1px solid #2a2e3b",
      mb: 2,
    }}
  >
    {icon}
    <Box>
      <Typography variant="subtitle2" sx={{ color: "#fff", mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#6f7287" }}>
        {description}
      </Typography>
    </Box>
  </Box>
);

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    language: "English",
    timeFormat: "12h (am/pm)",
    country: "",
    timezone: "Central Time - US & Canada",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const profile = await getProfile();
        setFormData((prev) => ({
          ...prev,
          firstName: profile.firstName || "",
          lastName: profile.lastName || "",
          country: profile.country || "",
        }));
      } catch (error) {
        toast.error("Failed to fetch profile details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateProfile({ updateObject: formData });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Error updating profile. Please try again.");
    }
  };

  return (
    <Box
      sx={{ display: "flex", gap: 4, p: 3, maxWidth: 1200, margin: "0 auto" }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" sx={{ color: "#fff", mb: 3 }}>
          Personal info
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Avatar
            sx={{
              width: 64,
              height: 64,
              bgcolor: "#182230",
              color: "#fff",
            }}
          >
            {getInitials(formData.firstName)}
          </Avatar>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            fullWidth
            // label="Name"
            name="firstName"
            placeholder="Name"
            value={formData.firstName}
            onChange={handleChange}
            sx={textFieldStyles}
          />

          <TextField
            fullWidth
            placeholder="Language"
            name="language"
            // value={formData.language}
            onChange={handleChange}
            sx={textFieldStyles}
          />

          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Time Format Select */}
            <Select
              name="dateFormat"
              value={formData.dateFormat || ""}
              onChange={handleChange}
              displayEmpty
              sx={{
                height: "3rem",
                width: "25rem",
                padding: "0.5rem",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#ffffff",
                backgroundColor: "#182230",
                borderRadius: "0.8rem",
                "& .MuiSelect-icon": {
                  color: "#01FF9D",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff1a",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff66",
                },
              }}
            >
              <MenuItem value="" disabled>
                Time Format
              </MenuItem>
              <MenuItem value="12 hr (am/pm)">12 hr (am/pm)</MenuItem>
              <MenuItem value="24 hr">24 hr</MenuItem>
            </Select>

            {/* Date Format Select */}
            <Select
              name="dateFormat"
              value={formData.dateFormat || ""}
              onChange={handleChange}
              displayEmpty
              sx={{
                height: "3rem",
                width: "25rem",
                padding: "0.5rem",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#ffffff",
                backgroundColor: "#182230",
                borderRadius: "0.8rem",
                "& .MuiSelect-icon": {
                  color: "#01FF9D",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff1a",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff66",
                },
              }}
            >
              <MenuItem value="" disabled>
                Date Format
              </MenuItem>
              <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
              <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
              <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
            </Select>
          </Box>

          <Autocomplete
            fullWidth
            options={countriesList}
            getOptionLabel={(option) => option.label}
            value={
              countriesList.find((c) => c.code === formData.country) || null
            }
            sx={{
              "& .MuiInputBase-root": {
                fontSize: "2rem",
                height: "54px",
                backgroundColor: "#182230",
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

              "& .MuiInputLabel-shrink": {
                transform: "translate(14px, -6px) scale(0.85)",
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "14px",
                fontWeight: 500,
                padding: "10px 0",
                "&::placeholder": {
                  fontSize: "20px",
                  color: "white",
                },
              },
              "& .MuiPaper-root": {
                backgroundColor: "#000000 !important",
              },
              "& .MuiAutocomplete-paper": {
                backgroundColor: "transparent !important",
                boxShadow: "none",
              },
              "& .MuiSelect-icon": {
                color: "!important #01FF9D",
              },
              "& .MuiMenuItem-root": {
                color: "#ffffff !important",
                fontSize: "14px !important",
              },
            }}
            onChange={(_, newValue) => {
              setFormData((prev) => ({
                ...prev,
                country: newValue?.code || "", // Ensure empty string if no value selected
              }));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Country" // Use 'label' instead of placeholder for a better UI experience
                placeholder="Select Country" // Update placeholder for clarity
                sx={textFieldStyles} // Apply the custom styles
              />
            )}
            isOptionEqualToValue={(option, value) =>
              option.code === value?.code
            } // Ensure correct comparison between option and value
          />

          <Select
            fullWidth
            name="timezone"
            value={formData.timezone || ""} // Ensure the value is managed properly
            onChange={handleChange}
            displayEmpty
            sx={{
              width: "100%", // Use full width for proper spacing
              padding: "0.75rem", // Adjusted padding for consistency
              fontSize: "1rem",
              height: "03rem",
              fontWeight: 400,
              color: "#ffffff",
              backgroundColor: "#182230",
              borderRadius: ".8rem",
              "& .MuiSelect-icon": {
                color: "#01FF9D",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff1a", // Adjust the border color to match design
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff66", // Add hover border color
              },
              "&:focus .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff", // Add focus border color
              },
            }}
          >
            <MenuItem value="" disabled>
              Time Zone
            </MenuItem>
            <MenuItem value="Central Time - US & Canada">
              Central Time - US & Canada
            </MenuItem>
            <MenuItem value="Eastern Time - US & Canada">
              Eastern Time - US & Canada
            </MenuItem>
            <MenuItem value="Pacific Time - US & Canada">
              Pacific Time - US & Canada
            </MenuItem>
          </Select>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                bgcolor: "#00FC9E",
                color: "#000",
                "&:hover": {
                  bgcolor: "#00d584",
                },
              }}
            >
              Save changes
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#3d4054",
                color: "#fff",
                "&:hover": {
                  borderColor: "#4d5169",
                },
              }}
            >
              Delete Account
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: 300 }}>
        <InfoCard
          icon={<Lock sx={{ color: "#6f7287" }} />}
          title="Why isn't my info shown here?"
          description="We're hiding some account details to protect your identity."
        />
        <InfoCard
          icon={<Info sx={{ color: "#6f7287" }} />}
          title="Which details can be edited?"
          description="Details Airbnb uses to verify your identity can't be changed. Contact info and some personal details can be edited, but we may ask you to verify your identity the next time you book or create a listing."
        />
        <InfoCard
          icon={<Group sx={{ color: "#6f7287" }} />}
          title="What info is shared with others?"
          description="Airbnb only releases contact information for hosts and guests after a reservation is confirmed."
        />
      </Box>
    </Box>
  );
};

export default Profile;
