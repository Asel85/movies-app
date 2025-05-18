import React from 'react'
import logo from "../../assets/img/Netflix-logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.header_block}>
      <div className={styles.header_logo}>
      <img className={styles.header_img} src={logo} alt="logo-img" />
      <nav className={styles.header_nav}>
      <a href="#">Home</a>
        <a href="#">Film</a>
        <a href="#">Serie TV</a>
        <a href="#">Preferiti</a>
      </nav>
      </div>
      <input type="text"  placeholder='Cerca un film...' />
      </div>
    </header>
  )
}

export default Header
