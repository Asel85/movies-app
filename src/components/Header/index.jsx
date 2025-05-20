import React, { useEffect, useState } from 'react'
import logo from "../../assets/img/Netflix-logo.png";
import styles from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
     e.preventDefault();
     if(query.trim()){
       navigate(`/search/:${query}`);
       setQuery("");
     }
  };

  return (
    <header>
      <div className={styles.header_block}>
      <div className={styles.header_logo}>
      <img className={styles.header_img} src={logo} alt="logo-img" />
      <nav className={styles.header_nav}>
      <a href="/">Home</a>
        <a href="#">Film</a>
        <a href="#">Serie TV</a>
        <a href="#">Preferiti</a>
      </nav>
      </div>
      <form onSubmit={handleSubmit}>
      <input type='search' onChange={(e)=>{
        setQuery(e.target.value)
      }} value={query} placeholder='Cerca un film...' />
      </form>
      </div>
    </header>
  )
}

export default Header
