import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./ButtonStyles";

export const ClipButton = ({ handleClick, label, fontSize, padding, type }) => {
  const classes = useStyles();
  return (
    <Button type={type} className={classes.button} onClick={handleClick}>
      <Typography className={classes.Link} style={{ fontSize: fontSize }}>
        {label}
      </Typography>
    </Button>
  );
};
