"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import Light from "../../../assets/light.png";
import Dark from "../../../assets/dark.png";
import { Search } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonLeft, ButtonRight, CatList } from "@/app/Components";
import MobMenu from "../MobMenu/MobMenu";
import Link from "next/link";
import { BlogContext } from "@/app/ContextProvider";
import { setCookie } from "cookies-next";
import Autocomplete from "../Autocomplete/Autocomplete";
// import search from "@/lib/search";
import { useRouter } from "next/navigation";
import MobSearch from "../MobSearch/MobSearch";


const Header = ({ mode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [title, setTitle] = useState(false);
  const { setMode } = useContext(BlogContext);
  const [blogs, setBlogs] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobSearch, setShowMobSearch] = useState(false);
  const router = useRouter();
  // const SearchFunc = async (e) => {
  // let bgs = await search(e.target.value);
  // setBlogs(bgs);
  // setShowSearch(true);
  // if (e.target.value === "") {
  //   setShowSearch(false);
  // }
  // setTitle(e.target.value);
  // };
  // if (showSearch === true) {
  // setTimeout(() => {
  // setShowSearch(false);
  // }, 10000);
  // }
  return (
    <header
      className={`${styles.header} ${mode === "dark" ? "dark" : "light"}`}
    >
      {showMenu && <MobMenu setShowMenu={setShowMenu} />}
      {showMobSearch && (
        <MobSearch setShowMobSearch={setShowMobSearch} router={router} />
      )}
      <div className={styles.main}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={mode === "dark" ? Dark : Light} alt="Cyber Code Hub" />
            <h1 style={{ color: mode === "dark" ? "#0569f5" : "#0c56be" }}>
              CYBER CODE
            </h1>
          </Link>
        </div>
        <div className={styles.search}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/search?title=${title}`);
            }}
          >
            {showSearch ? <Autocomplete blogs={blogs} /> : null}
            <button className={styles.submit} type={"submit"}>
              <Search />
            </button>
            <input
              type="search"
              placeholder="Search Articles"
              // onChange={(e) => {
              // SearchFunc(e);
              // }}
            />
          </form>
        </div>
        <div className={styles.hook}>
          <button
            style={{
              backgroundColor: mode === "dark" ? "white" : "black",
              color: mode === "dark" ? "black" : "white",
            }}
            id="mob-search"
            className={styles.icon}
            onClick={() => {
              setShowMobSearch(true);
            }}
          >
            <Search />
          </button>
          <button
            style={{
              backgroundColor: mode === "dark" ? "white" : "black",
              color: mode === "dark" ? "black" : "white",
            }}
            className={styles.icon}
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <MenuIcon />
          </button>
          <button
            className={styles.icon}
            style={{
              backgroundColor: mode === "dark" ? "white" : "black",
              color: mode === "dark" ? "black" : "white",
            }}
            onClick={() => {
              if (mode === "dark") {
                setMode("light");
                setCookie("mode", "light");
              } else {
                setMode("dark");
                setCookie("mode", "dark");
              }
            }}
          >
            <LightModeIcon />
          </button>
          <Link className={styles.log} href="#subscribe">
            Subscribe
          </Link>
        </div>
      </div>
      <div className={styles.categories}>
        <ButtonLeft styles={styles} mode={mode} />
        <ButtonRight styles={styles} mode={mode} />
        <CatList styles={styles} mode={mode} />
      </div>
    </header>
  );
};

export default Header;
