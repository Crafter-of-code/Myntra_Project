import React from "react";
import styles from "../CSS/Header.module.css";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import AccountUser from "./AccountUser";
import Men_hover from "./Hovering_template/Men_hover";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={`${styles.bg_image}`}></a>
        <NavBar />
        <SearchBar />
        <AccountUser />
      </header>
      <div className={styles.category_displayer_4_hover}>
        <Men_hover />
        {/* <Men_hover /> */}
      </div>
    </>
  );
}
export default Header;
