const Parallax = ({
    section,
    children
}) => (
    <div className="parallax">
        <div className={`photo-banner ${section}`}>
            <div className="photo-banner-inner">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default Parallax;
