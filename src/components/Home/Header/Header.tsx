import {useState} from 'react'
import './Header.css'
import icon from '../../../assets/png/icon.png'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import {HomeButtonTheme} from '../../../config/themes';


export default function Header() {
  const [showedLogin,changeShowLogin] = useState(false);
  const showLogin = (() => {
    if (showedLogin){changeShowLogin(false)}
    else{changeShowLogin(true)};
  });
  return (
    <nav className='header-container'>
      <div className='header'>
        <div className='logo'>
          <img src={icon}></img>
          <p>Interface Trader</p>
        </div>
        <div className='login_button'>
        <ThemeProvider theme={HomeButtonTheme}>
        <Button variant="outlined" size="medium" onClick={showLogin}>Login</Button>
        </ThemeProvider>
        </div>
      </div>
      <form className='login-panel'>
        <label htmlFor="">Usuario</label>
        <input type="text" />
        <label htmlFor="">Senha</label>
        <input type="password" />
        <input type="submit" value="Entrar"/>
      </form>
    </nav>
  )
}
