import React from "react";
import ReactDOM from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Toaster, toast } from "react-hot-toast";
import { theme } from "./theme";

import App from "./App.jsx";
import "./index.css";

toast.info = (message, options = {}) =>
  toast(message, {
    ...options,
    icon: "ℹ",
    style: {
      background: "#2196F3",
      color: "#fff",
      ...options.style,
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <React.StrictMode>
            <App />
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 3000,
                style: {
                  background: "#333",
                  color: "#fff",
                  fontSize: "14px",
                },
                success: {
                  style: {
                    background: "#00B4D8",
                  },
                },
                error: {
                  style: {
                    background: "#FF595E",
                  },
                },
                info: {
                  style: {
                    background: "#2196F3",
                  },
                },
              }}
            />
          </React.StrictMode>
        </LocalizationProvider>
      </AuthProvider>
    </CssBaseline>
  </ThemeProvider>
);
