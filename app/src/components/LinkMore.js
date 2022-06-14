import { Link } from "react-router-dom";

const LinkMore = ({
    linkTo,
    linkText
}) => (
    <div className="link more">
        <Link
            to={linkTo}
            className="button section"
            aria-current="page"
        >
            <div className="divider" aria-hidden="true" />
            <div className="text-wrapper" aria-label="Więcej obrazów">
                <span className="text">
                    {linkText}
                </span>
            </div>
        </Link>
    </div>
);

export default LinkMore;
