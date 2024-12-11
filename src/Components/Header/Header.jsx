import React from "react";
import styles from "../CSS/Header.module.css";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import AccountUser from "./AccountUser";
function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={`${styles.bg_image}`}></a>
      <NavBar />
      <SearchBar />
      <AccountUser />
    </header>
  );
}
export default Header;
