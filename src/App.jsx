import React, { useState, useEffect } from "react";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Components/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import Allshop from "./Pages/Allshop";
import Newsale from "./Pages/Newsale";
import OrderRefunds from "./Pages/OrderRefunds";
import FlashSale from "./Pages/FlashSale";
import BasicCampaigns from "./Pages/BasicCampaigns";
import ItemBasicCampaigns from "./Pages/ItemBasicCampaigns";
import Banners from "./Pages/Banners";
import OtherBanners from "./Pages/OtherBanners";
import Coupons from "./Pages/Coupons";
import PushNotification from "./Pages/PushNotification";
import Category from "./Pages/Category";
import SubCategory from "./Pages/SubCategory";
import Attributes from "./Pages/Attributes";
import Units from "./Pages/Units";
import AddNew from "./Pages/AddNew";
import StoreConfig from "./Pages/StoreConfig";
import MyStore from "./Pages/MyShop";
import MyShop from "./Pages/MyShop";
import MyWallet from "./Pages/MyWallet";
import Disbursement from "./Pages/Disbursement";
import Chat from "./Pages/Chat";
import ExpenceReport from "./Pages/ExpenceReport";
import DisbursementReport from "./Pages/DisbursementReport";
import EmployeeRole from "./Pages/EmployeeRole";
import ListEmployee from "./Pages/ListEmployee";
import BusinessSettings from "./Pages/BusinessSettings";
import ZoneSettings from "./Pages/ZoneSettings";
import SocialSettings from "./Pages/SocialSettings";
import PaymentGatewaySetup from "./Pages/PaymentGatewaySetup";
import ReactSiteSetup from "./Pages/ReactSiteSetup";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import OrderSettings from "./Components/OrderSettings";
import OrderCancellation from "./Components/OrderCancellation";
import List from "./Pages/List";
import ProductGallery from "./Pages/ProductGallery";
import NewItemRequest from "./Pages/NewItemRequest";
import Review from "./Pages/Review";
import Login from "./Pages/Login";
import UserOverview from "./Pages/UserOverview";
import Customers from "./Pages/Customers";
import AddFund from "./Pages/AddFund";
import Report from "./Pages/Report";
import Bonus from "./Pages/Bonus";
import Userscustomerloyaltypointreport from "./Pages/Userscustomerloyaltypointreport";
import SubcribedMailList from "./Pages/SubcribedMailList";
import ContactMassage from "./Pages/ContactMassage";
import EmpolyeeRole from "./Pages/EmpolyeeRole";
import AddNewEmployees from "./Pages/AddNewEmployees";
import EmployeeList from "./Pages/EmployeeList";
import ZoneSetup from "./Pages/ZoneSetup";
import AddBusinessModule from "./Pages/AddBusinessModule";
import Modules from "./Pages/Modules";
// import BusinessSettings from './Pages/BusinessSettings';
import ThirdParty from "./Pages/ThirdParty";
import FirebaseNotification from "./Pages/FirebaseNotification";
import LoginUrlPage from "./Pages/LoginUrlPage";
import OfflinePaymentSetup from "./Pages/OfflinePaymentSetup";
import DispatchOverview from "./Pages/DispatchOverview";
import UnassignedOrders from "./Pages/UnassignedOrders";
import OngoingOrders from "./Pages/OngoingOrders";
import NewStore from "./Pages/NewStore";
import AddStore from "./Pages/AddStore";
import StoreList from "./Pages/StoreList";
import Recommended from "./Pages/Recommended";
import Import from "./Pages/Import";
import Export from "./Pages/Export";
import CategoryBulkImport from "./Pages/CategoryBulkImport";
import CategoryBulkExport from "./Pages/CategoryBulkExport";
import ProductImport from "./Pages/ProductImport";
import ProductBulkExport from "./Pages/ProductBulkExport";
import WithdrawRequest from "./Pages/Transaction/WithdrawRequest";
import StoreDisbursement from "./Pages/Transaction/StoreDisbursement";
import Deliveryman from "./Pages/Transaction/Deliveryman";
import CollectCash from "./Pages/Transaction/CollectCash";
import DeliverymenPayment from "./Pages/Transaction/DeliverymenPayment";
import WithdrawMethod from "./Pages/Transaction/WithdrawMethod";
import ItemReport from "./Pages/Transaction/ItemReport";
import TransectionReport from "./Pages/Transaction/TransectionReport";
import ExpenseReport from "./Pages/Transaction/ExpenseReport";
import TransactionDisbursementReport from "./Pages/Transaction/DisbursementReport";
import LimiteStock from "./Pages/Transaction/LimiteStock";
import OrderReport from "./Pages/Transaction/OrderReport";
import ZoneModuleSetup from "./Pages/ZoneModuleSetup";
import Pending from "./Pages/Pending";
import Accepted from "./Pages/Accepted";
import Delivered from "./Pages/Delivered";
import Canceled from "./Pages/Canceled";
import OfflinePayments from "./Pages/OfflinePayments";
import Refunded from "./Pages/Refunded";
import OrderAll from "./Pages/OrderAll";
import Scheduled from "./Pages/Scheduled";
import Processing from "./Pages/Processing";
import UpdateCampaingsedit from "./Pages/UpdateCampaingsedit";
import UpdateItemCampaignsEdite from "./Pages/UpdateItemCampaignsEdite";
import OrderOnTheWay from "./Pages/OrderOnTheWay";
import PaymentFailed from "./Pages/PaymentFailed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/allshop" element={<Allshop />}></Route>
        <Route path="/newsale" element={<Newsale />}></Route>
        <Route path="/OrderRefunds" element={<OrderRefunds />}></Route>
        <Route path="/FlashSale" element={<FlashSale />}></Route>
        <Route path="/BasicCampaigns" element={<BasicCampaigns />}></Route>
        <Route path="/ItemCampaigns" element={<ItemBasicCampaigns />}></Route>
        <Route path="/admin/campaign/basic/edit/6" element={<UpdateCampaingsedit/>}></Route>
        <Route path="/admin/campaign/item/edit/12" element={<UpdateItemCampaignsEdite/>}></Route>
        <Route path="/Banners" element={<Banners />}></Route>
        <Route path="/OtherBanners" element={<OtherBanners />}></Route>
        <Route path="/Coupons" element={<Coupons />}></Route>
        <Route path="/PushNotification" element={<PushNotification />}></Route>
        <Route path="/Category" element={<Category />}></Route>
        <Route path="/SubCategory" element={<SubCategory />}></Route>
        <Route path="/Attributes" element={<Attributes />}></Route>
        <Route path="/Units" element={<Units />}></Route>
        <Route path="/Addnew" element={<AddNew />}></Route>
        <Route path="/List" element={<List />}></Route>
        <Route path="/ProductGallery" element={<ProductGallery />}></Route>
        <Route path="/NewItemReqeust" element={<NewItemRequest />}></Route>
        <Route path="/Review" element={<Review />}></Route>
        {/* <Route path="/NewStore" element={<NewStore />}></Route> */}
        <Route path="/AddStore" element={<AddStore />}></Route>
        <Route path="/StoreList" element={<StoreList />}></Route>
        <Route path="/RecommendedStore" element={<Recommended />}></Route>
        <Route path="/BulkImport" element={<Import />}></Route>
        <Route path="/BulkExport" element={<Export />}></Route>
        <Route
          path="/CategoryBulkImport"
          element={<CategoryBulkImport />}
        ></Route>
        <Route
          path="/CategoryBulkExport"
          element={<CategoryBulkExport />}
        ></Route>
        <Route path="/ProductImport" element={<ProductImport />}></Route>
        <Route
          path="/ProductBulkExport"
          element={<ProductBulkExport />}
        ></Route>

        {/* Order Routes */}
        <Route path="/Scheduled" element={<Scheduled />}></Route>
        <Route path="/Pending" element={<Pending />}></Route>
        <Route path="/Accepted" element={<Accepted />}></Route>
        <Route path="/Delivered" element={<Delivered />}></Route>
        <Route path="/Canceled" element={<Canceled />}></Route>
        <Route path="/Refunded" element={<Refunded />}></Route>
        <Route path="/order/processing" element={<Processing/>}></Route>
        <Route path="/OfflinePayments" element={<OfflinePayments />}></Route>
        <Route path="/OrderAll" element={<OrderAll/>}></Route>
        <Route path="order/list/item_on_the_way" element={<OrderOnTheWay/>}></Route>
        <Route path="admin/order/list/failed" element={<PaymentFailed/>}></Route>
        {/* Order Routes */}

        <Route path="Users">
          <Route index element={<UserOverview />}></Route>
          <Route path="Customers" element={<Customers />}></Route>
          <Route path="AddFund" element={<AddFund />}></Route>
          <Route path="Report" element={<Report />}></Route>
          <Route path="Bonus" element={<Bonus />}></Route>
          <Route
            path="customer/loyalty-point/report"
            element={<Userscustomerloyaltypointreport />}
          ></Route>
          <Route
            path="customer/subscribed"
            element={<SubcribedMailList />}
          ></Route>
          <Route
            path="contact/contact-list"
            element={<ContactMassage />}
          ></Route>
          <Route path="custom-role/create" element={<EmpolyeeRole />}></Route>
          <Route
            path="employee/AddNewEmployees"
            element={<AddNewEmployees />}
          ></Route>
          <Route path="employee/List" element={<EmployeeList />}></Route>
        </Route>
        <Route
          path="/business-settings/ZoneSetup"
          element={<ZoneSettings />}
        ></Route>
        <Route
          path="/business-settings/ZoneSetup/module_settings"
          element={<ZoneModuleSetup />}
        ></Route>
        <Route
          path="/business-settings/moduleSetup/AddBusinessModule"
          element={<AddBusinessModule />}
        ></Route>
        <Route path="/business-settings/module" element={<Modules />}></Route>
        <Route
          path="/business-settings/business-setup"
          element={<BusinessSettings />}
        ></Route>
        <Route
          path="/business-settings/third-party/payment-method"
          element={<PaymentGatewaySetup />}
        ></Route>
        <Route
          path="/business-settings/FirebaseNotification"
          element={<FirebaseNotification />}
        ></Route>
        <Route
          path="/business-settings/login-url-setup"
          element={<LoginUrlPage />}
        ></Route>
        <Route
          path="/business-settings/offline-payment"
          element={<OfflinePaymentSetup />}
        ></Route>
        <Route path="/dispatch" element={<DispatchOverview />}></Route>
        <Route
          path="dispatch/UnassignedOrder/List"
          element={<UnassignedOrders />}
        ></Route>
        <Route
          path="/dispatch/list/1/on_going"
          element={<OngoingOrders />}
        ></Route>
        <Route
          path="/transactions/store/withdraw_list"
          element={<WithdrawRequest />}
        ></Route>
        <Route
          path="/transactions/store-disbursement/"
          element={<StoreDisbursement />}
        ></Route>
        <Route
          path="/transactions/dm-disbursement/"
          element={<Deliveryman />}
        ></Route>
        <Route
          path="/transactions/account-transaction"
          element={<CollectCash />}
        ></Route>
        <Route
          path="/transactions/provide-deliveryman-earnings"
          element={<DeliverymenPayment />}
        ></Route>
        <Route
          path="/transactions/withdraw-method"
          element={<WithdrawMethod />}
        ></Route>
        <Route
          path="/transactions/report/item-wise-report"
          element={<ItemReport />}
        ></Route>
        <Route
          path="/transactions/report/day-wise-report"
          element={<TransectionReport />}
        ></Route>
        <Route
          path="/transactions/report/expense-report"
          element={<ExpenseReport />}
        ></Route>
        <Route
          path="/transactions/report/disbursement-report"
          element={<TransactionDisbursementReport />}
        ></Route>
        <Route
          path="/transactions/report/low-stock-report"
          element={<LimiteStock />}
        ></Route>
        <Route
          path="/transactions/report/order-report"
          element={<OrderReport />}
        ></Route>

        {/* /* <Route path="/store_config" element={<StoreConfig />}></Route>
          <Route path="/my_shop" element={<MyShop />}></Route>
          <Route path="/my_wallet" element={<MyWallet />}></Route>
          <Route path="/disbursement" element={<Disbursement />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/expencereport" element={<ExpenceReport />}></Route>
          <Route path="/disbursementreport" element={<DisbursementReport />}></Route>
          <Route path="/employeerole" element={<EmployeeRole />}></Route>
          <Route path="/listemployee" element={<ListEmployee />}></Route> */}

        <Route path="/business_settings" element={<BusinessSettings />}></Route>
        <Route
          path="/business_settings/order_settings"
          element={<OrderSettings />}
        ></Route>
        <Route
          path="/business_settings/order_cancellation"
          element={<OrderCancellation />}
        ></Route>
        <Route path="/zone_settings" element={<ZoneSettings />}></Route>
        <Route path="/social_settings" element={<SocialSettings />}></Route>
        <Route
          path="/payment_gateway_setup"
          element={<PaymentGatewaySetup />}
        ></Route>
        <Route path="/react_site_setup" element={<ReactSiteSetup />}></Route>
        {/* <Route path="/privacy_policy" element={<PrivacyPolicy />}></Route> */}
        <Route
          path="/terms_and_conditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="/dispatch" element={<DispatchOverview />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
