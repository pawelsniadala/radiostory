import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const PhotoView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="contact-view">
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
                                Kontakt
                            </Typography>
                        </Breadcrumbs>
                        <HeaderPage header="Kontakt" />
                    </div>
                </div>
                <div className="view-body container">
                    <p>In egestas ex ut massa scelerisque, a consectetur sem fringilla. Nam luctus augue non est accumsan, in venenatis augue hendrerit. Aenean vel lorem nec mauris mollis ultrices. Etiam pharetra arcu ac turpis varius, nec efficitur nunc varius. Donec lectus metus, sagittis sed nibh ut, imperdiet iaculis nunc. Phasellus malesuada, enim a volutpat gravida, est felis lobortis sem, eget consequat erat ligula non lorem. Mauris posuere quam sit amet velit tincidunt, sit amet consequat ipsum congue. Suspendisse mattis turpis quis suscipit ornare. Ut sit amet porta urna.</p>
                </div>
            </div>
        </div>
    );
}

export default PhotoView;
