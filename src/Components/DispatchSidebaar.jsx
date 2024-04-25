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
import Collapse from "@mui/material/Collapse";
const DispatchSidebaar = ({ drawer, setDrawer }) => {
  const [open, setOpen] = React.useState(true);
  const [Isopen, setIsOpen] = React.useState({
    Dropdown1: false,
    Dropdown2: false,
    Dropdown3: false,
    Dropdown4: false,
    Dropdown5: false,
    Dropdown6: false,
    Dropdown7: false,
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
      <List className="overflow-x-hidden text-sm h-[100vh]">
        <List>
          <Link to="/dispatch" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText className="-mx-6" primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <div className="flex justify-start items-center mx-2 text-sm mt-2 text-[#99A7BA]">
          DISPATCH MANAGEMENT
        </div>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown1")}
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
            ></ListItemIcon>
            <ListItemText
              className="-mx-2"
              primary="Grocery"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown1} timeout={"auto"} unmountOnExit>
          <Link
            to={"/dispatch/UnassignedOrder/List"}
            onClick={() => setDrawer(!drawer)}
          >
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon
                  style={{ fontSize: "4px", color: "white", marginLeft: "4px" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Unassigned Orders"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link
            to={"/dispatch/list/1/on_going"}
            onClick={() => setDrawer(!drawer)}
          >
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              >
                <FiberManualRecordIcon
                  style={{ fontSize: "4px", color: "white", marginLeft: "4px" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Ongoing Orders"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
      </List>
    </>
  );
};
export default DispatchSidebaar;
