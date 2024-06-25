import React from "react";
import CatCard from "../CatCard/CatCard";

const RelatedPosts = ({ blogs, styles }) => {
  return (
    <div className={styles.suggested}>
      <h1 className={styles.heading}>Related Posts</h1>
      <div className={styles.posts}>
        {blogs.map((blog) => {
          return (
            <CatCard
              key={blog._id}
              id={blog._id}
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
    </div>
  );
};

export default RelatedPosts;
