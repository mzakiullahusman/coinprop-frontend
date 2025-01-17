import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logoMain.svg";
import AccountShopIcon from "@components/assets/AccountShopIcon";
import LogoutIcon from "@components/assets/LogoutIcon";

const Sidebar = ({ menuItem }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  const handleStartChallenge = () => {
    navigate("/trading-account");
  };

  return (
    <>
      <NavLink to="/dashboard">
        <div className="hidden lg:flex justify-center items-center h-[90px]">
          <img src={Logo} alt="CoinProp" className="w-[70px]" />
        </div>
      </NavLink>
      <div className="hidden lg:flex flex-col justify-between pb-4 pr-6 pt-[27px] h-5/6">
        <div>
          {menuItem?.map((item) => {
            const active = isNavLinkActive(item.path);
            const isFAQ = item.name === "Go to FAQ";

            return (
              <div key={item.id}>
                <NavLink
                  to={item.path}
                  className={`font-medium text-base ${
                    active
                      ? "flex items-center rounded-lg w-[99.5%] 5xl:w-[98%] text-custom-color border-l-8 border-l-[#01FF9D] border-y-2 border-r-2 border-r-[#4d4d4d] border-y-[#4d4d4d]"
                      : "flex items-center hover:text-[#01FF9D]"
                  }
                ${
                  item.name === "Affiliate Portal"
                    ? "border-b-2 border-b-custom-border"
                    : ""
                }`}
                >
                  <div
                    className={`flex gap-[10px] items-center py-3 ${
                      active ? "pl-4" : "pl-8"
                    }`}
                  >
                    <div>
                      {/* Pass the active prop to icons */}
                      {React.isValidElement(item.icon)
                        ? React.cloneElement(item.icon, { active })
                        : item.icon}
                    </div>
                    <div>{item.name}</div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>

        {/* Buttons section */}
        <div className="mt-auto">
          <button className=" ms-2 w-auto bg-gradient-text text-black px-2 py-2 rounded-2xl flex justify-center items-center text-sm mb-2">
            <AccountShopIcon />
            Account Shop
          </button>

          <button className="w-full flex text-sm text-white px-4 py-2 rounded-md">
            <LogoutIcon />
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
