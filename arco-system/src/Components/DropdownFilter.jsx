import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
     <Box sx={{ 
      // width: 88,
      // borderRadius: 1.5,
      // border: "medium solid",
    }}
     > 
      <Select value={selectedOption} onChange={handleChange} displayEmpty>
        <MenuItem value="">Filtrar</MenuItem>
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
     </Box>
  );
};

export default DropdownFilter;
