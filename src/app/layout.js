import SideBar from "@/Components/SideBar/SideBar";
import "./globals.scss";
import Navigation from "@/Components/Navigation/Navigation";

export const metadata = {
  title: "Mukund Mohan | Full-Stack Developer",
  description: "I'm a Bengaluru based Full-Stack Developer. ReactJS NextJS NodeJS Express Java",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <SideBar />
          <main>{children}</main>
          <Navigation />
        </div>
      </body>
    </html>
  );
}
