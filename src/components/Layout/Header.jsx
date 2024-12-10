import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

import { useAuth } from "../../context/AuthContext";
import { getInitials } from "../../utils/getInitials";
import Logo from "../../assets/icons/logoMain.svg";
import { Avatar, Button, List, ListItemButton, Popover } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const Header = ({ menuItem, logout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  const handleProfileMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  const handleLanguageMenuClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const openLanguageMenu = Boolean(languageAnchorEl);

  const handleMenuItemClick = () => {
    setSidebarOpen(false);
  };

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleStartChallenge = () => {
    navigate("/trading-account");
  };

  return (
    <>
      <div className="flex justify-between items-center border-b border-[#3d4054] py-3 lg:py-5 px-4 lg:px-8 bg-sidebar">
        {/* Left section - Welcome message */}
        <div className="flex flex-col justify-start">
          <span className="text-gradient-color text-2xl">Welcome Zarror!</span>
          <p className="text-sm">Hope you are healthy and happy today...</p>
        </div>
        {/* Right section - Action buttons */}
        <div className="flex lg:w-[25%] md:w-[40%] sm:text-inherit text-ellipsis whitespace-nowrap items-center">
          <div className="flex lg:hidden justify-start items-center gap-2 mr-4">
            <IconButton onClick={handleMenuClick}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <img
              src={Logo}
              alt="CoinProp"
              className="hidden sm:block w-[75px] translate-y-1"
            />
          </div>

          <Button
            variant="containedGradient"
            onClick={handleStartChallenge}
            style={{
              marginRight: "1rem",
            }}
          >
            Start Challenge
          </Button>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleProfileMenuClick}
          >
            <Avatar
              sx={{
                width: 45,
                height: 45,
                backgroundColor: "#FFFFF",
                color: "black",
              }}
            >
              {getInitials(user?.firstName, user?.lastName)}
            </Avatar>
            <IconButton onClick={handleProfileMenuClick}>
              <KeyboardArrowDownIcon
                sx={{
                  color: "white",
                  mx: "0.25rem",
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>

      <div>
        {isSidebarOpen &&
          menuItem?.map((item) => (
            <div key={item?.id}>
              <NavLink
                to={item.path}
                onClick={handleMenuItemClick}
                className={`font-medium text-lg ${
                  isNavLinkActive(item.path)
                    ? "flex items-center bg-[#002427] rounded-[10px] text-[#D974F3]"
                    : ""
                }`}
              >
                <div className="flex gap-4 items-center py-4 pl-8">
                  <div>
                    {React.isValidElement(item.icon)
                      ? React.cloneElement(item.icon, {
                          active: isNavLinkActive(item.path),
                        })
                      : item.icon}
                  </div>
                  <div>{item.name}</div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleProfileMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List
          sx={{ color: "white", backgroundColor: "#1c1d1d", fontSize: "16px" }}
        >
          <ListItemButton
            onClick={() => {
              handleProfileMenuClose();
            }}
          >
            Profile
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              logout();
              navigate("/auth/sign-in");
            }}
          >
            Logout
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
};

export default Header;
