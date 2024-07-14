import python from "../images/python.png";
import Js from "../images/Js.png";
import andrd from "../images/android.png";
import html from "../images/html.png";

import cpp from "../images/cpp_logo.png";
import css from "../images/CSS.png";
import lnx from "../images/liunx.png";
import mern from "../images/mern.png";
import tf from "../images/tf.png";
import sql from "../images/1.png";
import netlify from "../images/657.png";
import ch from "../images/ch.png";
import { useState, useEffect } from "react";

const imgsPath = [
  python,
  Js,
  andrd,
  html,
  cpp,
  css,
  lnx,
  mern,
  tf,
  ch,
  sql,
  netlify,
];

export default function Technology() {
  const [imgarr11, setImgarr1] = useState([]);
  const [imgarr22, setImgarr2] = useState([]);
  const [imgarr33, setImgarr3] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const addImagestoarr = () => {
  
      const tempArr1 = [];
      const tempArr2 = [];
      const tempArr3 = [];

     if(windowWidth > 799){
        for (let x = 0; x < imgsPath.length; x++) {
            if (x < 5) {
              tempArr1.push(<img src={imgsPath[x]} className="imgprint" key={x} />);
            } else if (x < 10) {
              tempArr2.push(<img src={imgsPath[x]} className="imgprint" key={x} />);
            } else {
              tempArr3.push(<img src={imgsPath[x]} className="imgprint" key={x} />);
            }
          }
     }
     else{

        for (let x = 0; x < imgsPath.length; x++) {
            if (x < 4) {
              tempArr1.push(<img src={imgsPath[x]} className="imgprint" key={x} />);
            } else if (x < 8) {
              tempArr2.push(<img src={imgsPath[x]} className="imgprint" key={x} />);
            } else {
              tempArr3.push(<img src={imgsPath[x]} className="imgprint" key={x} />);
            }
          }
     }

      setImgarr1(tempArr1);
      setImgarr2(tempArr2);
      setImgarr3(tempArr3);
    };

    addImagestoarr();
  }, []);

  return (
    <div className="techBox">
      <div className="techholditems">
        <p className="techheadText">Technology</p>
        <p className="techsubText">
          I have learned and practiced a myriad of technologies, encompassing
          web, mobile, app, and desktop development. Below are the technologies
          in which I have proficiency:
        </p>
      </div>
      <div className="imgHolder">
        <div className="imgRow row1">{imgarr11}</div>
        <div className="imgRow row2">{imgarr22}</div>
        <div className="imgRow row3">{imgarr33}</div>
      </div>
    </div>
  );
}
