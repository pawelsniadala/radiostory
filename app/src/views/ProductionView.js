import { useEffect } from "react";
// import { photo } from "../data/photo";
import PageHeader from "../components/PageHeader";


const ProductionView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="production-view">
            <div className="view-wrapper container">
                <PageHeader header="Produkcja" />
            </div>
        </div>
    );
}

export default ProductionView;
