import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={s.item}>
        <a href='/dialogs'>Messages</a>
      </div>
      <div className={s.item}>
        <a href='index.html'>News</a>
      </div>
      <div className={s.item}>
        <a href='index.html'>Music</a>
      </div>
      <div className={s.item} >
        <a href='index.html'>Settings</a>
      </div>
    </nav>
  );
}

export default Nav;
