import {
    useState,
    useEffect
} from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import CastAllPartial from "./partials/cast/CastAllPartial";
import CastMainPartial from "./partials/cast/CastMainPartial";
import CastOtherPartial from "./partials/cast/CastOtherPartial";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const CastView = () => {
    const location = useLocation();

    const [ castTab, setTab ] = useState(() => {
        const pathname = location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/cast":
                    return (
                        "cast-all"
                    );
                case "/cast/all":
                    return (
                        "cast-all"
                    );
                case "/cast/main":
                    return (
                        "cast-main"
                    );
                case "/cast/other":
                    return (
                        "cast-other"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (castTab) => {
        switch(castTab) {
            case "cast-all":
                return (
                    <CastAllPartial />
                );
            case "cast-main":
                return (
                    <CastMainPartial />
                );
            case "cast-other":
                return (
                    <CastOtherPartial />
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
        <div className="cast-view">
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
                                Obsada
                            </Typography>
                        </Breadcrumbs>
                        <HeaderPage header="Obsada" />
                        <Tabs
                            value={location.pathname}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab
                                label="Cała obsada"
                                component={Link}
                                to={`/cast`}
                                value={`/cast`}
                                onClick={(e) => selectTab(e, "/cast", "cast-all")}
                            />
                            <Tab
                                label="W rolach głównych"
                                component={Link}
                                to={`/cast/main`}
                                value={`/cast/main`}
                                onClick={(e) => selectTab(e, "/cast/main", "cast-main")}
                            />
                            <Tab
                                label="W pozostałych rolach"
                                component={Link}
                                to={`/cast/other`}
                                value={`/cast/other`}
                                onClick={(e) => selectTab(e, "/cast/other", "cast-other")}
                            />
                        </Tabs>
                    </div>
                </div>
                <div className="view-body container">
                    <div className="tab-content"
                        id="pills-cast-tab-content"
                    >
                        <div className="tab-pane fade show active"
                            id={`pills-${castTab}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${castTab}-tab`}
                        >
                            {renderTabContent(castTab)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CastView;
