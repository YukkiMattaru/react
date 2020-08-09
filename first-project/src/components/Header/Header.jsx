import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
    <NavLink to='/'><img alt='logo' src={require('./logo.svg')}></img></NavLink>
      <div className={s.authBlock}>
        { props.isAuth ? <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink> : <NavLink to={'/login'}>Авторизация</NavLink> }
    </div>
    </header>
  );
}

export default Header;
