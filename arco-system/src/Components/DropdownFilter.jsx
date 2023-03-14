import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function DropdownFilter(ShowMe) {
  const classes = useStyles();
  return (
    <Box className={ShowMe ? classes.Component1 : classes.Component2}>
      // create a box with a drop-down menu
      <Typography variant="H4">This is a test</Typography>
    </Box>
  );
};

const useStyles = makeStyles({
  Component1: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  Component2: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});
