import "./List.scss";
import React, { useRef } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import ListItem from "../list-item/ListItem";

function List() {
  const listRef = useRef();
  function handleClick(direction) {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }
  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="slider-arrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlinedIcon
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
