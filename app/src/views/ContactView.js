import { useEffect } from "react";
// import { photo } from "../data/photo";
import PageHeader from "../components/PageHeader";


const PhotoView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="contact-view">
            <div className="view-wrapper container">
                <PageHeader header="Kontakt" />
            </div>
        </div>
    );
}

export default PhotoView;
