
import { NavLink } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart
} from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import React from "react"
import logo from '../assets/logos/Benifiet_logo.png'
import styled from 'styled-components'
import usePath from '../hooks/usePath'

// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SubMenu,
//   SidebarHeader,
//   SidebarContent,
//   SidebarFooter
// } from "react-pro-sidebar";
import { SiElastic, SiRedis, SiHomeassistant, SiDiscord, SiGithub, SiTwitter, SiGitbook, SiMedium } from "react-icons/si";
import {HiAdjustments} from "react-icons/hi";

const Aside = ({ rtl, toggled, handleToggleSidebar }) => {
//   const intl = useIntl();
  const history = useHistory();
  const location = useLocation();

  const headerStyle = {
    padding: "10px",
    textTransform: "uppercase",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "2.5px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "Wrap",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    paddingTop: "60px",
  };

  const path = usePath();
  // const social = usePath();

  const navigate = (path) => {
    handleToggleSidebar();
    history.push(path)
  }

  const paths = [
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: <HiAdjustments />
    },
    {
      path: '/swap',
      label: 'Bond',
      icon: <SiElastic />
    },

    {
      path: '/stake',
      label: 'Stake',
      icon: <SiRedis />
    },
    {
      path: '/upgrade',
      label: 'Governance',
      icon: <SiHomeassistant />
    }
  ]

  const socials = [
    {
      path: 'https://discord.gg/GkrNA2bF5K',
      icon: <SiDiscord />
    },

    {
      path: 'https://medium.com/@HumanPathDao',
      icon: <SiMedium />
    },
    {
      path: 'https://twitter.com/HumanPath_Dao',
      icon: <SiTwitter />
    },
  ]

  return (
    <ProSidebar
      rtl={rtl}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader style={headerStyle}>
        <img className="w-10 md:w-12 mr-4" src={logo} alt="logo" />
        <h1>Human Path</h1>
      </SidebarHeader>
      <SidebarContent >
        <Menu iconShape="circle">
          {
            paths.map((item, index) =>
              <MenuItem
                // className="m-1 text-white text-sm font-medium flex items-center justify-center"
                active={path === item.path} key={index}
                icon={item.icon}
                onClick={() => navigate(item.path)}
              >
                  {item.label}
                {/* <Link to={item.path}>{item.label}</Link> */}
              </MenuItem>
            )
          }
              <MenuItem
            //   className="m-1 text-white text-sm font-medium flex items-center justify-center"
              icon={<SiGitbook/>}
            >
              <a href = "https://human-path-dao.gitbook.io/welcome-to-gitbook/"> Gitbook</a>
            </MenuItem>

          
        </Menu>
      </SidebarContent>
      {/* <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px"
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> {intl.formatMessage({ id: "viewSource" })}</span>
          </a>
        </div>
      </SidebarFooter> */}
            <SidebarFooter>
        <Menu iconShape="circle">
          {
            socials.map((item, index) =>
              <MenuItem
                className="text-white text-sm font-medium flex items-center justify-center"
                active={socials === item.path} key={index}
                icon={item.icon}
              >
                <a href = {item.path}></a>
              </MenuItem>
            )

          }
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
