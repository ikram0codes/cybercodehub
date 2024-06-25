import React from "react";
import Image from "next/image";
import BigCard from "../BigCard/BigCard";
import styles from "./SecondSection.module.css";
import ikram from "../../../assets/ikram.jpg";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import InfoIcon from "@mui/icons-material/Info";
import InterestsIcon from "@mui/icons-material/Interests";
const lables = [
  "Web Development",
  "Ai/Machine Learning",
  "Backend Development",
  "Frontend Development",
  "Web Design",
  "Jobs",
  "Earning Oniline",
  "News",
  "Roadmaps",
];
const SecondSection = async ({ blogs }) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let category;
  let randomCat = getRandomInt(1, 3);
  switch (randomCat) {
    case 0:
      category = "Web Development";
      break;
    case 1:
      category = "Ai/Machine Learning";
      break;
    case 2:
      category = "Frontend Development";
      break;
    case 3:
      category = "Backend Development";
    case 4:
      category = "Web Design";
      break;
  }
  let bgs = blogs.filter((blog) => {
    return blog.category.includes(category);
  });
  return (
    <div className={styles.main}>
      <section>
        <div className={styles.mainHead}>
          <h1>{category}</h1>
        </div>
        <div className={styles.posts}>
          {bgs?.map((blog) => {
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
      </section>
      <article>
        <div className={styles.about}>
          <div className={styles.head}>
            <h2>
              <InfoIcon />
              About Owner
            </h2>
          </div>
          <div className={styles.info}>
            <Image src={ikram} alt={"Blog Owner"} loading={"lazy"} />
            <h3>
              IKRAM KHAN is a young and passionate web developer based in
              Pakistan. Cyber Code Hub is his attempt to teach modern full-stack
              development, coding techniques and other programming and online
              skills to the web.
            </h3>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.head}>
            <h2>
              <InterestsIcon />
              Social Links
            </h2>
          </div>
          <div className={styles.links}>
            <div className={styles.item}>
              <Link href={"https://www.ikramkhan.tech"}>
                <AssignmentIndIcon sx={{ color: "#6DF6F3" }} /> Portfolio
              </Link>
            </div>
            <div className={styles.item}>
              <Link href={"https://www.linkedin.com/in/ikram-khan-b93251311/"}>
                <LinkedInIcon />
                LinkedIn
              </Link>
            </div>
            <div className={styles.item}>
              <Link
                href={
                  "https://www.youtube.com/channel/UCkOhbDHareqs_4SZ8-aCI9A"
                }
              >
                <YouTubeIcon sx={{ color: "red" }} />
                YouTube
              </Link>
            </div>
            <div className={styles.item}>
              <Link href={"https://www.instagram.com/ikram0pakistan_7/"}>
                <InstagramIcon sx={{ color: "rgb(239, 60, 233)" }} />
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.head}>
            <h2>
              <LabelImportantIcon />
              Popular Categories
            </h2>
          </div>
          <div className={styles.cats}>
            {lables.map((cat, index) => {
              return (
                <Link href={`/category?cat=${cat}`} key={index}>
                  <h3>{cat}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default SecondSection;
