"use client";
import { BlogContext } from "@/app/ContextProvider";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Toc.module.css";
const Toc = () => {
  const [heads, setHeads] = useState([]);
  const { mode } = useContext(BlogContext);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`#toc li a[href="#${id}"]`)
            .classList.add("active");
          document
            .querySelector(`#toc li a[href="#${id}"]`)
            .classList.remove("not-active");
        } else {
          document
            .querySelector(`#toc li a[href="#${id}"]`)
            .classList.remove("active");
          document
            .querySelector(`#toc li a[href="#${id}"]`)
            .classList.add("not-active");
        }
      });
    });
    document.querySelectorAll("h1[id]").forEach((h1) => {
      observer.observe(h1);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let headings = Array.from(document.querySelectorAll("#description h1"));
    setHeads(headings);
  }, []);
  return (
    <ul id="toc" className={styles.tbc} style={{ display: "flex" }}>
      {heads.length !== 0 &&
        heads.map((heading, index) => {
          return (
            <li key={index}>
              <Link href={`#${heading.id}`} mode={mode}>
                {heading.textContent}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Toc;
