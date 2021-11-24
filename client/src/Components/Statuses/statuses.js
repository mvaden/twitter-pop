import React, { Fragment } from "react";
import './statuses.css';

const Statuses = () => {
    return (
        <Fragment>
            <section>
                <div className="div__statuses-wrapper">
                    <div className="div__avatar-wrapper">
                        <img 
                            src="daffy_duck.jpg" alt="Avatar" className="img__avatar" height="100px" 
                            width="100px" 
                            />
                    </div>
                    <div className="div__content-wrapper">
                        <div className="div__screen-name">@GiacomaGuillzoni</div>
                        <p className="p__text-tweet">Science is cool <a href="https://t.co/BLAH">https://t.co/BLAH</a>. Click this link to discover more about the work of this foundation and all of it's supporters.</p>
                        <div>
                            <span className="span__text-hashtag">#coding</span>
                            <span className="span__text-hashtag">#Python</span>
                        </div>
                    </div>  
                </div>
                <div className="div__btn-load-wrapper">
                    <button className="btn__load">Load More</button>
                </div>
            </section>
        </Fragment>
    );
;}

export default Statuses;