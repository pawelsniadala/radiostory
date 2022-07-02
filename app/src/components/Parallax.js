const Parallax = ({
    section,
    role,
    ariaLabel,
    children
}) => (
    <div className="parallax">
        <div className={`photo-banner ${section}`}
            role={role}
            aria-label={ariaLabel}
        >
            <div className="photo-banner-inner">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default Parallax;
