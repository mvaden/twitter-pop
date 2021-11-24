import React, { useState } from "react";
import './form.css';

const Form = () => {
    const [keyword, setKeyword] = useState("");
    // const [data, setData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const data = { keyword };
        const requestOptions = {
            method: 'POST',
            header: {
                'Content-Type' : 'application/json: charset=UTF-8',
            },
            body: JSON.stringify(data)
        };

        fetch('http://localhost:5100/', requestOptions)
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch(console.log("An error happened."))
    };
    
    const handleKeywordChange = (e) => setKeyword(e.target.value);

    return (
        <div className="div__main-wrapper">
            <div className="div__col-1">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="input__keyword-search"
                            placeholder="Search by keyword"
                            type="text"
                            onChange={handleKeywordChange}
                            // value={formData}
                        />
                    </div>
                    <div>
                        <button 
                            type="submit"
                        >Get Tweets</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;