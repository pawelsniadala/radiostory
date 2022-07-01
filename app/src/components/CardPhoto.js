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
            {/* <div class="MuiImageListItemBar-root MuiImageListItemBar-positionBottom css-ztrqiq-MuiImageListItemBar-root">
                <div class="MuiImageListItemBar-titleWrap MuiImageListItemBar-titleWrapBottom MuiImageListItemBar-titleWrapActionPosRight css-14q7c0c-MuiImageListItemBar-titleWrap">
                    <div class="MuiImageListItemBar-title css-dasnyc-MuiImageListItemBar-title">
                        Breakfast
                    </div>
                    <div class="MuiImageListItemBar-subtitle css-hk6gwf-MuiImageListItemBar-subtitle">
                        @bkristastucchio
                    </div>
                </div>
            </div> */}
            {cardTitle ? (
                <div className="description-wrapper">
                <div className="text-wrapper">
                    <div className="title">
                        {cardTitle}
                    </div>
                    {/* <div className="subtitle">
                        @bkristastucchio
                    </div> */}
                </div>
            </div>
            ) : (
                null
            )}

        </div>
    </div>
);

export default CardPhoto;
