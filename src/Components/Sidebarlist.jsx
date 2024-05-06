import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { MdDashboard } from "react-icons/md";
import { MdOutlineNewLabel } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { IoIosFlash } from "react-icons/io";
import { SiCampaignmonitor } from "react-icons/si";
import { RxGroup } from "react-icons/rx";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { MdEditAttributes } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BadgeIcon from "@mui/icons-material/Badge";
import { RiTeamLine } from "react-icons/ri";
import { FaBuildingColumns, FaGear, FaUserLarge } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { HiOutlineWallet } from "react-icons/hi2";
import { MdStarOutline } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { PiMoneyFill } from "react-icons/pi";
import { RiPhoneCameraFill } from "react-icons/ri";
import { BsIncognito } from "react-icons/bs";

import { FaShoppingCart } from "react-icons/fa";

function Sidebarlist({ drawer, setDrawer }) {
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
      <List className="overflow-x-hidden text-sm">
        <List>
          <Link to="/" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdDashboard className="text-white" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-6"
                  primary="Dashboard"
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <div className="flex justify-start items-center mx-4 text-sm mt-4 text-[#99A7BA]">
            POS SECTION
          </div>
        </List>
        <List>
          <Link to="/newsale" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdOutlineNewLabel className="text-white" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-6"
                  primary="New Sale"
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <div className="flex justify-start items-center mx-4 text-sm mt-4 mb-2 text-[#99A7BA]">
            ORDER MANAGEMENT
          </div>
        </List>
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
                mr: open ? 4 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <FaShoppingCart className="text-white" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.9vh" }}
              className="-mx-3"
              primary="Orders"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown1} timeout={"auto"} unmountOnExit>
          <Link onClick={() => setDrawer(!drawer)} to={"/OrderAll"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="All"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                {30}
              </span>
            </ListItemButton>
          </Link>

          <Link onClick={() => setDrawer(!drawer)} to={"/Scheduled"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Scheduled"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>

          <Link onClick={() => setDrawer(!drawer)} to={"/Pending"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Pending"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/Accepted"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Accepted"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>

          <Link onClick={() => setDrawer(!drawer)} to={"/order/processing"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Processing"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          {/* <Link onClick={() => setDrawer(!drawer)} to={""}>
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

              <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}}
                primary="Processing"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link> */}
          <Link
            onClick={() => setDrawer(!drawer)}
            to={"order/list/item_on_the_way"}
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Order On The Way"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/Delivered"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Deliverd"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/Canceled"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Canceled"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link
            onClick={() => setDrawer(!drawer)}
            to={"admin/order/list/failed"}
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Payment Failed"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/Refunded"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Refunded"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/OfflinePayments"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Ofline Payments"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
        </Collapse>

        <ListItem disablePadding sx={{ display: "block", marginTop: "-10px" }}>
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
                mr: open ? 4 : "auto",
                justifyContent: "center",
                color: "black",
              }}
            >
              <RiRefund2Line className="text-white" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.9vh" }}
              className="-mx-3"
              primary="Order Refunds"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown2} timeout={"auto"} unmountOnExit>
          <Link onClick={() => setDrawer(!drawer)} to={"/OrderRefunds"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Refund Requests"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
        <List style={{ marginTop: "-14px" }}>
          <Link to="/FlashSale" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    mr: open ? 1 : "auto",
                  }}
                  >
                  <IoIosFlash
                    className="text-white mr-1"
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-6"
                  primary="Flash Sales"
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <div className="flex justify-start items-center mx-2 text-sm mt-4 text-[#99A7BA]">
            PROMOTION MANAGEMENT
          </div>
        </List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown3")}
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
              <SiCampaignmonitor className="text-white" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.9vh" }}
              className="-mx-1"
              primary="Campaigns"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown3} timeout={"auto"} unmountOnExit>
          <Link onClick={() => setDrawer(!drawer)} to={"/BasicCampaigns"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Basic Campaigns"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/ItemCampaigns"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Item Campaigns"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
        <List style={{ marginTop: "-18px" }}>
          <Link to="/Banners" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RxGroup className="text-white" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-5"
                  primary="Banners"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "-22px" }}>
          <Link to="/OtherBanners" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RxGroup className="text-white" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-5"
                  primary="Other Banners"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "-24px" }}>
          <Link to="/Coupons" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CiDiscount1 className="text-white" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-5"
                  primary="Coupons"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "-24px" }}>
          <Link to="/PushNotification" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IoIosNotifications className="text-white" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-5"
                  primary="Push Notification"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <div className="flex justify-start items-center mx-4 text-sm mt-4 text-[#99A7BA]">
          PRODUCT MANAGEMENT
        </div>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown4")}
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
              <MdCategory className="text-white" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.9vh" }}
              className="-mx-2"
              primary="Categories"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown4} timeout={"auto"} unmountOnExit>
          <Link onClick={() => setDrawer(!drawer)} to={"/Category"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Categories"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/SubCategory"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary=" Sub Categories"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/CategoryBulkImport"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Bulk Import"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/CategoryBulkExport"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Bulk Export"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
        <List style={{ marginTop: "-18px" }}>
          <Link to="/Attributes" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdEditAttributes
                    style={{ marginLeft: "2px" }}
                    className="text-white"
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-5"
                  primary="Attributes"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "-24px" }}>
          <Link to="/Units" onClick={() => setDrawer(!drawer)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaBalanceScale
                    style={{ marginLeft: "2px" }}
                    className="text-white"
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "1.9vh" }}
                  className="-mx-5"
                  primary="Units"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <ListItem disablePadding sx={{ display: "block", marginTop: "-20px" }}>
          <ListItemButton
            onClick={() => toggleDropdown("Dropdown5")}
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
              <FaShoppingCart
                style={{ marginLeft: "-2px" }}
                className="text-white"
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.9vh" }}
              className="-mx-2"
              primary="Product Setup"
              sx={{ opacity: open ? 1 : 0 }}
            />
            {Isopen.Dropdown5 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={Isopen.Dropdown5} timeout={"auto"} unmountOnExit>
          <Link onClick={() => setDrawer(!drawer)} to={"/Addnew"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Add New"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/List"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="List"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/ProductGallery"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Product Gallery"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          {/* <Link onClick={() => setDrawer(!drawer)} to={"/NewItemReqeust"}>
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

              <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}}
                primary="New Item Request"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link> */}
          <Link onClick={() => setDrawer(!drawer)} to={"/Review"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Review"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/ProductImport"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Bulk Import"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
          <Link onClick={() => setDrawer(!drawer)} to={"/ProductBulkExport"}>
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
                primaryTypographyProps={{ fontSize: "1.9vh" }}
                primary="Bulk Export"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {/* <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
          {30}
        </span> */}
            </ListItemButton>
          </Link>
        </Collapse>
        <div className="flex justify-start items-center mx-2 text-sm mt-4 text-[#99A7BA]">
          STORE MANAGEMENT
        </div>

        <div>
          {/* <List>
            <Link to="/NewStore" onClick={() => setDrawer(!drawer)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-5" primary="New Stores" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List> */}
          <List>
            <Link to="/AddStore" onClick={() => setDrawer(!drawer)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "1.9vh" }}
                    className="-mx-5"
                    primary="Add Stores"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <List style={{ marginTop: "-22px" }}>
            <Link to="/StoreList" onClick={() => setDrawer(!drawer)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "1.9vh" }}
                    className="-mx-5"
                    primary="Stores List"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <List style={{ marginTop: "-22px" }}>
            <Link to="/RecommendedStore" onClick={() => setDrawer(!drawer)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "1.9vh" }}
                    className="-mx-5"
                    primary="Recommended Store"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <List style={{ marginTop: "-22px" }}>
            <Link to="/BulkImport" onClick={() => setDrawer(!drawer)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "1.9vh" }}
                    className="-mx-5"
                    primary="Bulk Import"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <List style={{ marginTop: "-22px" }}>
            <Link to="/BulkExport" onClick={() => setDrawer(!drawer)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "1.9vh" }}
                    className="-mx-5"
                    primary="Bulk Export"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </div>
      </List>
    </>
  );
}

export default Sidebarlist;
