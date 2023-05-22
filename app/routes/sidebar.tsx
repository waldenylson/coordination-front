/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";

import SidebarCSSFile from "~/components/Sidebar/style.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: SidebarCSSFile },
];

export default function App() {
  const handleTheme = () => {
    let body = document.querySelector("body");
    body?.classList.toggle("dark");
  };

  const handleSidebarState = () => {
    let sidebar = document.querySelector("nav");

    sidebar?.classList.toggle("close");
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
        <Links />
        <title>Sidebar File Title</title>
      </head>
      <body className="">
        <nav className="sidebar">
          <header>
            <div className="image-text">
              <span className="image">
                <img src="logo.png" alt="" />
              </span>
              <div className="text logo-text">
                <span className="name">COORDENA</span>
                <span className="profession">Coordenação Manutenções</span>
              </div>
            </div>

            <i
              className="bx bx-chevron-right toggle"
              onClick={handleSidebarState}
            ></i>
          </header>

          <div className="menu-bar">
            <div className="menu">
              <li className="search-box">
                <i className="bx bx-search icon"></i>
                <input type="text" placeholder="Search..." />
              </li>

              <ul className="menu-links">
                <li className="nav-link">
                  <Link to="/login">
                    <i className="bx bx-home-alt icon"></i>
                    <span className="text nav-text">Dashboard</span>
                  </Link>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-bar-chart-alt-2 icon"></i>
                    <span className="text nav-text">Revenue</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-bell icon"></i>
                    <span className="text nav-text">Notifications</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-pie-chart-alt icon"></i>
                    <span className="text nav-text">Analytics</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-heart icon"></i>
                    <span className="text nav-text">Likes</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-wallet icon"></i>
                    <span className="text nav-text">Wallets</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom-content">
              <li className="">
                <a href="#">
                  <i className="bx bx-log-out icon"></i>
                  <span className="text nav-text">Logout</span>
                </a>
              </li>

              <li className="mode">
                <div className="sun-moon">
                  <i className="bx bx-moon icon moon"></i>
                  <i className="bx bx-sun icon sun"></i>
                </div>
                <span className="mode-text dark">Dark mode</span>

                <div className="toggle-switch" onClick={handleTheme}>
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <section className="home">
          <div className="text">
            Dashboard Sidebar
            <Outlet />
          </div>
        </section>
      </body>
    </html>
  );
}
