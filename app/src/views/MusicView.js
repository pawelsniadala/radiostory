import { useEffect } from "react";
// import { photo } from "../data/photo";
import PageHeader from "../components/PageHeader";


const MusicView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="music-view">
            <div className="view-wrapper container">
                <PageHeader header="Muzyka" />
            </div>
        </div>
    );
}

export default MusicView;
