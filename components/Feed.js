"use client";
import { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleTagClick = () => {};

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          className="search_input peer"
          placeholder=" search for a tag or a username"
          required
          value={searchValue}
          onChange={handleSearchChange}
        />
      </form>
      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </div>
  );
};

export default Feed;
