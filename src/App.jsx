import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import HowItWorks from "./pages/HomeItWorks";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
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
// components
import Layout from "./components/Layout";
import "./App.css";

const AuthRoutes = () => (
  // <PublicRoute>
  <Routes>
    <Route path="/sign-up" element={<Register />} />
    <Route path="/sign-in" element={<Login />} />
    <Route path="/forgot-password" element={<Forgot />} />
  </Routes>
  // </PublicRoute>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={<Navigate to="/auth/sign-in" />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
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
