import {
    useState,
    useEffect
} from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import CreatorAllPartial from "./partials/creator/CreatorAllPartial";
import CreatorDirectionPartial from "./partials/creator/CreatorDirectionPartial";
import CreatorPhotoPartial from "./partials/creator/CreatorPhotoPartial";
import CreatorMontagePartial from "./partials/creator/CreatorMontagePartial";
import CreatorMakeupPartial from "./partials/creator/CreatorMakeupPartial";
import CreatorManagementPartial from "./partials/creator/CreatorManagementPartial";
import CreatorCameraPartial from "./partials/creator/CreatorCameraPartial";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ListIcon from '@mui/icons-material/List';

const CreatorView = () => {
    const location = useLocation();

    const [ creatorTab, setTab ] = useState(() => {
        const pathname = location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/creator":
                    return (
                        "creator-all"
                    );
                case "/creator/all":
                    return (
                        "creator-all"
                    );
                case "/creator/direction":
                    return (
                        "creator-direction"
                    );
                case "/creator/photo":
                    return (
                        "creator-photo"
                    );
                case "/creator/montage":
                    return (
                        "creator-montage"
                    );
                case "/creator/makeup":
                    return (
                        "creator-makeup"
                    );
                case "/creator/management":
                    return (
                        "creator-management"
                    );
                case "/creator/camera":
                    return (
                        "creator-camera"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (creatorTab) => {
        switch(creatorTab) {
            case "creator-all":
                return (
                    <CreatorAllPartial />
                );
            case "creator-direction":
                return (
                    <CreatorDirectionPartial />
                );
            case "creator-photo":
                return (
                    <CreatorPhotoPartial />
                );
            case "creator-montage":
                return (
                    <CreatorMontagePartial />
                );
            case "creator-makeup":
                return (
                    <CreatorMakeupPartial />
                );
            case "creator-management":
                return (
                    <CreatorManagementPartial />
                );
            case "creator-camera":
                return (
                    <CreatorCameraPartial />
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
        <div className="creator-view">
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
                                Twórcy
                            </Typography>
                        </Breadcrumbs>
                        <HeaderPage header="Twórcy" />
                        <Tabs
                            value={location.pathname}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab
                                label="Wszyscy twórcy"
                                component={Link}
                                to={`/creator`}
                                value={`/creator`}
                                onClick={(e) => selectTab(e, "/creator", "creator-all")}
                            />
                            <Tab
                                label="Scenariusz i reżyseria"
                                component={Link}
                                to={`/creator/direction`}
                                value={`/creator/direction`}
                                onClick={(e) => selectTab(e, "/creator/direction", "creator-direction")}
                            />
                            <Tab
                                label="Zdjęcia"
                                component={Link}
                                to={`/creator/photo`}
                                value={`/creator/photo`}
                                onClick={(e) => selectTab(e, "/creator/photo", "creator-photo")}
                            />
                            <Tab
                                label="Montaż"
                                component={Link}
                                to={`/creator/montage`}
                                value={`/creator/montage`}
                                onClick={(e) => selectTab(e, "/creator/montage", "creator-montage")}
                            />
                            <Tab
                                label="Charakteryzacja"
                                component={Link}
                                to={`/creator/makeup`}
                                value={`/creator/makeup`}
                                onClick={(e) => selectTab(e, "/creator/makeup", "creator-makeup")}
                            />
                            <Tab
                                label="Kierownictwo planu"
                                component={Link}
                                to={`/creator/management`}
                                value={`/creator/management`}
                                onClick={(e) => selectTab(e, "/creator/management", "creator-management")}
                            />
                            <Tab
                                label="Operatorzy kamer"
                                component={Link}
                                to={`/creator/camera`}
                                value={`/creator/camera`}
                                onClick={(e) => selectTab(e, "/creator/camera", "creator-camera")}
                            />
                        </Tabs>
                    </div>
                </div>
                <div className="view-body container">
                    <div className="tab-content"
                        id="pills-creator-tab-content"
                    >
                        <div className="tab-pane fade show active"
                            id={`pills-${creatorTab}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${creatorTab}-tab`}
                        >
                            {renderTabContent(creatorTab)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatorView;
