import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { photo } from "../data/photo";
import HeaderPage from "../components/HeaderPage";
import PhotoAllPartial from "./partials/photo/PhotoAllPartial";
import PhotoFilmPartial from "./partials/photo/PhotoFilmPartial";
import PhotoPlanPartial from "./partials/photo/PhotoPlanPartial";

const PhotoView = () => {
    const [ photoTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/photo":
                    return (
                        "photo-all"
                    );
                case "/photo/all":
                    return (
                        "photo-all"
                    );
                case "/photo/film":
                    return (
                        "photo-film"
                    );
                case "/photo/plan":
                    return (
                        "photo-plan"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (photoTab) => {
        switch(photoTab) {
            case "photo-all":
                return (
                    <PhotoAllPartial />
                );
            case "photo-film":
                return (
                    <PhotoFilmPartial />
                );
            case "photo-plan":
                return (
                    <PhotoPlanPartial />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="photo-view">
            <div className="view-wrapper container">
                <HeaderPage header={photo.title} />
                <div className="navpils">
                    <ul className="nav nav-pills photo">
                        <li className="nav-item">
                            <Link
                                to="/photo/all"
                                className={(`nav-link ${photoTab === "photo-all" ? "active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("photo-all")}
                            >
                                Wszystkie
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/photo/film"
                                className={(`nav-link ${photoTab === "photo-film" ? "active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("photo-film")}
                            >
                                Zdjęcia filmowe
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/photo/plan"
                                className={(`nav-link ${photoTab === "photo-plan" ? "active" : ""}`).trim()}
                                aria-current="page"
                                onClick={() => setTab("photo-plan")}
                            >
                                Zdjęcia z planu filmowego
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content"
                        id="pills-photo-tab-content"
                    >
                        <div className="tab-pane fade show active"
                            id={`pills-${photoTab}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${photoTab}-tab`}
                        >
                            {renderTabContent(photoTab)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoView;











// import { useEffect } from "react";
// import { Gallery, Item } from "react-photoswipe-gallery";
// import { photo } from "../data/photo";
// import PageHeader from "../components/PageHeader";
// import Card from "../components/Card";

// const PhotoView = () => {
//     useEffect(() => {
//         window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }, []);

//     return (
//         <div className="photo-view">
//             <div className="view-wrapper container">
//                 <PageHeader header={photo.title} />
//                 <section className="photo-section">
//                     <div className="section-wrapper">
//                         <div className="card-wrapper photo">
//                             <Gallery>
//                                 {photo.film.length ? photo.film.map((item) => (
//                                     <Item
//                                         key={item.id}
//                                         original={item.original.src}
//                                         thumbnail={item.thumbnail.src}
//                                         width={item.original.width}
//                                         height={item.original.height}
//                                         title={item.title}
//                                     >
//                                         {({ ref, open }) => (
//                                             <Card
//                                                 cardTitle={item.title}
//                                                 cardPhotoSrc={item.thumbnail.src}
//                                                 layoutRef={ref}
//                                                 onClick={open}
//                                             />
//                                         )}
//                                     </Item>
//                                 )) : (
//                                     <div />
//                                 )}
//                             </Gallery>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default PhotoView;
