import React from "react";
import styles from "../CSS/Main.module.css";
import {
  first_purchase_of_image,
  price_crash,
  assosiate_sponsor,
  title_sponsor,
  fitness_sponsor,
  price_crash_2,
} from "../../assets/Main_Section/main_exporter";
import Shop_By_Category from "./Shop_By_Category";
function Main() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <img src={first_purchase_of_image} alt="" />
        </div>
        <div>
          <img src={price_crash} alt="" />
        </div>
        <div>
          <div>
            <img src={assosiate_sponsor} alt="" />
          </div>
          <div>
            <img src={title_sponsor} alt="" />
          </div>
          <div>
            <img src={fitness_sponsor} alt="" />
          </div>
        </div>
        <div>
          <img src={price_crash_2} alt="" />
        </div>
        <Shop_By_Category />
      </main>
    </>
  );
}
export default Main;
