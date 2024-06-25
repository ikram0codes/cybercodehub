"use client";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Toc from "./Components/Toc/Toc";
import { ArrowForwardIos, KeyboardArrowDown } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TocIcon from "@mui/icons-material/Toc";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import emailSub from "@/lib/emailSub";

export const ButtonLeft = ({ styles, mode }) => {
  const [list, setList] = useState();
  useEffect(() => {
    let cat = document.querySelector("#cat");
    setList(cat);
  }, []);
  return (
    <button
      style={{
        background:
          mode === "dark"
            ? "linear-gradient(to left, transparent, #1F222E"
            : "linear-gradient(to left, transparent, #9FA2AE",
      }}
      className={styles.arrow}
      id={"left"}
      onClick={() => {
        list.scrollLeft -= 100;
      }}
    >
      <ArrowBackIosIcon />
    </button>
  );
};

export const ButtonRight = ({ styles, mode }) => {
  const [list, setList] = useState();
  useEffect(() => {
    let cat = document.querySelector("#cat");
    setList(cat);
  }, []);
  return (
    <button
      style={{
        background:
          mode === "dark"
            ? "linear-gradient(to right, transparent, #1F222E"
            : "linear-gradient(to right, transparent, #9FA2AE",
      }}
      className={styles.arrow}
      id={"right"}
      onClick={() => {
        list.scrollLeft += 100;
      }}
    >
      <ArrowForwardIos />
    </button>
  );
};

export const CatList = ({ styles, mode }) => {
  useEffect(() => {
    let catList = document.querySelectorAll("#cat li a");
    catList[0].classList.add("selected-cat");
    catList.forEach((cat) => {
      cat.addEventListener("click", () => {
        catList.forEach((cat) => {
          cat.classList.remove("selected-cat");
        });
        cat.classList.add("selected-cat");
      });
    });
  }, []);
  return (
    <ul id="cat" className={styles.catUl}>
      {categories.map((cat, index) => {
        return (
          <li key={index}>
            <Link
              href={`/category?cat=${cat}`}
              styles={{ color: mode === "dark" ? "white" : "black" }}
              mode={mode}
            >
              {cat}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const categories = [
  "All",
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Javascript",
  "HTMl5",
  "CSS3",
  "Ai/Machine Learning",
  "Web Design",
  "Programming",
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
  "Roadmaps",
  "Algorithms",
  "Skills",
  "Coding Tecniques",
];
export const Pagination = ({ styles, searchParams }) => {
  const router = useRouter();
  let page = searchParams.page || 1;
  page = Number(page);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.btn}
        onClick={() => {
          if (page == 1) {
            router.push(`?page=${1}`);
          }
          router.push(`?page=${page - 1}`);
        }}
      >
        <ArrowBackIosNewIcon /> Prev
      </button>
      <p>1 / 4</p>
      <button
        className={styles.btn}
        onClick={() => {
          router.push(`?page=${page + 1}`);
        }}
      >
        Next
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export const MobToc = ({ styles }) => {
  const [showMobToc, setShowMobToc] = useState(false);
  return (
    <>
      <div className={styles.drop}>
        <h1>
          <TocIcon />
          Table of Contents
        </h1>

        <button
          className={styles.dropBtn}
          onClick={() => {
            if (showMobToc === true) {
              setShowMobToc(false);
            } else {
              setShowMobToc(true);
            }
          }}
        >
          {showMobToc ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}
        </button>
      </div>
      {showMobToc && <Toc />}
    </>
  );
};

