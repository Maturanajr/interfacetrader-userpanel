import React from 'react'
import './Header.css'
import icon from '../../../assets/png/icon.png'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import {HomeButtonTheme} from '../../../config/themes';

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={icon}></img>
        <p>Interface Trader</p>
      </div>
      <div className='login_button'>
      <ThemeProvider theme={HomeButtonTheme}>
      <Button variant="outlined" size="medium">Login</Button>
      </ThemeProvider>
      </div>
    </div>
  )
}
