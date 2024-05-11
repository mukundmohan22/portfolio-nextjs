import "./globals.scss";
import Navigation from "@/Components/Navigation/Navigation";
import SideBar from "@/Components/SideBar/SideBar";

export const metadata = {
  title: "Mukund Mohan | Full-Stack Developer",
  description: "I'm a Bengaluru based Full-Stack Developer. ReactJS NextJS NodeJS Express Java",
};
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
