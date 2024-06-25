import React, { useState } from "react";
import styles from "./MobMenu.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LabelIcon from "@mui/icons-material/Label";
import SearchIcon from "@mui/icons-material/Search";
import PolicyIcon from "@mui/icons-material/Policy";
const MobMenu = ({ setShowMenu }) => {
  return (
    <div className={styles.main}>
      <button
        className={styles.close}
        onClick={() => {
          setShowMenu(false);
        }}
      >
        <CloseIcon />
      </button>
      <h1 className={styles.head}>Menu</h1>
      <div className={styles.menuList}>
        <ul>
          <li>
            <Link href={"/"}>
              <HomeIcon />
              Home
            </Link>
          </li>
          <li>
            <Link href={"about-cybercodehub"}>
              <InfoIcon />
              About Us
            </Link>
          </li>
          <li>
            <Link href={"https://www.ikramkhan.tech"} target="_blank">
              <AddIcCallIcon />
              Contact Us
            </Link>
          </li>
          <li>
            <Link href={"category?cat=all"}>
              <LabelIcon />
              Categories
            </Link>
          </li>
          <li>
            <Link href={"search"}>
              <SearchIcon />
              Search
            </Link>
          </li>
          <li>
            <Link href={"privacy-policy"}>
              <PolicyIcon />
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobMenu;
