"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./error.module.css";
import errImg from "../assets/error.jpg";
import ReplayIcon from "@mui/icons-material/Replay";
const error = ({ error, reset }) => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <Image src={errImg} alt="Cyber Code Hub Blog - Error 404" />
        <h1 className={styles.message}>
          <span>Oops!</span>, {error.message}
        </h1>
      </div>
      <div className={styles.panel}>
        <Link href={"/"} className={styles.btn}>
          Home
        </Link>
        <button
          className={styles.btn}
          onClick={() => {
            reset();
          }}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default error;
