// import Iframe from "react-iframe";
import ReactImageAppear from "react-image-appear";
// import SearchZoomSvg from "../assets/common/SearchZoomSvg";
// import PlayVideoSvg from "../assets/common/PlayVideoSvg";

const Card = ({
    cardTitle,
    cardPhotoSrc,
    layoutRef,
    onClick,
}) => (
    <div className="card photo">
        <div className="img-box" ref={layoutRef}>
            <ReactImageAppear
                src={cardPhotoSrc}
                onClick={onClick}
                alt={cardTitle}
                className="card-image card-img-top"
                placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                showLoader={false}
            />
            <span onClick={onClick}>
                {/* <SearchZoomSvg /> */}
            </span>
        </div>
    </div>
);

export default Card;
