import React, { Fragment, useState } from "react";
import "./main.css";

const Main = () => {
    const [formData, setFormData] = useState("");
    // const [data, setData] = useState([])

    const postKeywords = () => {
        return fetch('https://localhost:5000/', {
            method: 'POST',
            // mode: 'same-origin',
            header: {
                'Content-Type' : 'application/json: charset=UTF-8',
            },
            body: JSON.stringify({
                name: formData
            })
        })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch(console.log("An error happened."))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("This form field was logged: ", formData)
        postKeywords();
    };
    
    const handleChange = (e) => {
        setFormData(e.target.value);
    }

  return (
    <Fragment>
      <h1>Twitter Feed</h1>
      <div className="div__main-wrapper">
        <div className="div__col-1">
          <form onSubmit={handleSubmit}>
            <input
              className="input__keyword-search"
              placeholder="Search by keyword"
              type="text"
              onChange={handleChange}
              value={formData}
            />
            <button 
              type="submit"
            >Get Tweets</button>
          </form>
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
