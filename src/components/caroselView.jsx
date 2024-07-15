import rect from "../images/Certficates/react.png";
import js from "../images/Certficates/js.png";
import mobile from "../images/Certficates/intro to mobile dev.png";
import version from "../images/Certficates/version.png";
import Tekno from "../images/Certficates/teknofest.jpg";

import cviso from "../images/Certficates/cv.png";
import google from "../images/Certficates/react.png";
import idware from "../images/Certficates/IMG_4357.JPG";
import aisummit from "../images/Certficates/IMG_4356.JPG";
import istopen from "../images/Certficates/IMG_4355.JPG";

const imgpaths = [
  rect,
  js,
  mobile,
  version,
  Tekno,
  cviso,
  google,
  idware,
  aisummit,
  istopen,
];

export default function CaroselView({ imageNumber, text, classN, classN2 }) {
  return (
    <div id={`${classN2}`} className={`carosel-view ${classN}`}>
      <img src={imgpaths[imageNumber]} alt="" className={`caroselimg`} />
      <p className="carsoelText">{text}</p>
    </div>
  );
}
