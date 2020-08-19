import React from "react";
import "./Sidebar.css";
import "./SidebarOption/SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Button } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlinedIcon} text="Home" />
      <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Messages" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="Bookmarks" />
      <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

      <Button className="sidebar__tweet" fullWidth variant="outlined">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
