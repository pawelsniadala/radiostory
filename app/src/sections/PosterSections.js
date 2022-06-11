// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PosterSection = () => {
    return (
        <div className="jumbotron">
             <div className="photo-wrapper">
                <div className="content-wrapper">
                    <div className="company-wrapper">
                        <h1 className="display-1 company-name">Radiostory</h1>
                        {/* <span className="company-services">
                            film
                            <span className="dot">&#xb7;</span>
                            fotografia
                            <span className="dot">&#xb7;</span>
                            dźwięk
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PosterSection;
