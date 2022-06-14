import ReactImageAppear from "react-image-appear";

const CardPerson = ({
    cardImg,
    cardTitle,
    cardDescription
}) => (
    <div className="card person">
        <ReactImageAppear
            className="card-img-top"
            src={cardImg}
            alt={cardTitle}
            placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
            showLoader={true}
        />
        <div className="card-body">
            <h5 className="card-title">
                {cardTitle}
            </h5>
            <p className="card-text">
                {cardDescription}
            </p>
        </div>
    </div>
);

export default CardPerson;
