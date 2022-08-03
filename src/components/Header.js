import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles, Select, createTheme, ThemeProvider, MenuItem } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
  title: {
    flex:1,
    color:'gold',
    fontFamily:'Montserrat',
    fontWeight:'bold',
    cursor:'pointer',
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useNavigate();

  const { currency, setCurrency} = CryptoState();
  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main:'#fff',
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ flexGrow: 1, minWidth: 120}}>
      <AppBar color='transparent' position="static">
        <Toolbar>
          <Typography onClick={()=> history("/")} className={classes.title} variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Crypto Trading
          </Typography>
            <Select
                variant='outlined'
                style={{
                  width:100,
                  height:40,
                  marginLeft:15,
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"THB"}>THB</MenuItem>
            </Select>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  )
}
