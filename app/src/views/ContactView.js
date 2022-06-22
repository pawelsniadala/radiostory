import {
    useState,
    useEffect
} from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import ContactFormPartial from "./partials/contact/ContactFormPartial";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const ContactView = () => {
    const location = useLocation();

    const [ contactTab, setTab ] = useState(() => {
        const pathname = location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case "/contact":
                    return (
                        "contact-form"
                    );
                case "/contact/form":
                    return (
                        "contact-form"
                    );
                case "/contact/film":
                    return (
                        "contact-film"
                    );
                case "/contact/plan":
                    return (
                        "contact-plan"
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (contactTab) => {
        switch(contactTab) {
            case "contact-form":
                return (
                    <ContactFormPartial />
                );
            case "contact-film":
                return (
                    <ContactFormPartial />
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
        <div className="contact-view">
            <div className="view-wrapper">
                <div className="view-header">
                    <div className="header-wrapper container">
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="smform" />}
                            aria-label="breadcrumb"
                        >
                            <Link
                                to="/"
                                aria-current="page"
                            >
                                Home
                            </Link>
                            <Typography color="text.primary">
                                Kontakt
                            </Typography>
                        </Breadcrumbs>
                        <HeaderPage header="Kontakt" />
                        <Tabs
                            value={location.pathname}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            TabIndicatorProps={{ style: { background: "#991111" }}}
                        >
                            <Tab
                                label="Formularz kontaktowy"
                                component={Link}
                                to={`/contact`}
                                value={`/contact`}
                                onClick={(e) => selectTab(e, "/contact", "contact-form")}
                            />
                            {/* <Tab
                                label="Zdjęcia filmowe"
                                component={Link}
                                to={`/contact/film`}
                                value={`/contact/film`}
                                onClick={(e) => selectTab(e, "/contact/film", "contact-film")}
                            /> */}
                        </Tabs>
                    </div>
                </div>
                <div className="view-body container">
                    <div className="tab-content"
                        id="pills-contact-tab-content"
                    >
                        <div className="tab-pane fade show active"
                            id={`pills-${contactTab}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${contactTab}-tab`}
                        >
                            {renderTabContent(contactTab)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactView;
