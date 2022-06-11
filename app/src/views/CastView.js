import { useEffect } from "react";
// import { photo } from "../data/photo";
import PageHeader from "../components/PageHeader";


const CastView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="cast-view">
            <div className="view-wrapper container">
                <PageHeader header="Obsada" />
            </div>
        </div>
    );
}

export default CastView;
