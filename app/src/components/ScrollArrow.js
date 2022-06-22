import { useState } from "react";
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

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
            <Button variant="contained" size="">
                <ArrowUpwardIcon fontSize="large" htmlColor="#f8f9fa" />
            </Button>

        </div>
    );
}

export default ScrollArrow;
