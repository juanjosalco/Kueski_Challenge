import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// const useStyles = makeStyles((theme) => ({

//   fatherContainer:{

//     display: "flex",
    
//   },
//   Component1: {
//     // border: "solid black",
//     // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   },
//   option: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: "solid black",
//   },

// }));


const options = [
  { label: 'ID', value: 'ID' },
  { label: 'Nombre', value: 'Nombre' },
  { label: 'F. Nacimiento', value: 'F. Nacimiento' },
  { label: 'Nacionalidad', value: 'Nacionalidad' },
  { label: 'Estado', value: 'Estado' },
  { label: 'Ocupacion', value: 'Ocupacion' },
  { label: 'CURP', value: 'CURP' },
  { label: 'ARCO', value: 'ARCO' },
];

const DropdownFilter = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    // doesnt work
     <Box sx={{ borderRadius: 10 }}> 
        <Box sx={{ border: "solid"}}>
          <Select value={selectedOption} onChange={handleChange} displayEmpty>
            <MenuItem value="">Filtrar</MenuItem>
            {options.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </Box>
     </Box>
  );
};

// const DropdownFilter = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const classes = useStyles();

//   return (
//     <div>
//     <Box ClassName={classes.container}>
//        <Box className={classes.fatherContainer}>
//          <Box className={classes.Component1}>  
//       {/* <label htmlFor="dropdown">Filter by:</label> */}
//       <select id="dropdown" value={selectedOption} onChange={handleChange}>
        
//         <option value="">Filtrar</option>
//         {options.map(({ label, value }) => (
//           <option key={value} value={value}>
//             {label}
//           </option>
//         //   <Box className={classes.option} key={value} value={value}>
//         //   {label}
//         // </Box>
//         ))}
//       </select>
//       </Box>
//       </Box>
//     </Box>
//     </div>
//   );
// };

export default DropdownFilter;
