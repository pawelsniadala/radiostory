import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeSvg from "../assets/navbar/HomeSvg";
import CastSvg from "../assets/navbar/CastSvg";
import CreatorSvg from "../assets/navbar/CreatorSvg";
import PhotoSvg from "../assets/navbar/PhotoSvg";
import ContactSvg from "../assets/navbar/ContactSvg";

import FacebookSvg from "../assets/navbar/FacebookSvg";
import YouTubeSvg from "../assets/navbar/YouTubeSvg";
import SpotifySvg from "../assets/navbar/SpotifySvg";

const NavSection = () => {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className="home">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeSvg />
                        </ListItemIcon>
                        <NavLink
                            className="nav-link"
                            activeclassname="active"
                            aria-current="page"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </ListItemButton>
                </ListItem>
            </List>
            <List className="menu">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CastSvg />
                        </ListItemIcon>
                        <NavLink
                            className="nav-link"
                            activeclassname="active"
                            aria-current="page"
                            to="/cast"
                        >
                            Obsada
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CreatorSvg />
                        </ListItemIcon>
                        <NavLink
                            className="nav-link"
                            activeclassname="active"
                            aria-current="page"
                            to="/creator"
                        >
                            Twórcy
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PhotoSvg />
                        </ListItemIcon>
                        <NavLink
                            className="nav-link"
                            activeclassname="active"
                            aria-current="page"
                            to="/photo"
                        >
                            Zdjęcia
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactSvg />
                        </ListItemIcon>
                        <NavLink
                            className="nav-link"
                            activeclassname="active"
                            aria-current="page"
                            to="/contact"
                        >
                            Kontakt
                        </NavLink>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List className="media">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <FacebookSvg />
                        </ListItemIcon>
                        <a key="" href="https://www.facebook.com/Radiostory-104327058985831/"
                            className="facebook"
                            // title="facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <YouTubeSvg />
                        </ListItemIcon>
                        <a key="" href="https://www.youtube.com/"
                            className="youtubbe"
                            // title="facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            YouTube
                        </a>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SpotifySvg />
                        </ListItemIcon>
                        <a key="" href="https://open.spotify.com/"
                            className="spotify"
                            // title="facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Spotify
                        </a>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
            <div className="container container-fluid">
                {/* <NavLink
                    className="navbar-brand text-uppercase"
                    activeclassname="active"
                    to="/"
                >
                    Radiostory
                </NavLink> */}
                {/* <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div>
                    {['left'].map((anchor) => (
                        <div key={anchor}>
                            <button className="navbar-toggler"
                                onClick={toggleDrawer(anchor, true)}
                                size="large"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </div>
                    ))}
                </div>
                <NavLink
                    className="navbar-brand text-uppercase"
                    activeclassname="active"
                    to="/"
                >
                    Radiostory
                </NavLink>
                <div className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                            Radiostory
                        </h5>
                        <button type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="offcanvas-body navbar-light" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-start flex-grow-1">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/cast"
                                >
                                    Obsada
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/creator"
                                >
                                    Twórcy
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/photo"
                                >
                                    Zdjęcia
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/contact"
                                >
                                    Kontakt
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav justify-content-end flex-grow-1">
                            <li className="nav-item">
                                <a key="" href="https://www.facebook.com/Radiostory-104327058985831/"
                                    className="nav-link"
                                    title="Facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FacebookSvg />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a key="" href="https://www.youtube.com/"
                                    className="nav-link"
                                    title="YouTube"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <YouTubeSvg />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a key="" href="https://open.spotify.com/"
                                    className="nav-link"
                                    title="Spotify"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <SpotifySvg />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavSection;
