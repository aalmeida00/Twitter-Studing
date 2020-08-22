import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Posts from "./Posts/Posts";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home Head</h2>
      </div>

      <TweetBox />

      {posts.map((post) => (
        <Posts
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
