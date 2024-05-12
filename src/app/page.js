import "./Home.scss";

const WHAT_I_DO = [
  {
    image: "fa-solid fa-swatchbook",
    title: "Ui/Ux Design",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    image: "fa-solid fa-code",
    title: "Web Development",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    image: "fa-regular fa-window-restore",
    title: "App Development",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
];

export default function page() {
  return (
    <div className="container box-shadow home">
      <div className="title">About</div>
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
