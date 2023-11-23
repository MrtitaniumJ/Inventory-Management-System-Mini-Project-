import React, { useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
import { FaTh, FaBars, FaUsers } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoNotifications, IoSettings } from "react-icons/io5";
import { TbFileReport } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    { path: "/dashboard", name: "Dashboard", icon: <MdSpaceDashboard /> },
    {
      path: "/inventoryMgmt",
      name: "Inventory Management",
      icon: <GrSystem />,
    },
    { path: "/categories", name: "Categories", icon: <MdCategory /> },

    { path: "/orders", name: "Orders", icon: <MdProductionQuantityLimits /> },
    { path: "/reports", name: "Reports", icon: <TbFileReport /> },
    { path: "/roles", name: "Roles", icon: <FaUsers /> },
    { path: "/settings", name: "Settings", icon: <IoSettings /> },
    {
      path: "/notifications",
      name: "Notifications",
      icon: <IoNotifications />,
    },
    { path: "/profile", name: "Profile", icon: <CgProfile /> },
    { path: "/logout", name: "Logout", icon: <IoIosLogOut /> },
  ];

  return (
    <div className="flex Class
    Properties
    min-h-0	min-height: 0px;
    min-h-min ">
      <div className="sidebar text-white bg-gray-700 mt-2 ml-2 mb-2 rounded">
        <div className="bars pt-4  pb-2 px-4  ">
          <FaBars onClick={toggle} />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link flex p-2 hover:bg-gray-800 focus:bg-gray-900 items-center"
            activeclassName="active"
          >
            <div className="icon px-2 ">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text text-xs font-semibold "
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="p-6 w-full bg-gray-100 m-2 rounded shadow-black">
      {children}
      <Typewriter
        words={[{children}]}
        loop={Infinity}
               
            />
        </main>
    </div>
  );
};

export default Sidebar;
