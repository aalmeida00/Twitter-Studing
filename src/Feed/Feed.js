import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Posts from "./Posts/Posts";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home Head</h2>
      </div>

      <TweetBox />

      <Posts />
    </div>
  );
}

export default Feed;
