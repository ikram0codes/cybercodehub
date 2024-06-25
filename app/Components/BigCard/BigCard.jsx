"use client";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./BigCard.module.css";
import { AccessTimeFilled } from "@mui/icons-material";
import Link from "next/link";
import formatDate from "@/lib/formatDate";
import { BlogContext } from "@/app/ContextProvider";
import { useRouter } from "next/navigation";
const BigCard = ({ url, metaDesc, title, image, createdAt, category }) => {
  let date = formatDate(createdAt);
  let { mode } = useContext(BlogContext);
  let router = useRouter();
  return (
    <div className={`${styles.main} ${mode === "dark" ? "dark" : "light"}`}>
      <Link href={`/${url}`}>
        <Image
          width={500}
          height={500}
          loading={"lazy"}
          src={image}
          alt={title}
          priority={false}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{title}.</h1>
          <div className={styles.categories}>
            {category?.map((category, index) => {
              return (
                <h3
                  href={`/category?cat=${category}`}
                  key={index}
                  onClick={() => {
                    router.push(`/category?cat=${category}`);
                  }}
                >
                  #{category}
                </h3>
              );
            })}
          </div>
          <h3 className={styles.desc}>{metaDesc}</h3>
          <div className={styles.extra}>
            <p className={styles.date}>
              <AccessTimeFilled /> {date}
            </p>
            <button
              className={styles.read}
              onClick={() => {
                router.push(`/${url}`);
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BigCard;
