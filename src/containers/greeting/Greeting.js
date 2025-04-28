// import React from "react";
// import "./Greeting.css";
// import Button from "../../components/button/Button";
// import { greeting } from "../../portfolio";
// import { Fade } from "react-reveal";
// import BannerImg from "./BannerImg";
// import Typewriter from "typewriter-effect";
// import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
// import { competitiveSites } from "../../portfolio";

// export default function Greeting(props) {
//   const theme = props.theme;
//   return (
//     <Fade bottom duration={2000} distance="40px">
//       <div className="greet-main" id="greeting">
//         <div className="greeting-main">
//           <div className="greeting-text-div">
//             <div>
//               <h1 className="greeting-text" style={{ color: theme.orange }}>
//                 {greeting.title}
//               </h1>
//               <h1 className="greeting-sub" style={{ color: theme.grayText }}>
//                 I'm <mark data-entity="person">{greeting.sub}</mark>
//               </h1>

//               {/* 🔁 Animated Typewriter */}
//               <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
//                 <Typewriter
//                   onInit={(typewriter) => {
//                     typewriter
//                       .typeString("Data Analyst")
//                       .pauseFor(200)
//                       .deleteAll()
//                       .typeString("Power BI Developer")
//                       .pauseFor(200)
//                       .deleteAll()
//                       .typeString("Tableau Expert")
//                       .pauseFor(200)
//                       .deleteAll()
//                       .typeString("ML Enthusiast")
//                       .pauseFor(200)
//                       .start();
//                   }}
//                   options={{
//                     autoStart: true,
//                     loop: true,
//                   }}
//                 />
//               </h1>

//               {/* 👤 About/Intro line */}
//               <span
//                 className="greeting-text-span subTitle"
//                 style={{ color: theme.text }}
//               >
//                 <div className="entities">
//                   A <mark data-entity="noun">Data Analyst</mark> passionate about transforming complex data into meaningful insights using{" "}
//                   <mark data-entity="skill">Power BI</mark>,{" "}
//                   <mark data-entity="skill">Tableau</mark>, and{" "}
//                   <mark data-entity="skill">Python</mark>.
//                 </div>
//               </span>

//               {/* 🌐 Social/competitive sites */}
//               <CompetitiveSites logos={competitiveSites.competitiveSites} />

//               {/* 🔘 Buttons */}
//               <div className="button-greeting-div">
//                 <Button text="Contact me" href="/contact" />
//                 {/* <Button
//                   text="See my resume"
//                   newTab={true}
//                   href={greeting.resumeLink}
//                 /> */}
//               </div>
//             </div>
//           </div>

//           {/* 📷 Banner image */}
//           <div className="greeting-image-div">
//             <BannerImg />
//           </div>
//         </div>
//       </div>
//     </Fade>
//   );
// }
import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm {greeting.sub}
              </h1>

              {/* 🔁 Animated Typewriter */}
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Data Analyst")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Power BI Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Tableau Expert")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("ML Enthusiast")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              {/* 👤 About/Intro line */}
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A Data Analyst passionate about transforming complex data into
                  meaningful insights using Power BI, Tableau, and Python.
                </div>
              </span>

              {/* 🌐 Social/competitive sites */}
              <CompetitiveSites logos={competitiveSites.competitiveSites} />

              {/* 🔘 Buttons */}
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                {/* <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                /> */}
              </div>
            </div>
          </div>

          {/* 📷 Banner image */}
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
