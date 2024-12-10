import React from "react";
import styles from "./CSS/Header.module.css";
import image from "../assets/54481.png";
function SearchBar() {
  return (
    <>
      <div className={styles.search_section}>
        <div>
          <img src={image} alt="" />
        </div>
        <input type="text" placeholder="Search for product branch and more" />
      </div>
    </>
  );
}
export default SearchBar;
