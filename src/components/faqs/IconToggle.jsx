import { IconButton } from "@mui/material";
import { Close, Add } from "@mui/icons-material";

const IconToggle = ({ expanded }) => (
    <IconButton size="small" sx={{ color: "#ffffff" }}>
      {expanded ? <Close /> : <Add />}
    </IconButton>
);

export default IconToggle;
