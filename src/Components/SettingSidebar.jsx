import React from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaCarSide } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMan } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { MdLoyalty } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import BadgeIcon from "@mui/icons-material/Badge";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ModuleSetup = [
  {
    to: "/business-settings/moduleSetup/AddBusinessModule",
    label: "Add Business Module",
  },
  { to: "/business-settings/module", label: "Modules" },
];
const PagesAndSocialMedia = [
  { to: "", label: "Social Media" },
  { to: "", label: "Admin Landing Page" },
  { to: "", label: "React Landing Page" },
  { to: "", label: "Flutter Landing Page" },
  { to: "", label: "Flutter Landing Page" },
];

const ThirdrdParty = [
  { to: "business-settings/third-party/payment-method", label: "3rd Party" },
  {
    to: "/business-settings/FirebaseNotification",
    label: "Firebase Notification",
  },
  { to: "/business-settings/login-url-setup", label: "Login Url Page" },
  { to: "/business-settings/offline-payment", label: "Offline Payment Setup" },
];

const SettingSidebar = ({ drawer, setDrawer }) => {
  const [open, setOpen] = React.useState(true);
  const [Isopen, setIsOpen] = React.useState({
    Dropdown1: false,
    Dropdown2: false,
    Dropdown3: false,
  });

  const toggleDropdown = (dropdown) => {
    setIsOpen((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [key, key === dropdown])
      ),
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <>
      <List className="overflow-x-hidden text-sm">
        <div className="flex justify-start items-center mx-2 text-sm mt-4 text-[#99A7BA]">
          BUSINESS MANAGEMENT
        </div>

        <Link
          to="/business-settings/zoneSetup"
          onClick={() => setDrawer(!drawer)}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IoIosContacts className="text-white" />
              </ListItemIcon>
              <ListItemText className="-mx-6" primary="Zone Setup" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown1")}
            sx={{
              minHeight: 20,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <CiWallet className="text-white" />
            </ListItemIcon>
            <ListItemText
              className="-mx-3"
              primary="Module Setup"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown1} timeout={"auto"} unmountOnExit>
          {ModuleSetup.map((link, index) => (
            <Link key={index} to={link.to} onClick={() => setDrawer(!drawer)}>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FiberManualRecordIcon
                    style={{
                      fontSize: "4px",
                      color: "white",
                      marginLeft: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={link.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          ))}
        </Collapse>
        <Link
          to={"/business-settings/business-setup"}
          onClick={() => setDrawer(!drawer)}
        >
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 20,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <CiWallet className="text-white" />
              </ListItemIcon>
              <ListItemText
                className="-mx-3"
                primary="Business Settings"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown2")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <MdLoyalty className="text-white" />
            </ListItemIcon>
            <ListItemText
              className="-mx-3"
              primary="Pages & Social Media"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown2} timeout={"auto"} unmountOnExit>
          {PagesAndSocialMedia.map((link, index) => (
            <Link key={index} to={link.to} onClick={() => setDrawer(!drawer)}>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FiberManualRecordIcon
                    style={{
                      fontSize: "4px",
                      color: "white",
                      marginLeft: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={link.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          ))}
        </Collapse>
        <Link
          to="/users/customer/subscribed"
          onClick={() => setDrawer(!drawer)}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CiMail className="text-white" />
              </ListItemIcon>
              <ListItemText className="-mx-6" primary="Gallery" />
            </ListItemButton>
          </ListItem>
        </Link>

        <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2">
          SYSTEM MANAGEMENT
        </div>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown3")}
            sx={{
              minHeight: 20,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <RiTeamLine className="text-white" />
            </ListItemIcon>
            <ListItemText
              className="-mx-2"
              primary="3rd Party & Configuration"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>

        <Collapse in={Isopen.Dropdown3} timeout={"auto"} unmountOnExit>
          {ThirdrdParty.map((link, index) => (
            <Link key={index} to={link.to} onClick={() => setDrawer(!drawer)}>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FiberManualRecordIcon
                    style={{
                      fontSize: "4px",
                      color: "white",
                      marginLeft: "4px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  className=""
                  primary={link.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          ))}
        </Collapse>
      </List>
      <Link
        className=""
        to="/react_site_setup"
        onClick={() => setDrawer(!drawer)}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BadgeIcon className="text-white" />
            </ListItemIcon>
            <ListItemText className="-mx-6 " primary="React Site" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link className="" to="" onClick={() => setDrawer(!drawer)}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BadgeIcon className="text-white" />
            </ListItemIcon>
            <ListItemText className="-mx-6 " primary="Email Template" />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default SettingSidebar;
