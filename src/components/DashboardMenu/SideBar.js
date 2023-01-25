import React from "react";
import * as GrIcons from "react-icons/gr";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";

export const SideBar = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiDashboardFill />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaProductHunt/>,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <FaIcons.FaBlog />,
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: <GrIcons.GrTransaction />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <FiIcons.FiUser />,
  },
  {
    title: "Analysis",
    path: "/analysis",
    icon: <BiIcons.BiAnalyse />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <MdIcons.MdReport />,
  },
  {
    title: "Investment",
    path: "/investment",
    icon: <FaIcons.FaChartLine />
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FiIcons.FiSettings />,
  },
];
