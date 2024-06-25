import search from "@/lib/search";
import React from "react";
import BigCard from "../Components/BigCard/BigCard";
import styles from "./Search.module.css";
export async function generateMetadata({ searchParams }) {
  let title = searchParams.title;
  return {
    title: title || "Search",
    description:
      "Find web development tutorials & guides you need! Search by topic, skill level, or various Backend and frontend frameworks. Free resources to master coding, design, and build awesome websites.",
  };
}
const page = async ({ searchParams }) => {
  let title = searchParams.title || "";
  let blogs;
  if (title !== "") {
    blogs = await search(title);
  } else {
    blogs = [];
  }

  return title === "" ? (
    <div className={"alt"}>
      <h1>Search a Blog or Coding Article</h1>
    </div>
  ) : blogs?.length === 0 ? (
    <div className={"alt"}>
      <h1>No Blogs Found!</h1>
    </div>
  ) : (
    <div className={styles.main}>
      <div className={styles.posts}>
        {blogs?.map((blog) => {
          return (
            <BigCard
              key={blog._id}
              title={blog.title}
              image={blog.image}
              category={blog.category}
              createdAt={blog.createdAt}
              url={blog.url}
              metaDesc={blog.metaDesc}
              description={blog.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
