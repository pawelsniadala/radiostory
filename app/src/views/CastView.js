import { useEffect } from "react";
import { cast } from "../data/cast";
import { Link } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import CardPerson from "../components/CardPerson";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CastView = () => {
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
                    </div>
                </div>
                <div className="view-body container">
                    <div className="card-wrapper person">
                        {cast.length ? cast.map(item => (
                            <CardPerson
                                key={item.id}
                                cardTitle={item.name}
                                cardDescription={item.role}
                                cardImg={item.img}
                            />
                        )) : (
                            <div />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CastView;
