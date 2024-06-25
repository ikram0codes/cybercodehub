"use client";
import React, { useState, useEffect } from "react";
import styles from "./Category.module.css";
import allBlogs from "@/lib/allBlogs";
import CatCard from "../Components/CatCard/CatCard";
import { Oval } from "react-loader-spinner";
const page = ({ searchParams }) => {
  const [sort, setSort] = useState("-createdAt");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  let page = 1;
  let category = searchParams.cat;
  useEffect(() => {
    (async () => {
      document.title = `${searchParams.cat} Category - Cyber Code Hub`;
      setLoading(true);
      let bgs = await allBlogs(page, category, sort);
      setBlogs(bgs);
      setLoading(false);
    })();
  }, [category, sort]);
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1>
          #{category} <span style={{ color: "#0758C9" }}>({blogs.length})</span>
        </h1>
        <select
          className={styles.filter}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="">Filter</option>
          <option value="createdAt">Oldest</option>
          <option value="-createdAt">Latest</option>
          <option value="-likes">Most Popular</option>
          <option value="-views">Most Viewed</option>
        </select>{" "}
      </div>
      <div className={styles.posts}>
        {loading ? (
          <Oval
            visible={true}
            height="100"
            width="100"
            color="#0758C9"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            secondaryColor="#474759"
            wrapperClass=""
          />
        ) : loading === false && blogs.length === 0 ? (
          <div className="alt">
            <h1>No Blogs Found!</h1>
          </div>
        ) : (
          blogs?.map((blog) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default page;
