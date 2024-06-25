import React from "react";
import Image from "next/image";
import styles from "./SimpleCard.module.css";
import { AccessTimeFilledOutlined } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import formatDate from "@/lib/formatDate";
const SimpleCard = async ({
  title,
  image,
  views,
  categories,
  url,
  id,
  createdAt,
}) => {
  let date = formatDate(createdAt);
  if (views >= 100000) {
    views = views.toString();
    views = views.slice(0, 3);
    views = views + "" + "k";
  }

  if (views >= 10000) {
    views = views.toString();
    views = views.slice(0, 3);
    views = views.slice(0, 2) + "." + views.slice(2);
    views = views + "" + "k";
  }
  if (views >= 1000) {
    views = views.toString();
    views = views.slice(0, 3);
    views = views.slice(0, 1) + "." + views.slice(1);
    views = views + "" + "k";
  }

  return (
    <div className={styles.main} key={id}>
      <Link href={`/${url}`} className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={image} alt={title} width={500} height={500} priority />
          <div className={styles.categories}>
            {categories?.slice(0, 2).map((category, index) => {
              return (
                <p href={`/category?cat=${category}`} key={index}>
                  #{category}
                </p>
              );
            })}
          </div>
        </div>
        <h1 className={styles.title}>{title?.substring(0, 50)}...</h1>
        <div className={styles.info}>
          <p className={styles.meta}>
            <AccessTimeFilledOutlined sx={{ fontSize: "15px" }} />
            {date}
          </p>
          <p className={styles.meta}>
            <VisibilityIcon sx={{ fontSize: "16px" }} />
            {views}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SimpleCard;
