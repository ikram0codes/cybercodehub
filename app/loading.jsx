"use client";
import { BlogContext } from "@/app/ContextProvider";
import React, { useContext } from "react";
import { InfinitySpin } from "react-loader-spinner";
import styles from "./Components/MainLoader/MainLoader.module.css";
const MainLoader = () => {
  const { mode } = useContext(BlogContext);
  return (
    <div
      className={styles.main}
      style={{ backgroundColor: `${mode === "dark" ? "#1F222E" : "#9FA2AE"}` }}
    >
      <InfinitySpin
        visible={true}
        width=" 200"
        color="#0758C9"
        ariaLabel="infinity-spin-loading"
      />
      <h3>
        cybercodehub.com Blog - By <span>IKRAM KHAN</span>
      </h3>
    </div>
  );
};

export default MainLoader;
