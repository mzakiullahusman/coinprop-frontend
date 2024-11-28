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
            border: isNovaTheme ? "1px solid #B35BF5" : "1px solid #2B312F",
            background: isNovaTheme ? "rgba(179, 91, 245, 0.22)" : "#11152e",
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
            color: "#ffffff",
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

export default UserDatePicker;
