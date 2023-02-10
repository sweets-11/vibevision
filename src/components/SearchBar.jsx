import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1.5px solid #808080',
        backgroundColor: "#000",
        pl: 2,
        boxShadow: 'none',
        ml: { xs:5},
      }}
    >
      <input
      style={{backgroundColor: "#000", color: "#bababa"}}
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color:"#808080"}} >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;


//difference between link and usenavigate