import "./globals.scss";
import Navigation from "@/Components/Navigation/Navigation";
import SideBar from "@/Components/SideBar/SideBar";
import ThemeSwitcher from "@/Components/ThemeSwitcher/ThemeSwitcher";

export const metadata = {
  title: "Mukund Mohan | Full-Stack Developer",
  description: "I'm a Bengaluru based Full-Stack Developer. ReactJS NextJS NodeJS Express Java",
};
import Script from "next/script";

export default function RootLayout({ children }) {
  const theme = "dark-theme";
  return (
    <html lang="en" className={theme} id="theme-switcher">
      <body>
        <ThemeSwitcher />
        <div className="wrapper">
          <SideBar />
          {children}
          <Navigation />
        </div>
        <Script src="https://kit.fontawesome.com/e301a7d0fc.js" crossorigin="anonymous" />
      </body>
    </html>
  );
}
