import React from "react";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Posts({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1205325886704226304/m7M4zXtv_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Andre Almeida{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @aalmeida00
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Essa é uma demonstração com Lorem ipsum </p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/y2qhz4wPA2XlK/giphy.gif?cid=ecf05e47akd50bfczdpwjy8e3zjqhvpe6iyd5smhmgpkxzoy&rid=giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Posts;
