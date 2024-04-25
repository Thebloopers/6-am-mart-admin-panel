import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NavItemMenu from "./NavItemMenu";
import Collapse from "@mui/material/Collapse";
import NavbarVerticalAside from "./NavbarVerticalAside";
import Sidebarlist from "./Sidebarlist";
import Usersidebaarlist from "./Usersidebaarlist";
import { useEffect } from "react";
import logo from "../Assests/Color horizontalPNG.png";
import ProfileButton from "./ProfileButton";
import SettingSidebar from "./SettingSidebar";
import TransactionsReportSideBaar from "./TransactionsReportSideBaar";
import DispatchSidebaar from "./DispatchSidebaar";
import withAuth from "../HOC/withAuth";
import { IoClose } from "react-icons/io5";

//searchbaar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
//searchbaar end

const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const location = useLocation();

  const [showUserSideNav, setShowUserSideNav] = React.useState(false);
  const [showTransactions, setShowTransactions] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showDispatch, setShowDispatch] = React.useState(false);

  useEffect(() => {
    const isUserPath = location?.pathname?.toLowerCase().includes("/users/");
    const isTransactionPath = location?.pathname
      ?.toLowerCase()
      .includes("/transactions/");
    const isSettingsPath = location?.pathname
      ?.toLowerCase()
      .includes("/business-settings/");
    const isDispatchPath = location?.pathname
      ?.toLowerCase()
      .includes("/dispatch");

    // Set showUserSideNav based on the pathname condition
    isUserPath && setShowUserSideNav(isUserPath);
    isTransactionPath && setShowTransactions(isTransactionPath);
    isSettingsPath && setShowSettings(isSettingsPath);
    isDispatchPath && setShowDispatch(isDispatchPath);

    return () => {
      setShowUserSideNav(false);
      setShowTransactions(false);
      setShowSettings(false);
      setShowDispatch(false);
    };
  }, [location.pathname]);

  const drawer = (
    <div className="bg-[#005555] h-full overflow-y-auto text-[#E9F3FF]">
      <div className="bg-white flex items-center justify-center">
        <img className=" object-cover h-10 " src={logo} />
        <Toolbar className="bg-white" />
        <IoClose className="fill-black text-[2.5vh]" onClick={() => console.log("helloooo")} />
      </div>
      <Divider />

      <Search className="border md:mx-auto md:mr-2 md:my-2 my-2">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Menu..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      {/* <Sidebarlist/> */}
      <div className="">
        {showUserSideNav ? (
          <Usersidebaarlist drawer={mobileOpen} setDrawer={setMobileOpen} />
        ) : showTransactions ? (
          <TransactionsReportSideBaar
            drawer={mobileOpen}
            setDrawer={setMobileOpen}
          />
        ) : showDispatch ? (
          <DispatchSidebaar drawer={mobileOpen} setDrawer={setMobileOpen} />
        ) : showSettings ? (
          <SettingSidebar drawer={mobileOpen} setDrawer={setMobileOpen} />
        ) : (
          <Sidebarlist drawer={mobileOpen} setDrawer={setMobileOpen} />
        )}
        <div className="sticky bottom-0">
          <ProfileButton />
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-white">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon className="text-black" />
          </IconButton>

          <div className="w-full">
            <NavItemMenu
              showUserSideNav={showUserSideNav}
              setShowUserSideNav={setShowUserSideNav}
              showTransactions={showTransactions}
              setShowTransactions={setShowTransactions}
              showSettings={showSettings}
              setShowSettings={setShowSettings}
              showDispatch={showDispatch}
              setShowDispatch={setShowDispatch}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default withAuth(Layout);
