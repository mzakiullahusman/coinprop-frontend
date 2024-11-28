import React from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const UserTimePicker = ({
  value,
  onChange,
  placeholder = "Select Time",
  ampm = false,
  disablePast = false,
  minTime,
  maxTime,
}) => {
  return (
    <div>
      <TimePicker
        value={value}
        onChange={onChange}
        label={placeholder}
        ampm={ampm}
        disablePast={disablePast}
        minTime={minTime}
        maxTime={maxTime}
        sx={{
          "& .MuiOutlinedInput-root": {
            // minWidth: "200px",
            width: { xs: "100%", md: "175px", lg: "225px", xl: "250px" },
            border: "1px solid #2B312F",
            background: "#11152e",
            borderRadius: "12px",
            height: "42px",
            fontFamily: "Arial",
            fontSize: "14px",
            color: "white",
          },
          "& .MuiIconButton-root": {
            color: "#ffffff",
          },
          "& .MuiInputLabel-root": {
            color: "#A8A8A8",
            fontFamily: "Arial",
            fontSize: "14px",
            transform: "translateY(10px)",
            pl: "6px",
            "&.Mui-focused": {
              display: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default UserTimePicker;
