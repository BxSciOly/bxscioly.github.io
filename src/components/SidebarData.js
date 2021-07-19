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
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Events",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Biology",
        path: "/events/events1",
        icon: <GiIcons.GiDna2 />,
        cName: "sub-nav",
      },
      {
        title: "Build",
        path: "/events/events2",
        icon: <FaIcons.FaWrench />,
        cName: "sub-nav",
      },
      {
        title: "Chemistry",
        path: "/events/events3",
        icon: <FaIcons.FaVial />,
      },
      {
        title: "Physics",
        path: "/events/events3",
        icon: <GiIcons.GiMolecule />,
      },
      {
        title: "Trial",
        path: "/events/events3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "FAQs",
    path: "/faqs",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
