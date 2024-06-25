"use client";
import React, { createContext, useEffect, useState } from "react";
import { getCookies } from "cookies-next";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Toaster } from "react-hot-toast";
export const BlogContext = createContext();
const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    let cookies = getCookies().mode || "dark";
    setMode(cookies);
  }, [mode]);
  return (
    <body mode={mode}>
      <BlogContext.Provider value={{ mode, setMode }}>
        <Header mode={mode} />
        <main className="container">{children}</main>
        <Footer mode={mode} />
      </BlogContext.Provider>
      <Toaster />
    </body>
  );
};

export default ContextProvider;
