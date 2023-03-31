import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "solid black",
    borderWidth: 4,
    borderTopWidth: 1,
    flexDirection: "row",
    display: "flex",
  },
  fatherContainer:{
    border: "solid black",
    borderWidth: 4,
    borderTopWidth: 4,
    flexDirection: "row",
    display: "flex",
  },
  smallItem: {
    flex: 1,
    textAlign: "center",
    borderInline: '2px solid black'
  },
  item: {
    flex: 2,
    textAlign: "center",
    borderInline: '2px solid black'
  },
  bigItem: {
    flex: 3,
    textAlign: 'center',
    borderInline: '2px solid black'
  }
}));

function Table() {
  const classes = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box className={classes.fatherContainer}>
        <Box className={classes.smallItem}>
          <h3>ID</h3>
        </Box>
        <Box className={classes.bigItem}>
          <h3>Nombre</h3>
        </Box>
        <Box className={classes.item}>
          <h3>F. Nacimiento</h3>
        </Box>
        <Box className={classes.item}>
          <h3>Nacionalidad</h3>
        </Box>
        <Box className={classes.item}>
          <h3>Estado</h3>
        </Box>
        <Box className={classes.bigItem}>
          <h3>Ocupación</h3>
        </Box>
        <Box className={classes.bigItem}>
          <h3>CURP</h3>
        </Box>
        <Box className={classes.smallItem}>
          <h3>ARCO</h3>
        </Box>
      </Box>
      {data
        ? data.map((dato) => {
            return (
              <Box className={classes.container}>
                <Box className={classes.smallItem}>
                  <h3>{dato.ID}</h3>
                </Box>
                <Box className={classes.bigItem}>
                  <h3>{dato.F_NAME + ' ' + dato.LNAME1 + ' ' + dato.LNAME2}</h3>
                </Box>
                <Box className={classes.item}>
                  <h3>{dato.BIRTH_DATE.substring(0, 10)}</h3>
                </Box>
                <Box className={classes.item}>
                  <h3>{dato.NATIONALITY}</h3>
                </Box>
                <Box className={classes.item}>
                  <h3>{dato.STATE_BORN_IN}</h3>
                </Box>
                <Box className={classes.bigItem}>
                  <h3>{dato.OCCUPATION}</h3>
                </Box>
                <Box className={classes.bigItem}>
                  <h3>{dato.CURP}</h3>
                </Box>
                <Box className={classes.smallItem}>
                  <h3>...</h3>
                </Box>
              </Box>
            );
          })
        : "Loading..."}
    </>
  );
}

export default Table;
