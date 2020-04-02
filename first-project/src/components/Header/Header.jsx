import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
    <a href='../../../public/index.html'><img alt='logo' src={require('./logo.svg')}></img></a>
    </header>
  );
}

export default Header;
