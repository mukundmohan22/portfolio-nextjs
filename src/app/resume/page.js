import "./resume.scss";
export default function page() {
  return (
    <div className="container box-shadow">
      <div className="title">
        <span>Resume - WIP</span>
        <div className="title-border"></div>
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
    title: "Software Engineering Analysr",
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
