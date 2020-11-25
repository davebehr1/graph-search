import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./ButtonStyles";

export const ClipButton = ({ handleClick, label, fontSize, padding, type }) => {
  const classes = useStyles();
  return (
    <Button type={type} className={classes.tagwrap} onClick={handleClick}>
      <div className={classes.buttonWrapper}>
        <div className={classes.button} style={{ padding: padding }}>
          <Typography className={classes.Link} style={{ fontSize: fontSize }}>
            {label}
          </Typography>
        </div>
      </div>
    </Button>
  );
};
