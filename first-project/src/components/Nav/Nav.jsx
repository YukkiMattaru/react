import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/profile'>Профиль</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/dialogs'>Сообщения</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/news'>Новости</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to='/music'>Музыка</NavLink>
      </div>
      <div className={s.item + ' ' + s.settings}>
        <NavLink activeClassName={s.active} to='/settings'>Настройки</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
