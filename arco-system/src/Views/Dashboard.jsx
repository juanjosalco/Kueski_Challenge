import React from "react";
import Table from "../Components/Table";
import DropdownFilter from "../Components/DropdownFilter";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 80
  },
}));

function Dashboard() {
    const classes = useStyles()
  return (
    <Box className={classes.container}>
        <DropdownFilter/>
        <Table/>
    </Box>
  )
}

export default Dashboard;
