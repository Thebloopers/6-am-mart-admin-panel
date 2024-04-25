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
const transactionsReportSideBaar = ({ drawer, setDrawer }) => {
  return (
    <>
      <div className="flex justify-start items-center mx-2 text-sm mt-6 text-[#99A7BA]">
        BUSINESS MANAGEMENT
      </div>
      <List className="overflow-x-hidden text-sm space-y-[-25px]">
        <List >
          <Link
            to="/transactions/store/withdraw_list"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6" primary="Withdrawal Requests" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/store-disbursement/"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6 " primary="Store Disbursement" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/dm-disbursement/"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}}
                  className="-mx-6 "
                  primary="Delivery Man Disbursement"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/account-transaction"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6 " primary="Collect Cash" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/provide-deliveryman-earnings"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}}
                  className="-mx-6 "
                  primary="Delivery Man Payments"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/withdraw-method"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6 " primary="Withdrawal Method" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </List>

      <div className="flex justify-start items-center mx-2 text-sm mt-2 text-[#99A7BA]">
        REPORT AND ANALYTICS
      </div>
      <List className="overflow-x-hidden text-sm space-y-[-25px]">
        {" "}
        <List>
          <Link
            to="/transactions/report/day-wise-report"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6 " primary="Transection Report" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/report/item-wise-report"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6 " primary="Item Report" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/report/expense-report"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6 " primary="Expense Report" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/report/disbursement-report"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}}
                  className="-mx-6 "
                  primary="Disbursement Report"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/report/low-stock-report"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}}
                  className="-mx-6 "
                  primary="Limited Stock Item  "
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/transactions/report/order-report"
            onClick={() => setDrawer(!drawer)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GoHome className="text-white" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '1.9vh'}} className="-mx-6 " primary="Order Report" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </List>
    </>
  );
};

export default transactionsReportSideBaar;
