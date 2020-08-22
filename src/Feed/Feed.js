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

      <Posts
        displayName="Andre Almeida"
        username="@aalmeida0"
        verified
        text="Demonstrando através do props"
        avatar="https://pbs.twimg.com/profile_images/1205325886704226304/m7M4zXtv_400x400.jpg"
        image="https://media3.giphy.com/media/y2qhz4wPA2XlK/giphy.gif?cid=ecf05e47akd50bfczdpwjy8e3zjqhvpe6iyd5smhmgpkxzoy&rid=giphy.gif"
      />
    </div>
  );
}

export default Feed;
