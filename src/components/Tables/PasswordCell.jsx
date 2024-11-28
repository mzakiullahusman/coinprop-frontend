import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordCell = ({ value }) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body2" style={{ marginRight: 8 }}>
        {visible ? value : "•".repeat(value.length)}
      </Typography>
      <IconButton size="small" onClick={handleToggle} sx={{ color: "#D974F3" }}>
        {visible ? (
          <VisibilityOff fontSize="small" />
        ) : (
          <Visibility fontSize="small" />
        )}
      </IconButton>
    </div>
  );
};

export default PasswordCell;
