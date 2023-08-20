import React, {useEffect, useState} from "react";
import {Drawer, IconButton, List} from "@material-ui/core";
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import {ArrowBack as ArrowBackIcon,} from "@material-ui/icons";
import {useTheme} from "@material-ui/styles";
import {withRouter} from "react-router-dom";
import classNames from "classnames";
// styles
import useStyles from "./styles";
// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
// context
import {toggleSidebar, useLayoutDispatch, useLayoutState,} from "../../context/LayoutContext";
import {useUserState} from "../../context/UserContext";


function Sidebar({location}) {

    // global
    var {isSidebarOpened} = useLayoutState();
    var {single,} = useUserState();
    var layoutDispatch = useLayoutDispatch();

    let structure;
    if (!single)
        structure = [{
            id: 1,
            label: "پرسش نامه NEO",
            link: "/neo",
            icon: <ChatIcon/>,
        }, {id: 0, label: "پرسش نامه ENRICH", link: "/enrich", icon: <AssignmentIcon/>}];
    else structure = [{
        id: 1,
        label: "پرسش نامه NEO",
        link: "/neo",
        icon: <ChatIcon/>,
    },];


    var classes = useStyles();
    var theme = useTheme();


    // local
    var [isPermanent, setPermanent] = useState(true);

    useEffect(function () {
        window.addEventListener("resize", handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener("resize", handleWindowWidthChange);
        };
    });

    return (
        <Drawer
            variant={isPermanent ? "permanent" : "temporary"}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpened,
                    [classes.drawerClose]: !isSidebarOpened,
                }),
            }}
            open={isSidebarOpened}
        >
            <div className={classes.toolbar}/>
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(classes.headerIcon, classes.headerIconCollapse),
                        }}
                    />
                </IconButton>
            </div>
            <List className={classes.sidebarList}>
                {structure.map(link => (
                    <SidebarLink
                        key={link.id}
                        location={location}
                        isSidebarOpened={isSidebarOpened}
                        {...link}
                    />
                ))}
            </List>
        </Drawer>
    );

    // ##################################################################
    function handleWindowWidthChange() {
        var windowWidth = window.innerWidth;
        var breakpointWidth = theme.breakpoints.values.md;
        var isSmallScreen = windowWidth < breakpointWidth;

        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}

export default withRouter(Sidebar);
