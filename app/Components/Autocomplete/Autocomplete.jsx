import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Autocomplete.module.css";
const Autocomplete = ({ blogs }) => {
  return (
    <div className={styles.main}>
      {blogs.length !== 0 &&
        blogs.map((blog) => {
          return (
            <div className={styles.blog} key={blog._id}>
              <Link href={`/${blog.url}`}>
                <Image
                  src={blog.image}
                  width={60}
                  height={60}
                  alt={"Post Image"}
                  quality={100}
                />
                <h1 className={styles.title}>{blog.title}</h1>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Autocomplete;
