import { Button, Typography } from "@mui/material";

import { stylesMui } from "./styles";

const ButtonAuth = ({ labelText }) => {
  return (
    <div>
      <Button sx={stylesMui.buttonAuth} type="submit" fullWidth>
        <Typography sx={stylesMui.buttonText}>{labelText}</Typography>
      </Button>
    </div>
  );
};

export default ButtonAuth;
