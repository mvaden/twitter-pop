import React, { Fragment } from "react";
import Statuses from "../Statuses/statuses";
import Form from "../Form/form";
import Hashtags from "../Hashtags/hashtags";

import "./main.css";

const Main = () => {
  return (
    <Fragment>
      <h1>Twitter Feed</h1>
      <div className="div__components-wrapper">
        <div className="col-1">
          <Form />
          <Statuses />
        </div>
        <div className="col-2">
          <Hashtags />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
