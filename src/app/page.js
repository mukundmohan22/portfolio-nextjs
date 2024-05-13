import "./Home.scss";

const WHAT_I_DO = [
  {
    image: "fa-solid fa-swatchbook",
    title: "Front-end Development",
    description:
      "Creating the user interface and experience of a website or web application. Expertise in front-end development includes proficiency in HTML, CSS, and JavaScript, as well as frameworks and libraries like React.js",
  },
  {
    image: "fa-solid fa-code",
    title: "Back-end Development",
    description:
      "Working with servers, databases, and applications that handle the logic and processing of data on the server side. With expertise in back-end programming language like JavaScript (Node.js), Java and also be familiar with databases like MySQL, OracleDB, MongoDB, or NoSQL databases.",
  },
  {
    image: "fa-regular fa-window-restore",
    title: "Web App Development",
    description:
      "Building the front-end using HTML, CSS, and JavaScript, and integrating it with back-end technologies to create dynamic and interactive web experiences. I also work with web frameworks and tools like Express.js,  for building web applications.",
  },
  {
    image: "fa-solid fa-gears",
    title: "DevOps and Deployment",
    description:
      "Understand the deployment process and be familiar with DevOps practices.This includes knowledge of version control systems like Git, CI/CD pipelines, containerization (e.g., Docker), and cloud services (e.g., AWS, Oracle Cloud)",
  },
];

export default function page() {
  return (
    <div className="container box-shadow home">
      <div className="title">
        <span> About</span>
        <div className="title-border"></div>
      </div>
      <div className="description">
        <p>
          My name is Mukund, I'm a Full Stack Developer. Currently I'm working at Oracle as Principal Consultant with
          over a decade of expertise in the IT industry.
        </p>
        <p>Specializing in Next.js, ReactJS, Node.js, VBCS, Html/CSS, Oracle ADF & Core Java</p>
      </div>
      <div className="sub-title">What I Do!</div>

      <div className="content">
        {WHAT_I_DO.map((el, i) => {
          return (
            <div className="hCard" key={i}>
              <div className="hCard--img">
                <i className={el.image}></i>
              </div>
              <div className="hCard--content">
                <div className="hCard--content-title">{el.title}</div>
                <div className="hCard--content-description">{el.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
