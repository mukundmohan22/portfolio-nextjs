import Image from "next/image";
import "./works.scss";
import Link from "next/link";
export default function page() {
  return (
    <div className="container box-shadow">
      <div className="title">
        <span>Works</span>
        <div className="title-border"></div>
      </div>
      <div className="description">
        <div className="projects">
          {PROJECTS.map((el, i) => {
            return (
              <Link className="project" key={i} href={el.url}>
                <div className="project--icon">
                  <div className="image-container">
                    <Image src={el.image} alt={el.title} fill className={"image"} />
                  </div>
                </div>
                <div className="project--main">
                  <div className="project--main--title">{el.title}</div>
                  <div className="project--main--desc">{el.category}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: "Zigyan Online learning portal",
    category: "Zigyan is Online learning portal frontend on React with spring boot as backend",
    image: "/images/projects/zigyan.jpeg",
    url: "https://www.zigyan.com/",
  },
  {
    title: "Servitus Law Office Portal",
    category: "Online portal for servitus law office",
    image: "/images/projects/servitus.jpeg",
    url: "https://servituslawoffice.com/",
  },
  {
    title: "Music Player - Neumorphism layour",
    category: "Music Player build using react JS",
    image: "/images/projects/music.jpeg",
    url: "https://react-music-player-neumorphism.netlify.app/",
  },

  {
    title: "Amazon Clone",
    category:
      "Amazon Clone created with React JS with User Authentication using Firebase. React Context API for State Management",
    image: "/images/projects/amazon.jpeg",
    url: "https://clone-69870.web.app/",
  },
  {
    title: "Chart JS with React",
    category: "Chart JS implementation with ReactJS",
    image: "/images/projects/charts.jpeg",
    url: "https://chartjs-react-demo.netlify.app/",
  },
];
