import React from "react";
import styles from "../CSS/Header.module.css";
// import {
//   Bag,
//   User_Image,
//   Wislist,
// } from "../../assets/Header_user_section/asset_exporter.js";
import {
  Bag,
  User_Image,
  Wislist,
} from "../../assets/Header_Ico/asset_exporter";
function AccountUser() {
  return (
    <>
      <div className={styles.user_sections}>
        <div>
          <span>
            <img src={User_Image} alt="" />
          </span>
          <span>Profile</span>
        </div>
        <div>
          <span>
            <img src={Wislist} alt="" />
          </span>
          <span>Wishlist</span>
        </div>
        <div>
          <span>
            <img src={Bag} alt="" />
          </span>
          <span>Bag</span>
        </div>
      </div>
    </>
  );
}
export default AccountUser;
