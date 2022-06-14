import { useState } from "react";
// import arrowUp from "./../assets/common/arrowUp.svg";


const ScrollArrow = () => {
    const [ showScroll, setShowScroll ] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", checkScrollTop)

    return (
        <div className="scrollup"
            onClick={scrollTop}
            style={{ display: showScroll ? "flex" : "none" }}
        >
            <button className="btn btn-secondary">
                <i className="fas fa-arrow-up" />
                {/* <img src={arrowUp} alt="arrowUp" /> */}
            </button>
        </div>
    );
}

export default ScrollArrow;
