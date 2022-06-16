import ReactImageAppear from "react-image-appear";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const CardPhoto = ({
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
                <ZoomInIcon sx={{ fontSize: 60 }} />
            </span>
        </div>
    </div>
);

export default CardPhoto;
