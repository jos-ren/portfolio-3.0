import React, { useState, useEffect } from "react";
import Head from 'next/head'
import '../styles/globals.css'
import useColorTheme from "use-color-theme";
import { useMediaQuery } from 'react-responsive'
import SideBar from "../comps/SideBar";
import TopBar from "../comps/TopBar";
import { projects_data } from '../public/data.js';
import { socials_data } from '../public/data.js';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useLoading, BallTriangle } from '@agney/react-loading';

if (typeof window !== 'undefined' && localStorage.colorTheme !== '"dark-theme"') {
  localStorage.setItem("colorTheme", '"light-theme"');
} else if (typeof window !== 'undefined' && localStorage.colorTheme !== '"light-theme"') {
  localStorage.setItem("colorTheme", '"dark-theme"');
}

function MyApp({ Component, pageProps }) {

  const colorTheme = useColorTheme("light-theme", {
    classNames: ["light-theme", "dark-theme"],
  });
  
  const [isOpen, setIsOpen] = useState(false)

  const isTablet = useMediaQuery({ query: '(max-width: 880px)' })

  let logo = "";
  let link = "";
  let strokeColor = "black";
  let mode = "";
  if (colorTheme.value === "light-theme") {
    logo = "/icons/logo.svg";
    link= "/icons/link.svg"
    strokeColor = "black";
    mode = false;
  } else if (colorTheme.value === "dark-theme") {
    logo = "/icons/logo_w.svg";
    link= "/icons/link_w.svg"
    strokeColor = "white";
    mode = true;
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 750);
  }, []);

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <BallTriangle width="70" />,
  });

  return (
    <div>
      <Head>
        <title>Josh Renema</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="./icons/logo.png" />
      </Head>

      {/* renders only while loading */}
      {isLoading && <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", background: "var(--secondary" }}>
        <div {...containerProps}>
          {indicatorEl}
        </div>
      </div>}



      {!isLoading && <div style={{ display: "flex", flexDirection: "row" }}>
        {/* SIDE BAR / TOP BAR */}
        {isTablet && <TopBar strokeColor={strokeColor} onClick={() => { setIsOpen(!isOpen) }} />}
        {/* // use two seperate sidebars depending on if tablet or not */}
        <SideBar
          isOpen={isOpen}
          logo_src={logo}
          link_src={link}
          onClick={() => { colorTheme.toggle() }}
          projects_data={projects_data}
          socials_data={socials_data}
          icon={
            <DarkModeSwitch
              checked={mode}
              onChange={() => { }}
              size={20}
            />
          }
        />
        {/* for desktop */}
        {!isTablet && <SideBar
          isOpen={true}
          logo_src={logo}
          link_src={link}
          onClick={() => { colorTheme.toggle() }}
          projects_data={projects_data}
          socials_data={socials_data}
          icon={
            <DarkModeSwitch
              checked={mode}
              onChange={() => { }}
              size={20}
            />
          }
        />}

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
          {/* <div className="fill"></div> */}
          {/* CONTENT */}
          <div className="content" style={{ padding: "6em 0", maxWidth: "800px" }
          }>
            <Component {...pageProps} />
          </div>
          {/* <div className="fill"></div> */}
        </div>
      </div>}
    </div >
  )
}

export default MyApp
