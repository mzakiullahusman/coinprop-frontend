import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const UserDatePicker = ({
  value,
  onChange,
  placeholder = "Select Date",
  disableFuture = false,
  disablePast = false,
  minDate,
  maxDate,
  isNovaTheme = false,
}) => {
  return (
    <div>
      <DatePicker
        value={value}
        onChange={onChange}
        label={placeholder}
        disableFuture={disableFuture}
        disablePast={disablePast}
        minDate={minDate}
        maxDate={maxDate}
        sx={{
          "& .MuiOutlinedInput-root": {
            border: isNovaTheme ? "1px solid #9ca3af" : "1px solid #3d4054",
            background: isNovaTheme ? "#182230" : "#182230",
            borderRadius: "12px",
            height: "42px",
            fontFamily: "Poppins",
            fontSize: "14px",
            color: "white",
          },
          "& .MuiIconButton-root": {
            color: "#ffffff",
          },
          "& .MuiInputLabel-root": {
            color: "#ffffff",
            fontFamily: "Poppins",
            fontSize: "14px",
            transform: "translateY(10px)",
            pl: "0.7rem",
            "&.Mui-focused": {
              display: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default UserDatePicker;
