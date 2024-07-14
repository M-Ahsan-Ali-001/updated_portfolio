export default function NavBar() {
  return (
    <div className="navBar">
      <p className="logoText">M.Ahsan Ali</p>

      <div className="Navbuttonsholder">
       <ul className="navBtnHold">
        <li className="navB home" onClick={()=>{alert('home clicked')}}>Home</li>
        <li className="navB Technology">Technology</li>
        <li className="navB Certificates">Certificates</li>
        <li className="navB Projects"> Projects</li>

        </ul>
      </div>

      <p className="resumeBtn"> Resume </p>
    </div>
  );
}
