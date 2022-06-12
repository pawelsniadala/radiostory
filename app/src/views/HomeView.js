import { useEffect } from "react";
import PosterSection from "../sections/PosterSections";
import CastSection from "../sections/CastSection";
// import IntroductionSection from "../sections/IntroductionSection";
// import PreludeSection from "../sections/PreludeSection";
// import VideoSection from "../sections/VideoSection";
// import StudioSection from "../sections/StudioSection";
// import PhotoSection from "../sections/PhotoSection";
// import BackstageSection from "../sections/BackstageSection";
// // import FavoritePhotosSection from "../sections/FavoritePhotosSection";
// import FeedbackSection from "../sections/FeedbackSection";
// // import OutdoorSection from "../sections/OutdoorSection";
// import CustomerSection from "../sections/CustomerSection";
// // import ContactSection from "../sections/ContactSection";

const HomeView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home-view">
            <PosterSection />
            <CastSection />
        </div>
    );
};

export default HomeView;
