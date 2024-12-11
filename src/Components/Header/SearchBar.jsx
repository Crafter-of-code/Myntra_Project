import React from "react";
import styles from "../CSS/Header.module.css";
import { Search_lense } from "../../assets/Header_Ico/asset_exporter";
function SearchBar() {
  return (
    <>
      <div className={styles.search_section}>
        <div>
          <img src={Search_lense} alt="" />
        </div>
        <input type="text" placeholder="Search for product branch and more" />
      </div>
    </>
  );
}
export default SearchBar;
