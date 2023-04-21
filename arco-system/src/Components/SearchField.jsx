import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ 
        width: 250,
        borderRadius: 1.5,
        border: "medium solid", 
        margin: 0,
    }}
    >
      <TextField
        label="Busqueda"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
      />
    </Box>
  );
};

export default SearchField;
