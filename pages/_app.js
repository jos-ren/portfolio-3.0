import React, { useState } from "react";
import Head from 'next/head'
import '../styles/globals.css'
import useColorTheme from "use-color-theme";
import { useMediaQuery } from 'react-responsive'
import SideBar from "../comps/SideBar";
import TopBar from "../comps/TopBar";
import { projects_data } from '../public/data.js';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

if (typeof window !== 'undefined' && localStorage.colorTheme !== '"dark-theme"') {
  localStorage.setItem("colorTheme", '"light-theme"');
} else if (typeof window !== 'undefined' && localStorage.colorTheme !== '"light-theme"') {
  localStorage.setItem("colorTheme", '"dark-theme"');
}

function MyApp({ Component, pageProps }) {

  const colorTheme = useColorTheme("light-theme", {
    classNames: ["light-theme", "dark-theme"],
  });
  const [isDarkMode, setDarkMode] = React.useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const isTablet = useMediaQuery({ query: '(max-width: 880px)' })

  let sun_moon = "";
  let github = "";
  let linkedin = "";
  let email = "";
  let behance = "";
  let logo = "";
  if (colorTheme.value === "light-theme") {
    sun_moon = "/icons/sun.svg";
    github = "/icons/github.svg";
    linkedin = "/icons/linkedin.svg";
    email = "/icons/email.svg";
    behance = "/icons/behance.svg";
    logo = "/icons/logo.svg";
  } else if (colorTheme.value === "dark-theme") {
    sun_moon = "/icons/moon_w.svg";
    github = "/icons/github_w.svg";
    linkedin = "/icons/linkedin_w.svg";
    email = "/icons/email_w.svg";
    behance = "/icons/behance_w.svg";
    logo = "/icons/logo_w.svg";
  }

  const toggleDarkMode = () => {
    if (colorTheme.value === "light-theme") {
      setDarkMode(true);
    } else if (colorTheme.value === "dark-theme") {
      setDarkMode(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Josh Renema</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./icons/logo.png" />
      </Head>
      {/* BODY */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* SIDE BAR / TOP BAR */}
        {isTablet ? <TopBar isOpen={isOpen} onClick={() => { setIsOpen(!isOpen) }} /> :
          <SideBar
            logo_src={logo}
            sm_src={sun_moon}
            github={github}
            linkedin={linkedin}
            behance={behance}
            email={email}
            onClick={() => { colorTheme.toggle(), toggleDarkMode() }} data={projects_data}
            icon={
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={20}
              />
            }
          />}
        {isOpen && isTablet &&
          <SideBar
            logo_src={logo}
            sm_src={sun_moon}
            github={github}
            linkedin={linkedin}
            behance={behance}
            email={email}
            onClick={() => { colorTheme.toggle(), toggleDarkMode() }} data={projects_data}
            icon={
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={20}
              />
            }
            isOpen={isOpen}
          />
        }
        {/* MAIN */}
        <div style={
          isTablet ? {
            position: "relative",
            width: "100vw",
            left: "0px",
            minHeight: "100vh",
            background: 'var(--secondary)',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0em 1.5em"
          } : {
            position: "relative",
            width: "calc(100vw - 333px)",
            left: "333px",
            minHeight: "100vh",
            background: 'var(--secondary)',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0em 2em"
          }
        }>
          <div className="fill"></div>
          {/* CONTENT */}
          <div className="content" style={{ padding: "6em 0", maxWidth: "800px" }
          }>
            <Component {...pageProps} />
          </div>
          <div className="fill"></div>
        </div>
      </div>
    </div >
  )
}

export default MyApp
