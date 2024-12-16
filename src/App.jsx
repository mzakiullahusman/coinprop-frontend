import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// import PrivateRoute from "./routes/PrivateRoutes";
// import PublicRoute from "./routes/PublicRoutes";

// auth pages
import Login from "./pages/authentication/Login";
import Forgot from "./pages/authentication/Forgot";
import Register from "./pages/authentication/Register";

// pages accessible from side menu
import Dashboard from "./pages/Dashboard";
import TradingAccount from "./pages/TradingAccount";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import TradingCombine from "./pages/TradingCombine";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ForexVsFuture from "./pages/ForexVsFuture";
import ChooseFunding from "./pages/ChooseFunding";
import BillingInfoCheckout from "./pages/BillingInfoCheckout";
import NewChallengeCheckout from "./pages/NewChallengeCheckout";
import Leaderboard from "./pages/Leaderboard";
import Competitions from "./pages/Competitions";
import CompetitionStandings from "./pages/CompetitionStandings";
import AffiliatesPortal from "./pages/AffiliatesPortal";
import Certificates from "./pages/Certificates";
import ProfitAndShare from "./pages/ProfitAndShare";
import BillingAndAccounts from "./pages/BillingAndAccounts";
import LiveNews from "./pages/LiveNews";
import NewsCalendar from "./pages/NewsCalendar";
import CustomerSupport from "./pages/CustomerSupport";
import Faqs from "./pages/Faqs";
import Profile from "./pages/Profile";
import AccountSecurity from "./pages/Profile/AccountSecurity";
import Account from "./pages/Account";
import TradingInterface from "./pages/TradingInterface";
// components
import Layout from "./components/Layout";
import "./App.css";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import RiskDisclosure from "./pages/RiskDisclosure";
import Disclosure from "./pages/Disclosure";
import LayoutLanding from "@components/LayoutLanding/LayoutLanding";

const AuthRoutes = () => (
  // <PublicRoute>
  <Routes>
    <Route path="/sign-up" element={<Register />} />
    <Route path="/sign-in" element={<Login />} />
    <Route path="/forgot-password" element={<Forgot />} />
  </Routes>
  // </PublicRoute>
);

const LandingRoutes = () => (
  <LayoutLanding>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/trading-combine" element={<TradingCombine />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/forex-vs-future" element={<ForexVsFuture />} />
      <Route path="/terms-&-conditions" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/risk-disclosure" element={<RiskDisclosure />} />
      <Route path="/disclosure" element={<Disclosure />} />
    </Routes>
  </LayoutLanding>
);

function App() {
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
     if (location.pathname.endsWith("/") && location.pathname !== "/") {
       navigate(location.pathname.slice(0, -1), { replace: true });
     }
   }, [location, navigate]);

  return (
    <Router>
      <Routes>
        <Route path="/landing/*" element={<LandingRoutes />} />
        <Route path="/" element={<Navigate to="/auth/sign-in" />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/trading-view" element={<TradingInterface />} />
        <Route
          path="/*"
          element={
            // <PrivateRoute>
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/trading-account" element={<TradingAccount />} />
                <Route path="/choose-funding" element={<ChooseFunding />} />
                <Route
                  path="/billing-info-checkout"
                  element={<BillingInfoCheckout />}
                />
                <Route
                  path="/new-challenge-checkout"
                  element={<NewChallengeCheckout />}
                />
                <Route path="/news-calendar" element={<NewsCalendar />} />
                <Route path="/accounts" element={<Account />} />
                <Route path="/competitions" element={<Competitions />} />

                <Route
                  path="/competition-standings"
                  element={<CompetitionStandings />}
                />
                <Route
                  path="/affiliate-portal"
                  element={<AffiliatesPortal />}
                />
                {/* <Route path="/certificates" element={<Certificates />} /> */}
                <Route path="/profit-and-share" element={<ProfitAndShare />} />
                <Route
                  path="/billing-and-accounts"
                  element={<BillingAndAccounts />}
                />
                <Route path="/news-feed" element={<LiveNews />} />
                <Route path="/customer-support" element={<CustomerSupport />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/account-security" element={<AccountSecurity />} />
              </Routes>
            </Layout>
            // </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
