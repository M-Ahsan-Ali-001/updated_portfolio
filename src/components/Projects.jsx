import at from "../images/projects/stockexchangeapp.png";
export default function ProjectSection() {
  return (
    <div className="projectBox">
        <p className="techheadText">Projects</p>
      <div className="projectitemshold">
        {/* <div className="project-image"></div> */}

        <img src={at} className="imageProj" />
        <div className="projectText">
          <h1> ASD Admin-panel</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="buttonProject">
        <button className="leftProj">Previous</button>
        <button className="rightProj">Next</button>




      </div>
    </div>
  );
}
