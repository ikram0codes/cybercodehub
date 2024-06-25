import Image from "next/image";
import React from "react";
import styles from "./SideBar.module.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmailIcon from "@mui/icons-material/Email";
import EmailForm from "../EmailForm/EmailForm";
const SideBar = async ({ blogs }) => {
  // const trendingNow = await allBlogs(1, " ", "-likes");
  const maxLikes = Math.max(...blogs.map((blog) => blog.likes));
  const trendingNow = blogs.filter((blog) => blog.likes === maxLikes);

  return (
    <article className={styles.main}>
      <div className={styles.trending}>
        <div className={styles.head}>
          <h1>
            <WhatshotIcon />
            Trending Posts
          </h1>
        </div>
        <div className={styles.posts}>
          {trendingNow?.map((blog) => {
            return (
              <div className={styles.blog} key={blog._id}>
                <Image
                  src={blog.image}
                  alt={"Blog Image"}
                  width={70}
                  height={70}
                  loading={"lazy"}
                />
                <div className={styles.title}>
                  <h2>{blog.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.emailSub}>
        <div className={styles.head}>
          <h3>
            <EmailIcon />
            News Letter
          </h3>
        </div>
        <div className={styles.inp}>
          <EmailForm />
          <p>
            <strong>Stay Updated with every coding breakthrough!</strong>{" "}
            SUBSCRIBE for latest and freshest coding articles delivered straight
            to your inbox.
          </p>
        </div>
      </div>
    </article>
  );
};

export default SideBar;
