import React from "react";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Events",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Biology",
        path: "/biology",
        icon: <GiIcons.GiDna2 />,
      },
      {
        title: "Build",
        path: "/build",
        icon: <FaIcons.FaWrench />,
      },
      {
        title: "Chemistry",
        path: "/chemistry",
        icon: <FaIcons.FaVial />,
      },
      {
        title: "Physics",
        path: "/physics",
        icon: <GiIcons.GiMolecule />,
      },
      {
        title: "Trial",
        path: "/trial",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Board",
    path: "/board",
  },
  {
    title: "FAQs",
    path: "/faqs",
  },
];
