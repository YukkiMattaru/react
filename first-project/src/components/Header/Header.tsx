import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from './logo.svg';

type IfAuthPropsType = {
  userId: number | null
  login: string | null
  logout: () => void
}

const IfAuth: React.FC<IfAuthPropsType> = (props) => {
  return <div style={{display: "flex"}}>
    <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink>
    <p style={{cursor: "pointer", padding: 0, margin: 0, marginLeft: "10px"}} onClick={props.logout}>Выйти</p>
  </div>
}

type HeaderPropsType = {
  logout: () => void
  isAuth: boolean
  login: string | null
  userId: number | null
}

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={s.header}>
    <NavLink to='/'><img alt='logo' src={logo} /></NavLink>
      <div className={s.authBlock}>
        { props.isAuth ? <IfAuth userId={props.userId} login={props.login} logout={props.logout} /> : <NavLink to={'/login'}>Авторизация</NavLink> }
    </div>
    </header>
  );
}

export default Header;
