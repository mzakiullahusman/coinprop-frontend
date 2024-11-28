import Header from "./Header";
import Sidebar from "./Sidebar";

import DashboardIcon from "../assets/DashboardIcon";
import TradingAccountIcon from "../assets/TradingAccountIcon";
import LeaderboardIcon from "../assets/LeaderboardIcon";
import FaqIcon from "../assets/FaqIcon";
import CompetitionIcon from "../assets/CompetitionIcon";
import AffiliateIcon from "../assets/AffiliateIcon";
import CertificateIcon from "../assets/CertificateIcon";
import LiveNewsIcon from "../assets/LiveNewsIcon";
import NewsCalendar from "../assets/NewsCalendar";
import ProfitAndShareIcon from "../assets/ProfitAndShareIcon";
import TradersMindIcon from "../assets/TradersMindIcon";
import BillingAndAccountsIcon from "../assets/BillingAndAccountsIcon";
import CustomerSupportIcon from "../assets/CustomerSupportIcon";

import background from "@assets/images/background.png";
import { useAuth } from "../../context/AuthContext";

const Layout = ({ children }) => {
  const { logout } = useAuth();

  const menuItem = [
    {
      id: 1,
      path: "/dashboard",
      name: "Performance Stats",
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      path: "/trading-account",
      name: "Trading Terminal",
      icon: <TradingAccountIcon />,
    },
    {
      id: 3,
      path: "/leaderboard",
      name: "Leaderboard",
      icon: <LeaderboardIcon />,
    },
    // {
    //   id: 4,
    //   path: "/competitions",
    //   name: "Competitions",
    //   icon: <CompetitionIcon />,
    // },
    {
      id: 5,
      path: "/affiliate-portal",
      name: "Affiliate Portal",
      icon: <AffiliateIcon />,
    },
    {
      id: 6,
      path: "/certificates",
      name: "Certificates",
      icon: <CertificateIcon />,
    },
    {
      id: 7,
      path: "/profit-and-share",
      name: "Profit and Share",
      icon: <ProfitAndShareIcon />,
    },
    {
      id: 8,
      path: "/billing-and-accounts",
      name: "Billing and Accounts",
      icon: <BillingAndAccountsIcon />,
    },
    {
      id: 8.25,
      path: "/news-feed",
      name: "News Feed",
      icon: <LiveNewsIcon />,
    },
    {
      id: 8.5,
      path: "/news-calendar",
      name: "News Calendar",
      icon: <NewsCalendar />,
    },
    {
      id: 9,
      path: "/customer-support",
      name: "Customer Support",
      icon: <CustomerSupportIcon />,
    },
    {
      id: 10,
      path: "/faqs",
      name: "FAQs",
      icon: <FaqIcon />,
    },
  ];

  return (
    <div className="lg:flex min-h-[100vh] bg-[#0F1827]">
      <div className="w-[80%] border-r border-[#3d4054] bg-sidebar lg:w-[25%] xl:w-[17%]">
        <Sidebar menuItem={menuItem} />
      </div>
      <div className="w-full lg:w-[75%] xl:w-[83%]">
        <Header menuItem={menuItem} logout={logout} />
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;