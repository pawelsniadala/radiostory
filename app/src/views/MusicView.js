import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MusicView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="music-view">
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
                                Muzyka
                            </Typography>
                        </Breadcrumbs>
                        <HeaderPage header="Muzyka" />
                    </div>
                </div>
                <div className="view-body container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel accumsan ipsum, in pretium dolor. Vestibulum a pretium massa. Nullam pretium risus ut erat rhoncus scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquam in libero et condimentum. Pellentesque rhoncus lectus quis arcu efficitur posuere. Aenean in erat ornare, pellentesque lacus vitae, varius magna. Mauris suscipit enim id imperdiet posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quis erat non urna maximus maximus. Aliquam congue posuere lectus vitae pulvinar. Phasellus non leo velit. Sed commodo nibh ante, sed porta elit fringilla et. Maecenas bibendum dolor vitae justo elementum, et malesuada felis luctus.</p>
                </div>
            </div>
        </div>
    );
}

export default MusicView;
