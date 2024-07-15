
import github from "../images/github.png"

import linked from "../images/link.png"

import gmail from "../images/mail.png"
export default function Footer(){

    return(
<div className="footer-scetion">
    <hr></hr>

    <div className="logo-footer">
         <img src={github}  className="logoF"/>
         <img src={linked}  className="logoF" />
         <img src={gmail}  className="logoFL" />
         
            </div>

   @Copy Right Muhammad Ahsan Ali
</div>

    )

}