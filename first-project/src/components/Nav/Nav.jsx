import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a href='index.html'>Profile</a>
      </div>
      <div className={s.item}>
        <a href='index.html'>Messages</a>
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
