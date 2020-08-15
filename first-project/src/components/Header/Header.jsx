import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const IfAuth = (props) => {
  return <div style={{display: "flex"}}>
    <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink>
    <p style={{cursor: "pointer", padding: 0, margin: 0, marginLeft: "10px"}} onClick={props.logout}>Выйти</p>
  </div>
}


const Header = (props) => {
  return (
    <header className={s.header}>
    <NavLink to='/'><img alt='logo' src={require('./logo.svg')}></img></NavLink>
      <div className={s.authBlock}>
        { props.isAuth ? <IfAuth userId={props.userId} login={props.login} logout={props.logout} /> : <NavLink to={'/login'}>Авторизация</NavLink> }
    </div>
    </header>
  );
}

export default Header;
