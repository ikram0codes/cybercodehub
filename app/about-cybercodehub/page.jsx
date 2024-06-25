import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Dark from "../../assets/dark.png";

export const metadata = {
  title: "About Cyber Code Hub",
  alternates: {
    canonical: `https://cybercodehub.com/about-cybercodehub`,
  },
  description: `Cyber Code Hub is an online platform dedicated to teach web
          development for free. We're passionate about empowering aspiring
          developers! Our team of web development wizards crafts engaging
          content that teaches in-demand skills like frontend development,
          backend development, React.js, Next.js, web design, cyber security and
          all the fields related to full-stack development.`,
};
const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image loading="eager" src={Dark} alt={"Cyber code hub"} />
        <h1>About Cyber Code Hub</h1>
      </div>
      <div className={styles.about}>
        <p>
          Cyber Code Hub is an online platform dedicated to teach web
          development for free. We're passionate about empowering aspiring
          developers! Our team of web development wizards crafts engaging
          content that teaches in-demand skills like frontend development,
          backend development, React.js, Next.js, web design, cyber security and
          all the fields related to full-stack development. Cyber Code Hub blogs
          even dives into the future with AI and machine learning. We focus on
          making complex concepts clear for beginners, ensuring you have the
          foundation to become a modern web development rockstar. Dive in,
          explore, and get ready to code your dreams into reality!.
        </p>

        <Image
          src={
            "https://res.cloudinary.com/dz4z5m7qt/image/upload/v1701614332/how-to-apply-custom-themes-in-visualstudio-code_jks7ow.jpg"
          }
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default page;
