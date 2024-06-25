import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../assets/dark.png";
import styles from "./Footer.module.css";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import XIcon from "@mui/icons-material/X";
import EmailForm from "../EmailForm/EmailForm";
const Footer = ({ mode }) => {
  return (
    <footer className={`${styles.main} ${mode === "dark" ? "dark" : "light"}`}>
      <div className={styles.upper}>
        <div className={styles.box}>
          <h1 className={styles.head}>About</h1>
          <div className={styles.about}>
            <Image src={logo} alt={"Logo Image"} />
            <h1>CYBER CODE HUB</h1>
            <p>
              Take your web dev skills to the next level. Teaching modern web
              development, Pro tips, best practices & the latest trends. Learn
              Fronend Development & Backend Development and start Building
              high-performance websites.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1 className={styles.head}>Contacts</h1>

          <div className={styles.items}>
            <p>
              <EmailIcon />
              ikram0pakitan@gmail.com
            </p>
            <p>
              <LocationOnIcon />
              Pakistan, Punjab Taxila
            </p>
            <p>
              <Link
                href="https://www.instagram.com/ikram0pakistan_7/"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "4px",
                  color: "inherit",
                  textDecoration: "underline",
                }}
              >
                <InstagramIcon />
                ikram0pakitan_7
              </Link>
            </p>
            <p>
              <XIcon />
              ikram_7
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1 className={styles.head}>Links</h1>
          <ul
            className={`${styles.links} ${
              mode === "dark" ? "dark-links" : "light-links"
            }`}
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/search"}>Search</Link>
            </li>
            <li>
              <Link href={"/categroy"}>Categories</Link>
            </li>
            <li>
              <Link href={"/about-cybercodehub"}>About</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <h1 className={styles.head}>News Letter</h1>

          <div className={styles.newsLetter} id="subscribe">
            <div className={styles.inp}>
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <p>
          <span style={{ fontSize: "25px" }}>&copy;</span> 2024 cybercodehub.com
        </p>
        <Link href={"/privacy-policy"} style={{ color: "#007BFF" }}>
          Privacy Policy
        </Link>
        <p>
          By <span style={{ color: "#007BFF" }}>IKRAM KHAN</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
