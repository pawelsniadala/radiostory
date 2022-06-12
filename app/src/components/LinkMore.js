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
            <div class="divider" aria-hidden="true" />
            <div class="text-wrapper" aria-label="Więcej obrazów">
                <span class="text">
                    {linkText}
                </span>
            </div>
        </Link>
    </div>
);

export default LinkMore;
