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
            const bgClassName = `bg-${(i % 4) + 1}`;
            return (
              <div className="skill" key={i}>
                <div className="skill--title">
                  <span>{el.name}</span>
                  <span>{el.level}</span>
                </div>
                <div className="skill--bar">
                  <div class={`progress ${bgClassName}`} style={{ width: el.level }}></div>
                </div>
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
  },
  {
    name: "ReactJs",
    level: "85%",
  },
  {
    name: "Next.js",
    level: "80%",
  },
  {
    name: "VBCS",
    level: "60%",
  },
  {
    name: "React Native",
    level: "55%",
  },
  {
    name: "CSS",
    level: "75%",
  },
  {
    name: "Git",
    level: "60%",
  },
  {
    name: "Oracle ADF",
    level: "90%",
  },
  {
    name: "HTML5",
    level: "80%",
  },
  {
    name: "Node.js",
    level: "70%",
  },
  {
    name: "MongoDB",
    level: "40%",
  },
];
