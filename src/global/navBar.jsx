export default function NavBar() {

const scrollto= (elem)=>{
let holdScrolltoDest= document.getElementsByClassName(`${elem}`)
holdScrolltoDest[0].scrollIntoView({behavior: 'smooth', block: 'start'})

}






  return (
    <div className="navBar">
      <p className="logoText">M.Ahsan Ali</p>

      <div className="Navbuttonsholder">
       <ul className="navBtnHold">
        <li className="navB home" onClick={()=>{scrollto('homebox')}}>Home</li>
        <li className="navB Technology" onClick={()=>{scrollto('techholditems')}}>Technology</li>
        <li className="navB Certificates" onClick={()=>{scrollto('Crouselbox')}}>Certificates</li>
        <li className="navB Projects" onClick={()=>{scrollto('projectBox')}}> Projects</li>

        </ul>
      </div>

      <p className="resumeBtn"> Resume </p>
    </div>
  );
}
