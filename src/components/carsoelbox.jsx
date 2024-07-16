import { useEffect, useState } from "react";
import CaroselView from "./caroselView";
import arrow from "../images/arrow.png";
export default function CaroselBox() {
  const [currentSate, setCurrentState] = useState(1);
  const [holdvar, setvar] = useState([3, 2, 1]);
  const [holdSeqall, setholdSeqall] = useState([[3, 2, 1]]);
  const [holdvar1, setvar2] = useState([3, 2, 1]);
  const [buttonDisable, setbuttonDisable] = useState(false);

  let holdallSSEq = [];
  const previous = () => {
    if (buttonDisable === false ) {
      let vardviewSeq = holdvar;
      setbuttonDisable(true);

      let holdidx = "";
      const carosel = document.querySelectorAll(".carosel-view");
      const findIndex = () => {
        holdSeqall.forEach((val, idx) => {
          console.log(holdvar + "--" + val);
          if (
            holdvar.length === val.length &&
            holdvar.every((v, i) => v === val[i])
          ) {
            holdidx = idx;
          }
        });
      };

    

      findIndex();
      if ((holdidx != 0) & (holdidx != carosel.length - 1)& holdvar[2]!=0) {

        const a2 = document.getElementById(`m${vardviewSeq[1]}`);

        const a3 = document.getElementById(`m${vardviewSeq[0]}`);
        const a4 = document.getElementById(`m${vardviewSeq[2]}`);
        a2.classList.remove("box-move-real-left-main");

        a2.classList.remove("box-move-real-left-left");
        a2.classList.remove(".box-move-main-right");
        a2.classList.remove("box-move-left-to-main");
        a2.classList.remove("c1");

        a2.classList.remove("c2");
        a2.classList.remove("c3");
        a2.classList.add("c2");
        a2.classList.remove("reallleftcreate");
        a2.classList.remove("check");
        a2.classList.add("c2");

        a2.classList.add("box-move-main-right");

        a3.classList.remove("box-move-real-left-main");

        a3.classList.remove("box-move-real-left-left");
        a3.classList.remove("box-move-main-right");
        a3.classList.remove("box-move-left-to-main");
        a3.classList.remove("c1");

        a3.classList.remove("c2");
        a3.classList.remove("c3");
       // a3.classList.add("c2");
        a3.classList.remove("reallleftcreate");
        a3.classList.remove("check");
       // a3.classList.add("c3");
        a3.classList.add("box-move-left-to-main");
        a4.classList.add("check");

        setTimeout(() => {
          a2.classList.remove("box-move-main-right");
          a2.classList.remove("c2");
          a2.classList.add("c1");
          a3.classList.remove("box-move-left-to-main");
          a3.classList.remove("c3");
          a3.classList.add("c2");
          const idxnew = holdSeqall[holdidx - 1][0];
          const hold = document.getElementById(`m${idxnew}`);
          hold.classList.remove("removecard");
          hold.classList.remove("box-move-real-left-main");

          hold.classList.remove("box-move-real-left-left");
          hold.classList.remove("box-move-main-right");
          hold.classList.remove("box-move-left-to-main");
          hold.classList.remove("c1");

          hold.classList.remove("c2");
          hold.classList.remove("c3");
          hold.classList.remove("reallleftcreate");
          hold.classList.remove("check");
          hold.classList.add("c3");
          let it3 = [idxnew, holdvar[0], holdvar[1]];
          setvar(it3);
          setbuttonDisable(false);
        }, 1800);
      }

      if (holdidx == 0 ) {
        const a2 = document.getElementById(`m${vardviewSeq[1]}`);

        const a3 = document.getElementById(`m${vardviewSeq[0]}`);
        a2.classList.remove("box-move-real-left-main");

        a2.classList.remove("box-move-real-left-left");
        a2.classList.remove("box-move-main-right");
        a2.classList.remove("box-move-left-to-main");
        a2.classList.remove("box-move-main-right");
        a2.classList.remove("box-move-left-to-main");

        a2.classList.remove("c1");

        a2.classList.remove("c2");
        a2.classList.remove("c3");
        a2.classList.add("c2");
        a2.classList.remove("reallleftcreate");
        a2.classList.remove("check");
        a2.classList.add("c2");

        a2.classList.add("box-move-main-right");

        a3.classList.remove("box-move-real-left-main");

        a3.classList.remove("box-move-real-left-left");
        a3.classList.remove("box-move-main-right");
        a3.classList.remove("box-move-left-to-main");
        a3.classList.remove("box-move-main-right");
        a3.classList.remove("box-move-left-to-main");
        a3.classList.remove("c1");

        a3.classList.remove("c2");
        a3.classList.remove("c3");
        a3.classList.add("c2");
        a3.classList.remove("reallleftcreate");
        a3.classList.remove("check");
        a3.classList.add("c3");

        a3.classList.add("box-move-left-to-main");
        setTimeout(() => {
          a2.classList.remove("box-move-main-right");
          a2.classList.remove("c2");
          a2.classList.add("c1");

          a3.classList.add("c2");
          let it3 = [0, holdvar[0], holdvar[1]];
          setvar(it3);
          setbuttonDisable(false);

        }, 1800);
      }

      if(holdvar[2]===0){
 
      const a2 = document.getElementById(`m${vardviewSeq[1]}`);

        const a3 = document.getElementById(`m${vardviewSeq[0]}`);
        a2.classList.remove("box-move-real-left-main");

        a2.classList.remove("box-move-real-left-left");
        a2.classList.remove("box-move-main-right");
        a2.classList.remove("box-move-left-to-main");
        a2.classList.remove("box-move-main-right");
        a2.classList.remove("box-move-left-to-main");

        a2.classList.remove("c1");

        a2.classList.remove("c2");
        a2.classList.remove("c3");
       // a2.classList.add("c2");
        a2.classList.remove("reallleftcreate");
        a2.classList.remove("check");
        //a2.classList.add("c2");

        a2.classList.add("box-move-main-right");

        a3.classList.remove("box-move-real-left-main");

        a3.classList.remove("box-move-real-left-left");
        a3.classList.remove("box-move-main-right");
        a3.classList.remove("box-move-left-to-main");
        a3.classList.remove("box-move-main-right");
        a3.classList.remove("box-move-left-to-main");
        a3.classList.remove("c1");

        a3.classList.remove("c2");
        a3.classList.remove("c3");
        //a3.classList.add("c2");
        a3.classList.remove("reallleftcreate");
        a3.classList.remove("check");
        a3.classList.add("c3");

        a3.classList.add("box-move-left-to-main");
        setTimeout(() => {
          a2.classList.remove("box-move-main-right");
          a2.classList.remove("c2");
          a2.classList.add("c1");
          a2.classList.remove("box-move-left-to-main");
          a2.classList.remove("box-move-real-left-main");
          a3.classList.remove("box-move-left-to-main");
          
          a3.classList.remove("c3");
          a3.classList.add("c2");
          const idxnew = holdSeqall[holdSeqall.length - 1][0];
          const hold = document.getElementById(`m${idxnew}`);
          hold.classList.remove("removecard");
          hold.classList.remove("box-move-real-left-main");

          hold.classList.remove("box-move-real-left-left");
          hold.classList.remove("box-move-main-right");
          hold.classList.remove("box-move-left-to-main");
          hold.classList.remove("c1");

          hold.classList.remove("c2");
          hold.classList.remove("c3");
          hold.classList.remove("reallleftcreate");
          hold.classList.remove("check");
          hold.classList.add("c3");
          let it3 = [idxnew, holdvar[0], holdvar[1]];
          //alert(it3)
          setvar(it3);
          setbuttonDisable(false);
        }, 1800);

      }
    }
  };

  const next = () => {
    if (buttonDisable === false ) {
      setbuttonDisable(true);
      const carosel = document.querySelectorAll(".carosel-view");
      let vardviewSeq = holdvar;

   

      if (Math.max(...vardviewSeq) < carosel.length && holdvar[0] !==0) {
        console.log(vardviewSeq);

        const a2 = document.getElementById(`m${vardviewSeq[1]}`);
        const a3 = document.getElementById(`m${vardviewSeq[2]}`);
        const a4 = document.getElementById(`m${vardviewSeq[0]}`);

        a2.classList.remove("box-move-real-left-main");

        a2.classList.remove("box-move-real-left-left");

        a2.classList.remove("c1");

        a2.classList.remove("c2");
        a2.classList.remove("c3");
        a2.classList.add("c2");
        a2.classList.remove("reallleftcreate");
        a2.classList.remove("check");
        a2.classList.remove("box-move-main-right");
        a2.classList.remove("box-move-left-to-main");

        a3.classList.remove("box-move-real-left-main");

        a3.classList.remove("box-move-real-left-left");

        a3.classList.remove("check");
        a3.classList.remove("c1");
        a3.classList.remove("box-move-main-right");
        a3.classList.remove("box-move-left-to-main");

        a3.classList.remove("c2");
        a3.classList.remove("c3");
        a3.classList.add("c1");

        a2.classList.add("box-move-real-left-main");
        a3.classList.add("box-move-real-left-left");
        a4.classList.add("check");

        setTimeout(() => {
          if (Math.max(...vardviewSeq) < carosel.length) {
            const hold = document.getElementById(
              `m${Math.max(...vardviewSeq) + 1}`
            );
            hold.classList.remove("removecard");
            hold.classList.remove("box-move-main-right");
            hold.classList.remove("box-move-left-to-main");
            hold.classList.remove("check");
            hold.classList.remove("box-move-main-right");
            hold.classList.remove("box-move-left-to-main");
            hold.classList.remove("box-move-real-left-main");

            hold.classList.remove("box-move-real-left-left");
            hold.classList.add("c1");

            let o = vardviewSeq[2];
            vardviewSeq[2] = Math.max(...vardviewSeq) + 1;
            let p = vardviewSeq[1];
            vardviewSeq[1] = o;
            vardviewSeq[0] = p;

            setvar(vardviewSeq);

            setbuttonDisable(false);
          }
        }, 1800);
      }
      //----------here -------------
      if (Math.max(...vardviewSeq) == carosel.length && holdvar[2] !== 0)   {
        console.log(vardviewSeq);


        if (vardviewSeq[2] != 0) {
          const a2 = document.getElementById(`m${vardviewSeq[1]}`);
          const a3 = document.getElementById(`m${vardviewSeq[2]}`);

          const a4 = document.getElementById(`m${vardviewSeq[0]}`);

          a2.classList.remove("removecard");
          a2.classList.remove("check");
          a2.classList.remove("c2");
          a2.classList.remove("c1");
          a2.classList.remove("c3");
          a2.classList.remove("reallleftcreate");
          a2.classList.remove("box-move-real-left-left");
          a2.classList.add("c2");

          a3.classList.remove("removecard");
          a3.classList.remove("check");
          a3.classList.remove("c2");
          a3.classList.remove("c1");
          a3.classList.remove("c3");
          a3.classList.remove("reallleftcreate");
          a3.classList.remove("box-move-real-left-left");
          a3.classList.add("c1");
          a3.classList.add("box-move-real-left-left");
          a2.classList.add("box-move-real-left-main");
          a4.classList.add("check");

          setvar( [holdvar[1], holdvar[2], 0])
         // alert([holdvar[1], holdvar[2], 0])

          setbuttonDisable(false);
        }
      }

      if(holdvar[0]==0){
      

        const a2 = document.getElementById(`m${vardviewSeq[1]}`);
        const a3 = document.getElementById(`m${vardviewSeq[2]}`);
      

        a2.classList.remove("box-move-real-left-main");

        a2.classList.remove("box-move-real-left-left");

        a2.classList.remove("c1");

        a2.classList.remove("c2");
        a2.classList.remove("c3");
        a2.classList.add("c2");
        a2.classList.remove("reallleftcreate");
        a2.classList.remove("check");
        a2.classList.remove("box-move-main-right");
        a2.classList.remove("box-move-left-to-main");

        a3.classList.remove("box-move-real-left-main");

        a3.classList.remove("box-move-real-left-left");

        a3.classList.remove("check");
        a3.classList.remove("c1");
        a3.classList.remove("box-move-main-right");
        a3.classList.remove("box-move-left-to-main");

        a3.classList.remove("c2");
        a3.classList.remove("c3");
        a3.classList.add("c1");

        a2.classList.add("box-move-real-left-main");
        a3.classList.add("box-move-real-left-left");

        setTimeout(() => {
          a2.classList.remove("box-move-main-right");
          a2.classList.remove("c2");
          a2.classList.add("c3");
          a2.classList.remove("box-move-left-to-main");
          a2.classList.remove("c3");

          a3.classList.add("c2");
          const idxnew = 1;
          const hold = document.getElementById(`m${idxnew}`);
          hold.classList.remove("removecard");
          hold.classList.remove("box-move-real-left-main");

          hold.classList.remove("box-move-real-left-left");
          hold.classList.remove("box-move-main-right");
          hold.classList.remove("box-move-left-to-main");
          hold.classList.remove("c1");

          hold.classList.remove("c2");
          hold.classList.remove("c3");
          hold.classList.remove("reallleftcreate");
          hold.classList.remove("check");
          hold.classList.add("c1");
          let it3 = [ holdvar[1], holdvar[2],idxnew];
   
          setvar(it3);
          setbuttonDisable(false);
        }, 1800);


      }

      if (holdSeqall.length == 1) {
        let n = carosel.length - 2;
        holdallSSEq.push([3, 2, 1]);

        for (let l = 1; l < n; l++) {
          let vardviewSeq1 = holdvar1;
          let r = vardviewSeq1[1];
          let q = vardviewSeq1[2];
          let maxval = Math.max(...vardviewSeq1) + 1;
          vardviewSeq1[1] = q;
          vardviewSeq1[0] = r;
          vardviewSeq1[2] = maxval;

          console.log("test" + vardviewSeq1);
          holdallSSEq.push([vardviewSeq1[0], vardviewSeq1[1], vardviewSeq1[2]]);
          setvar2(vardviewSeq1);

          setbuttonDisable(false);
        }
        setholdSeqall(holdallSSEq);

        console.log(holdallSSEq);
        console.log(holdSeqall);
      }

      

    }
  };
  return (
    <div className="Crouselbox">
      <div className="Crouselbox__item">
        <p className="techheadText">Certifications</p>
        <div className="allCarsoel">
          {/* <CaroselView imageNumber={0} text={"Completed Meta's React Basics course on Coursera."}/> */}
          <CaroselView
            imageNumber={1}
            text={"Completed Meta's Programming with Js course on Coursera."}
            classN={"c1"}
            classN2={"m1"}
          />
          <CaroselView
            imageNumber={2}
            text={
              "Completed Meta's Intro to Mobile App Development course on Coursera."
            }
            classN={"c2"}
            classN2={"m2"}
          />
          <CaroselView
            imageNumber={3}
            text={"Completed Meta'sversion Controlling course on Coursera."}
            classN={"c3"}
            classN2={"m3"}
          />
          <CaroselView
            imageNumber={4}
            text={"participated in Teknofest an International Event."}
            classN2={"m4"}
            classN={"removecard"}
          />
          <CaroselView
            imageNumber={5}
            text={"ational Event."}
            classN2={"m5"}
            classN={"removecard"}
          />
          <CaroselView
            imageNumber={6}
            text={"Event."}
            classN2={"m6"}
            classN={"removecard"}
          />

          <div className="leftBtn" onClick={previous}>
            <img src={arrow}   className="ImageBtnCRs"/>
          </div>

          <div className="righttBtn" onClick={next}>
            <img src={arrow}  className="ImageBtnCRs"/>
          </div>
        </div>
      </div>
    </div>
  );
}
