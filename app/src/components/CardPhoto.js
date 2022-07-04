import ReactImageAppear from "react-image-appear";
import SearchZoomSvg from "../assets/photo/SearchZoomSvg";

const CardPhoto = ({
    cardTitle,
    cardPhotoSrc,
    layoutRef,
    onClick
}) => (
    <div className="card photo">
        <div className="img-box"
            ref={layoutRef}
        >
            <ReactImageAppear
                src={cardPhotoSrc}
                onClick={onClick}
                alt={cardTitle}
                className="card-image card-img-top"
                placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                showLoader={false}
            />
            <span className="icon-wrapper" onClick={onClick}>
                <SearchZoomSvg />
            </span>
            {cardTitle && (
                <div className="description-wrapper">
                <div className="text-wrapper">
                    <div className="title">
                        {cardTitle}
                    </div>
                    <div className="subtitle">
                        Gdańsk
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
);

export default CardPhoto;
