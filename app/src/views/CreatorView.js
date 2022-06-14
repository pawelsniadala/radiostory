import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CreatorView = () => {
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
                    </div>
                </div>
                <div className="view-body container">
                    <p>In mauris tortor, feugiat nec ipsum at, dictum semper enim. Duis ut diam sed tortor scelerisque venenatis. Maecenas facilisis vestibulum purus, ut congue erat consequat vitae. Praesent sed elit non magna maximus suscipit. Suspendisse id lacus placerat metus consequat vestibulum nec sed mauris. Duis at urna vitae ex dictum molestie aliquam ac enim. Integer tincidunt arcu eu ante viverra tincidunt. Donec viverra ante sed aliquam tristique. Curabitur sollicitudin egestas risus ut venenatis. Nunc mollis, justo sed fermentum varius, justo turpis commodo magna, a facilisis odio ante ultricies nibh. Sed mollis ex vitae scelerisque ultrices. Integer cursus arcu nibh. Nunc nec risus purus.</p>
                </div>
            </div>
        </div>
    );
}

export default CreatorView;
