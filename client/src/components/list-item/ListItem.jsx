import "./ListItem.scss";

import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="list-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src={item.img} alt="" />
      {isHovered && (
        <>
          <video src={item.trailer} autoPlay={true} loop />
          <div className="item-info">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>

            <div className="item-info-top">
              <span>{item.duration}</span>
              <span className="limit">+{item.limit}</span>
              <span>{item.year}</span>
            </div>

            <div className="desc">{item.desc}</div>
            <div className="genre">{item.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
