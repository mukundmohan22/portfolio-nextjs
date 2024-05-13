import "./globals.scss";
import Navigation from "@/Components/Navigation/Navigation";
import SideBar from "@/Components/SideBar/SideBar";
import ThemeSwitcher from "@/Components/ThemeSwitcher/ThemeSwitcher";

import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Mukund Mohan | Full-Stack Developer",
  description: "I'm a Bengaluru based Full-Stack Developer. ReactJS NextJS NodeJS Express Java",
};

export default function RootLayout({ children }) {
  const theme = "light-theme";
  return (
    <html lang="en" className={theme} id="theme-switcher">
      <body>
        <ThemeSwitcher />
        <div className="wrapper">
          <SideBar />
          {children}
          <Navigation />
          <ToastContainer
            position="top-right"
            autoClose={800000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            theme="dark"
            pauseOnVisibilityChange
            closeOnClick
            pauseOnHover
          />
        </div>
        <Script src="https://kit.fontawesome.com/e301a7d0fc.js" crossorigin="anonymous" />
      </body>
    </html>
  );
}
