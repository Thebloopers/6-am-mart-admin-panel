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

function Usersidebaarlist({ drawer, setDrawer }) {
  const CustomerWallet = [
    { to: "/Users/AddFund", label: "Add Fund" },
    { to: "/Users/Report", label: "Report" },
    { to: "/Users/Bonus", label: "Bonus" },
  ];
  const CustomerLoyaltyPoint = [
    { to: "/Users/customer/loyalty-point/report", label: "Report" },
  ];

  const employee = [
    { to: "/Users/employee/AddNewEmployees", label: "Add New" },
    { to: "/Users/employee/List", label: "List" },
  ];

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
        <List>
          <Link onClick={() => setDrawer(!drawer)} to="/Users/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6" primary="User Overview" />
              </ListItemButton>
            </ListItem>
          </Link>
          {/* <div className="flex justify-start items-center mx-2 text-sm mt-4 text-[#99A7BA] ">
        DELIVERYMAN MANAGEMENT
        </div> */}
          {/* <Link onClick={() => setDrawer(!drawer)} to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FaCarSide/>
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className='-mx-3' primary="Vehicles Category" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => setDrawer(!drawer)} to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <IoIosAddCircleOutline/>
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className='-mx-3' primary="Add Delivery Man" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => setDrawer(!drawer)} to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <IoMan/>
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className='-mx-3' primary="New Delivery Man" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => setDrawer(!drawer)} to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <TbTruckDelivery/>
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className='-mx-3' primary="Deliveryman List" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => setDrawer(!drawer)} to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <MdReviews/>
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className='-mx-3' primary="Reviews" />
            </ListItemButton>
          </ListItem>
        </Link> */}
          <div className="flex justify-start items-center mx-2 text-sm mt-4 text-[#99A7BA]">
            CUSTOMER MANAGEMENT
          </div>
        </List>
        <Link onClick={() => setDrawer(!drawer)} to="/Users/Customers">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IoIosContacts className="text-white" />
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6" primary="Customers" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem style={{ marginTop: "-8px" }} disablePadding sx={{ display: "block" }}>
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
            <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}}
              className="-mx-3"
              primary="Customer Wallet"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown1} timeout={"auto"} unmountOnExit>
          {CustomerWallet.map((link, index) => (
            <Link key={index} to={link.to} onClick={() => setDrawer(!drawer)}>
              <ListItemButton style={{ marginTop: "-8px" }}>
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
                <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}}
                  primary={link.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          ))}
        </Collapse>

        <ListItem  style={{ marginTop: "-8px" }} disablePadding sx={{ display: "block" }}>
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
            <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}}
              className="-mx-3"
              primary="Customer Loyalty Point"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown2} timeout={"auto"} unmountOnExit>
          {CustomerLoyaltyPoint.map((link, index) => (
            <Link key={index} to={link.to} onClick={() => setDrawer(!drawer)}>
              <ListItemButton style={{ marginTop: "-8px" }}>
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
                <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}}
                  primary={link.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          ))}
        </Collapse>
        <Link
          onClick={() => setDrawer(!drawer)}
          to="/Users/customer/subscribed"
        >
          <ListItem disablePadding style={{ marginTop: "-8px" }}>
            <ListItemButton>
              <ListItemIcon>
                <CiMail className="text-white" />
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6" primary="Subscribed Mail List" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          onClick={() => setDrawer(!drawer)}
          to="/Users/contact/contact-list"
        >
          <ListItem disablePadding style={{ marginTop: "-8px" }}>
            <ListItemButton>
              <ListItemIcon>
                <IoIosContact className="text-white" />
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6" primary="Contact Messages" />
            </ListItemButton>
          </ListItem>
        </Link>
        <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2 text-[#99A7BA]">
          EMPLOYEE MANAGEMENT
        </div>

        <Link onClick={() => setDrawer(!drawer)} to="/Users/custom-role/create">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BadgeIcon style={{fontSize: "18px"}} className="text-white" />
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '1.8vh'}} className="-mx-6 " primary="Employee Role" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem style={{ marginTop: "-8px" }} disablePadding sx={{ display: "block" }}>
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
            <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}}
              className="-mx-2"
              primary="Employee"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>

        <Collapse in={Isopen.Dropdown3} timeout={"auto"} unmountOnExit>
          {employee.map((link, index) => (
            <Link key={index} to={link.to} onClick={() => setDrawer(!drawer)}>
              <ListItemButton style={{ marginTop: "-8px" }}>
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
                <ListItemText  primaryTypographyProps={{fontSize: '1.9vh'}}
                  className=""
                  primary={link.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          ))}
        </Collapse>
      </List>
    </>
  );
}

export default Usersidebaarlist;
