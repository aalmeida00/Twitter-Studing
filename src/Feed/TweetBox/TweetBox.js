import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage = ""] = useState("");
  const [tweetImage, setTweetImage = ""] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Andre Almeida",
      username: "@aalmeida0",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1205325886704226304/m7M4zXtv_400x400.jpg",
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1205325886704226304/m7M4zXtv_400x400.jpg"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            type={tweetMessage}
            placeholder="What's happening?"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          onChange={(e) => setTweetImage(e.target.value)}
          type={tweetImage}
          placeholder="Optional: Place image URL"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
