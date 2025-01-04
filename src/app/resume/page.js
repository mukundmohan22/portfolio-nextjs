import Image from "next/image";
import "./resume.scss";
export default function page() {
  return (
    <div className="container box-shadow">
      <div className="title">
        <span>Resume</span>
        <div className="title-border"></div>
      </div>
      <div>
        <div className="sub-title">Working Skills</div>
        <div className="skills">
          {SKILLS.map((el, i) => {
            // const bgClassName = `bg-${(i % 4) + 1}`;
            return (
              <div className="skill" key={i}>
                <div className="skill--icon">
                  <Image src={el.url} alt={el.name} className={"image"} height={40} width={40} />
                </div>
                <div className="skill--title">{el.name}</div>
              </div>
            );
          })}
        </div>

        {/* <div className="knowledge">
          <span className="sub-title">Working Skills</span>
          <div className="knowledge--tags"></div>
        </div> */}
      </div>
      <div>
        <div className="sub-title">
          <i class="fa-solid fa-briefcase"></i>
          Exprience
        </div>
        <div className="resume-card-container">
          {WORK.map((el, i) => {
            return (
              <div className="resume-card" key={i}>
                <div className="resume-card--year">{el.years}</div>
                <div className="resume-card--title">{el.title}</div>
                <div className="resume-card--description">{el.company}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="sub-title">
          <i class="fa-solid fa-graduation-cap"></i>
          Education
        </div>
        <div className="resume-card-container">
          {EDUCATION.map((el, i) => {
            return (
              <div className="resume-card" key={i}>
                <div className="resume-card--year">{el.graduated}</div>
                <div className="resume-card--title">{el.school}</div>
                <div className="resume-card--description">{el.degree}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="description"></div>
    </div>
  );
}

const WORK = [
  {
    company: "Oracle",
    title: "Principal Consultant",
    years: "May 2016 - Present",
  },
  {
    company: "Accenture",
    title: "Software Engineering Analyst",
    years: "Feb 2013 - May 2016",
  },
];

const EDUCATION = [
  {
    school: "Visvesvaraya Technological University",
    degree: "Bachelor's degree in Electrical and Electronics Engineering",
    graduated: "July 2012",
  },
];

const SKILLS = [
  {
    name: "JavaScript",
    level: "80%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJs",
    level: "85%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Next.js",
    level: "80%",
    url: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    name: "VBCS",
    level: "60%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
  },
  {
    name: "React Native",
    level: "55%",
    url: "https://reactnative.dev/img/header_logo.svg",
  },
  {
    name: "Java",
    level: "75%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "CSS3",
    level: "75%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "Git",
    level: "60%",
    url: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "Oracle ADF",
    level: "90%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
  },
  {
    name: "HTML5",
    level: "80%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "Node.js",
    level: "70%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "MongoDB",
    level: "40%",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
];
