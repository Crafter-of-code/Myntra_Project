import React from "react";
import styles from "../CSS/Main.module.css";
import { show_by_category } from "../../assets/Main_Section/main_exporter";
import category_exporter from "../../assets/Main_Section/Shop_by_category/category_exporter";
function Shop_By_Category() {
  return (
    <>
      <div className={styles.shop_by_category}>
        <div>
          <img src={show_by_category} alt="" />
        </div>
        <div>
          {category_exporter.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
      </div>
    </>
  );
}

export default Shop_By_Category;
