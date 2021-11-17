import React, { Fragment } from "react";
import "./main.css";

const Main = () => {
  return (
    <Fragment>
      <h1>Twitter Feed</h1>
      <div className="div__main-wrapper">
        <div className="div__col-1">
          <input
            className="input__keyword-search"
            placeholder="Search by keyword"
            type="text"
          />
        </div>
        <div className="div__col-2">
          <div className="div__wrapper-hashtag">
            <h2 className="h2">Filter by hashtag</h2>
            <p>No selected hash tags</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
