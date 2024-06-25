import { Pagination } from "@/app/Components";
import React from "react";
import SimpleCard from "../SimpleCard/SimpleCard";
import styles from "./LatestPosts.module.css";

const LatestPosts = ({ blogs, searchParams }) => {
  return (
    <section className={styles.main}>
      <div className={styles.head}>
        <h1>Latest Posts</h1>
      </div>
      <div className={styles.posts}>
        {blogs?.map((blog) => {
          return (
            <SimpleCard
              key={blog._id}
              title={blog.title}
              views={blog.views}
              image={blog.image}
              categories={blog.category}
              url={blog.url}
              createdAt={blog.createdAt}
            />
          );
        })}
      </div>
      <Pagination styles={styles} searchParams={searchParams} />
    </section>
  );
};

export default LatestPosts;
