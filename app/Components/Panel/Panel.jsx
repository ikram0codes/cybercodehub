"use client";
import React, { useContext, useState } from "react";
import styles from "./Panel.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { toast } from "react-hot-toast";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { BlogContext } from "@/app/ContextProvider";

const Panel = ({ likes, url, title }) => {
  let { mode } = useContext(BlogContext);
  const [bgLikes, setBgLikes] = useState(likes);
  const likeBlog = async () => {
    try {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/${url}`,
        {
          method: "PUT",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      toast.success(data.message);
      setBgLikes(bgLikes + 1);
    } catch (error) {
      toast.success(error.message);
    }
  };
  return (
    <div
      className={`${styles.main} ${
        mode === "dark" ? "light-panel" : "dark-panel"
      }`}
    >
      <button
        className={styles.btn}
        onClick={async () => {
          await likeBlog(url);
        }}
      >
        <FavoriteIcon sx={{ color: "red" }} /> {bgLikes}
      </button>
      <button className={styles.btn}>
        <CommentIcon />
      </button>
      <button className={styles.btn}>
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </button>
      <button className={styles.btn}>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </button>
      <button className={styles.btn} style={{ borderRight: "none" }}>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </button>
    </div>
  );
};

export default Panel;
