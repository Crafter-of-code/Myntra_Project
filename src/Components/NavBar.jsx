import React from "react";
import styles from "./CSS/Header.module.css";
function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">MEM</a>
          </li>
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            <a href="#">KIDS</a>
          </li>
          <li>
            <a href="#">HOME & LIVING</a>
          </li>
          <li>
            <a href="#">BEAUTY</a>
          </li>
          <li>
            <a href="#">
              STUDIO <sup>NEW</sup>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
