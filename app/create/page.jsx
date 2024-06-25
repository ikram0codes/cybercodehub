"use client";
import React, { useEffect, useState } from "react";
import styles from "./Create.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import createBlog from "@/lib/createBlog";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
const categories = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Javascript",
  "HTMl5",
  "CSS3",
  "Ai/Machine Learning",
  "Web Design",
  "Earning Online",
  "Cyber Security",
  "React Js",
  "Node Js",
  "Next Js",
  "Top 10",
  "How to",
  "Jobs",
  "News",
  "Python",
  "Technologies",
  "Algorithms",
  "Skills",
  "Roadmaps",
  "Coding Tecniques",
];
const page = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);
  const [key, setKey] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [description, setDescription] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const addkeyword = () => {
    setKeywords([key, ...keywords]);
    setKey("");
  };
  const changeCategory = (newCategory) => {
    setCategory([newCategory, ...category]);
  };
  const handleUpload = async () => {
    setLoading(true);
    try {
      await createBlog(
        title,
        description,
        image,
        category,
        url,
        keywords,
        metaDesc,
        toast
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return toast.error(error.message);
    }
  };

  useEffect(() => {
    const prompt = window.prompt("Give The Pass key");
    if (!prompt) {
      return redirect("/");
    }
    if (prompt !== process.env.NEXT_PUBLIC_CREATE_KEY) {
      return redirect("/");
    }
    setShow(true);
  }, []);
  return (
    <div className={styles.main} style={{ display: show ? "flex" : "none" }}>
      {showCategories && (
        <div className={styles.preview}>
          <button
            className={styles.close}
            onClick={() => {
              setShowCategories(false);
            }}
          >
            <CloseIcon />
          </button>
          <ul>
            {category.length === 0 ? (
              <h1>No Keywords!</h1>
            ) : (
              category.map((c, index) => {
                return <li key={index}>{c}</li>;
              })
            )}
          </ul>
        </div>
      )}
      {showKeywords && (
        <div className={styles.preview}>
          <button
            className={styles.close}
            onClick={() => {
              setShowKeywords(false);
            }}
          >
            <CloseIcon />
          </button>
          <ul>
            {keywords.length === 0 ? (
              <h1>No Keywords!</h1>
            ) : (
              keywords.map((k, index) => {
                return <li key={index}>{k}</li>;
              })
            )}
          </ul>
        </div>
      )}
      <div className={styles.submit}>
        <button
          type={"submit"}
          onClick={() => {
            handleUpload();
          }}
          disabled={loading}
        >
          Publish
        </button>
      </div>
      <input
        className={styles.title}
        type={"text"}
        placeholder={"Blog Title"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div className={styles.inpBox}>
        <input
          type={"text"}
          placeholder={"Blog Url"}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          type={"text"}
          placeholder={"Blog Image"}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type={"text"}
          placeholder={"Meta Description"}
          onChange={(e) => {
            setMetaDesc(e.target.value);
          }}
        />
      </div>
      <div className={styles.inpBox2}>
        <div className={styles.cats}>
          <select onChange={(event) => changeCategory(event.target.value)}>
            <option value="">Select Categories</option>
            {categories.map((c, index) => {
              return (
                <option value={c} key={index}>
                  {c}
                </option>
              );
            })}
          </select>
          <h1 className={styles.count}>{category.length}</h1>
          <button
            className={styles.show}
            onClick={() => {
              setShowCategories(true);
            }}
          >
            <VisibilityIcon />
          </button>
        </div>
        <div className={styles.keywords}>
          <h1 className={styles.count}>{keywords.length}</h1>
          <button
            className={styles.show}
            onClick={() => {
              setShowKeywords(true);
            }}
          >
            <VisibilityIcon />
          </button>
          <input
            type="text"
            value={key}
            placeholder="Type Keyword"
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              addkeyword();
              setKey("");
            }}
          >
            Add
          </button>
        </div>
      </div>
      <textarea
        name="Description"
        className={styles.description}
        placeholder={"Blog Content"}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default page;
