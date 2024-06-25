import React, { useState } from "react";
import styles from "./MobSearch.module.css";
import { Search } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const MobSearch = ({ setShowMobSearch, router }) => {
  const [title, setTitle] = useState("");
  return (
    <div className={styles.main}>
      <form
        onSubmit={(e) => {
          router.push(`/search?title=${title}`);
          e.preventDefault();
        }}
      >
        <button type="submit">
          <Search />
        </button>
        <input
          type="search"
          placeholder="Search Articles..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </form>
      <button
        onClick={() => {
          setShowMobSearch(false);
        }}
        className={styles.close}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default MobSearch;
