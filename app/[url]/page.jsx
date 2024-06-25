import Image from "next/image";
import React, { Suspense } from "react";
import Head from "next/head";
import styles from "./blog.module.css";
import { AccessTimeFilledOutlined } from "@mui/icons-material";
import ikram from "../../assets/ikram.jpg";
import singleBlog from "@/lib/singleBlog";
import allBlogs from "@/lib/allBlogs";
import Panel from "../Components/Panel/Panel";
import Toc from "../Components/Toc/Toc";
import TocIcon from "@mui/icons-material/Toc";
import formatDate from "@/lib/formatDate";
import { MobToc } from "../Components";
import EmailForm from "../Components/EmailForm/EmailForm";

const LazyComponent = React.lazy(() =>
  import("../../app/Components/RelatedPosts/RelatedPosts")
);

export async function generateMetadata({ params }) {
  const url = params.url;
  const blog = await singleBlog(url);
  const blogUrl = `https://www.cybercodehub.com/${blog?.url || ""}`;

  return {
    title: blog ? blog.title : "Blog Not Found",
    description:
      blog?.metaDesc ||
      "This blog was not found, may be it has been deleted from the database.",
    alternates: {
      canonical: blogUrl,
    },
    keywords: blog?.keywords || [],
    openGraph: {
      type: "article",
      url: blogUrl,
      title: blog ? blog.title : "Blog Not Found",
      description:
        blog?.metaDesc ||
        "This blog was not found, may be it has been deleted from the database.",
      images: [
        {
          url: blog?.image || "default-image-url",
          width: 800,
          height: 600,
          alt: blog?.title || "Blog Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog ? blog.title : "Blog Not Found",
      description:
        blog?.metaDesc ||
        "This blog was not found, may be it has been deleted from the database.",
      images: [
        {
          url: blog?.image || "default-image-url",
          alt: blog?.title || "Blog Image",
        },
      ],
    },
  };
}

const BlogPage = async ({ params }) => {
  let url = params.url;
  const blog = await singleBlog(url, "no-store");
  const blogs = await allBlogs(1, "", "");
  const maxLikes = Math.max(...blogs.map((blog) => blog.likes));
  const trendingNow = blogs.filter((blog) => blog.likes === maxLikes);
  let date = formatDate(blog.createdAt);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.metaDesc} />
        <meta name="keywords" content={blog.keywords.join(", ")} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDesc} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.cybercodehub.com/${blog.url}`}
        />
        <meta property="og:image" content={blog.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.metaDesc} />
        <meta name="twitter:image" content={blog.image} />
        <link
          rel="canonical"
          href={`https://www.cybercodehub.com/${blog.url}`}
        />
      </Head>
      <div className={styles.main}>
        <Panel url={blog.url} likes={blog.likes} title={blog.title} />
        <article className={styles.mobTbc}>
          <MobToc styles={styles} />
        </article>
        <section className={styles.blog}>
          <div className={styles.info}>
            <header>
              <h1 className={styles.title}>{blog.title}</h1>
              <div className={styles.credits}>
                <div className={styles.ik}>
                  <Image
                    src={ikram}
                    alt="IKRAM KHAN"
                    className={styles.ikPic}
                    loading="lazy"
                  />
                  <h4>By IKRAM KHAN</h4>
                  <span> - </span>
                  <h4>
                    <AccessTimeFilledOutlined sx={{ fontSize: "16px" }} />
                    {date}
                  </h4>
                </div>
              </div>
            </header>
            <Image
              className={styles.blogImage}
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              priority
            />
            <div
              id="description"
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          </div>
        </section>
        <aside className={styles.sideBar}>
          <article className={styles.tbc}>
            <h1 className={styles.sideHead}>
              <TocIcon />
              Table of Contents
            </h1>
            <Toc />
          </article>
          <div className={styles.trending}>
            <h1 className={styles.sideHead}>Trending Now</h1>
            <div className={styles.tposts}>
              {trendingNow.map((blog) => (
                <div className={styles.tblog} key={blog._id}>
                  <Image
                    src={blog.image}
                    alt="Blog Image"
                    width={70}
                    height={70}
                    priority
                  />
                  <div className={styles.title}>
                    <h2>{blog.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.newsLetter}>
            <h1 className={styles.sideHead}>News Letter</h1>
            <div className={styles.inp}>
              <EmailForm />
              <p>
                <strong>Stay Updated with every coding breakthrough!</strong>{" "}
                SUBSCRIBE for latest and freshest coding articles delivered
                straight to your inbox.
              </p>
            </div>
          </div>
        </aside>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent blogs={blogs} styles={styles} />
      </Suspense>
    </>
  );
};

export default BlogPage;
