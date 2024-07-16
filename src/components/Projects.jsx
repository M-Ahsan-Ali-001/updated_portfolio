import React, { useState, useEffect } from "react";
import at from "../images/projects/autism.png";
import atMobile from "../images/projects/autism mobile app.png";
import ecomm from "../images/projects/e-comm.jpg";
import filterapp from "../images/projects/filterapp.png";
import GCP from "../images/projects/GCPAPI.png";
import lawand from "../images/projects/lawand order.jpg";
import noteit from "../images/projects/noteit.png";
// import portfolio from "../images/projects/por";
import stock from "../images/projects/stockexchangeapp.png";
import text from "../images/projects/texteditor.png";
import yolov from "../images/projects/yolovkotlinapp.png";

const imagesPath = [
  at,
  atMobile,
  ecomm,
  filterapp,
  GCP,
  lawand,
  noteit,
  stock,
  text,
  yolov,
];

export default function ProjectSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const nextImage = () => {
    setAnimationClass("fade-in");
    setImageIndex((prevIndex) => (prevIndex + 1) % imagesPath.length);
  };

  const prevImage = () => {
    setAnimationClass("fade-in");
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + imagesPath.length) % imagesPath.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass("");
    }, 500); // Duration of the animation

    return () => clearTimeout(timer);
  }, [imageIndex]);

  return (
    <div className="projectBox">
      <p className="techheadText">Projects</p>
      <div className="projectitemshold">
        <img
          src={imagesPath[imageIndex]}
          className={`imageProj ${animationClass}`}
        />
        <div className={`projectText ${animationClass}`}>
          <h1>{projectData[imageIndex]["Heading"]}</h1>
          <p>{projectData[imageIndex]["Description"]}</p>
        </div>
      </div>
      <div className="buttonProject">
        <button className="leftProj" onClick={prevImage}>
          Previous
        </button>
        <button className="rightProj" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
}

const projectData = {
  0: {
    Heading: "ASD Admin-Panel",
    Description: `
The admin panel is built using the MERN stack and Netlify 
serverless functions. It fetches data from MongoDB's API and displays
 demographics and test results. React handles the front-end interface,
  while serverless functions manage backend logic. This setup ensures 
  efficient and scalable data processing and presentation.
    `,
  },

  1: {
    Heading: "ASD Mobile App",
    Description: `
The ASD mobile app includes built-in questionnaires and 
represents results through graphs. It features an integrated AI model 
for advanced analysis and insights. This combination ensures a 
comprehensive user experience, from data collection to visual representation 
and intelligent interpretation.
    `,
  },

  2: {
    Heading: "E-Commerce Mobile App",
    Description: `
The E-Commerce mobile app features separate logins 
for users and sellers. Users can browse and purchase items, 
while sellers can add and delete items. The app is developed 
using Flutter for the front-end and PHP REST API for the back-end. 
This setup ensures a smooth and efficient user experience for both buyers 
and sellers.
    `,
  },

  3: {
    Heading: "StreamLit Filter App",
    Description: `
The StreamLit Filter App applies various filters to
 images and was developed for a client. It utilizes Python, 
 Streamlit, and OpenCV to process and display the filtered images. 
 This combination 
allows for an interactive and efficient user experience in image filtering.
    `,
  },

  4: {
    Heading: "Google Cloud PlatForm API",
    Description: `
For a foreign client project, integrated various Google 
Cloud Platform (GCP) APIs into a C# desktop application. 
This involved leveraging GCP's extensive suite of services 
to enhance the functionality and performance of the desktop app. 
The integration ensured seamless interaction between the application
 and cloud services, providing robust and scalable solutions.
    `,
  },

  
  5: {
    Heading: "Devcon project",
    Description: `
For a Devcon project, I had developed
 a law and order mobile app using Flutter, 
 designed to hire lawyers through the app. 
 This innovative solution won first prize in
  the competition, showcasing its effectiveness and user-friendly design.
    `,
  },

  
  6: {
    Heading: "Note It!",
    Description: `
 A note-taking app named "Note It!" developed using the MERN stack. 
 It allows users to perform CRUD operations on their notes,
  enabling efficient management and organization of information.
    `,
  },
  7: {
    Heading: "Stock Exchange Website",
    Description: `
The stock exchange website was developed 
and deployed using the MERN stack. It integrates freely 
available APIs to deliver real-time stock exchange data,
 offering users immediate access to market information and trends. 
 This setup ensures a responsive and informative platform for users
  interested in monitoring and analyzing stock market data efficiently
    `,
  },

  8: {
    Heading: "Text-Editor using DSA",
    Description: `
The stock exchange website was developed 
and deployed using the MERN stack. It integrates freely 
available APIs to deliver real-time stock exchange data,
 offering users immediate access to market information and trends. 
 This setup ensures a responsive and informative platform for users
  interested in monitoring and analyzing stock market data efficiently
    `,
  },

  9: {
    Heading: "Scratch Detector App",
    Description: `
The Scratch Detector App involves training a 
YOLOv5 model for scratch detection. The model was 
integrated into a Kotlin-based application, leveraging 
Python for model training and backend functionality. 
This setup ensures accurate detection of scratches in 
real-world scenarios, enhancing usability and reliability of 
the application.
    `,
  },



};
