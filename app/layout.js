import ContextProvider from "./ContextProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata = {
  openGraph: {
    title: "Cyber Code Hub - The Web Development Hub",
    description:
      "Take your web development skills to the next level. Teaching modern web development, Pro tips, best practices & the latest trends. Learn Frontend Development & Backend Development and start Building high-performance websites.",
    image:
      "https://res.cloudinary.com/dz4z5m7qt/image/upload/v1701614332/how-to-apply-custom-themes-in-visualstudio-code_jks7ow.jpg",
  },
  metadataBase: new URL("https://www.cybercodehub.com"),
  title: {
    template: "%s | Cyber Code Hub",
    default: "Cyber Code Hub - The Web Development Hub",
  },
  alternates: {
    canonical: `https://www.cybercodehub.com`,
  },
  description:
    "Learn modern web development at CyberCodeHub. Master HTML, CSS, JavaScript, Next.js, and more. Get tips, trends, and best practices to build high-performance websites.",
  keywords: [
    "cybercodehub",
    "Cyber Code Hub",
    "web developer blog",
    "web development",
    "MERN stack",
    "Full-stack development",
    "Backend development",
    "coding",
    "programming",
    "Javascript",
    "Node Js",
    "server-side scripting",
    "Backend",
    "Ai",
    "ai",
    "Ai/Machine Learning",
    "Frontend Development",
    "React Js",
    "Web Design",
    "Coding News",
    "Technology News",
    "coding blog",
    "programming blog",
    "backend development blog",
    "Next Js",
    "Jobs",
    "Html5",
    "html",
    "CSS3",
    "css",
    "Web Layouts",
  ],
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <ContextProvider>{children}</ContextProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
