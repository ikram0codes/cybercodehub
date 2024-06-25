import allBlogs from "@/lib/allBlogs";
import React from "react";
import LatestPosts from "./Components/LatestPosts/LatestPosts";
import SideBar from "./Components/SideBar/SideBar";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
const DynamicContent = dynamic(
  () => import("./Components/SecondSection/SecondSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const page = async ({ searchParams }) => {
  let page = searchParams.page;
  let blogs = await allBlogs(page, "", "");
  return (
    <div className={styles.main}>
      <div className={styles.heroSection}>
        <LatestPosts blogs={blogs} searchParams={searchParams} />
        <SideBar blogs={blogs} />
      </div>
      <DynamicContent blogs={blogs} />
    </div>
  );
};

export default page;
