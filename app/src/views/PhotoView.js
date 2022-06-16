import {
    useState,
    useEffect
} from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import PhotoAllPartial from "./partials/photo/PhotoAllPartial";
import PhotoFilmPartial from "./partials/photo/PhotoFilmPartial";
import PhotoPlanPartial from "./partials/photo/PhotoPlanPartial";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const PhotoView = () => {
    const location = useLocation();

    const [ photoTab, setTab ] = useState(() => {
        const pathname = location.pathname;

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

    const selectTab = (e, path, tab) => {
        const pathname = location.pathname;

        pathname !== path ? setTab(tab) : e.preventDefault();
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="photo-view">
            <div className="view-wrapper">
                <div className="view-header">
                    <div className="header-wrapper container">
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            <Link
                                to="/"
                                aria-current="page"
                            >
                                Home
                            </Link>
                            <Typography color="text.primary">
                                Zdjęcia
                            </Typography>
                        </Breadcrumbs>
                        <HeaderPage header="Zdjęcia" />
                        <Tabs
                            value={location.pathname}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab
                                label="Wszystkie zdjęcia"
                                component={Link}
                                to={`/photo`}
                                value={`/photo`}
                                onClick={(e) => selectTab(e, "/photo", "photo-all")}
                            />
                            <Tab
                                label="Zdjęcia filmowe"
                                component={Link}
                                to={`/photo/film`}
                                value={`/photo/film`}
                                onClick={(e) => selectTab(e, "/photo/film", "photo-film")}
                            />
                            <Tab
                                label="Zdjęcia z planu filmowego"
                                component={Link}
                                to={`/photo/plan`}
                                value={`/photo/plan`}
                                onClick={(e) => selectTab(e, "/photo/plan", "photo-plan")}
                            />
                        </Tabs>
                    </div>
                </div>
                <div className="view-body container">
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
