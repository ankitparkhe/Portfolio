// import React, { Component } from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Button from "../../components/button/Button";
// import Badge from "react-bootstrap/Badge";
// import TopButton from "../../components/topButton/TopButton";
// import { Fade } from "react-reveal";
// import { projectsHeader } from "../../portfolio.js";
// import { projectcards } from "../../portfolio";
// import { CardColumns, Card } from "react-bootstrap";
// import "./Projects.css";
// import ProjectsImg from "./ProjectsImg";

// class Projects extends Component {
//   render() {
//     const theme = this.props.theme;
//     return (
//       <div className="projects-main">
//         <Header theme={theme} />
//         <div className="basic-projects">
//           <Fade bottom duration={2000} distance="40px">
//             <div className="projects-heading-div">
//               <div className="projects-heading-img-div">
//                 <ProjectsImg theme={theme} />
//               </div>
//               <div className="projects-heading-text-div">
//                 <h1
//                   className="projects-heading-text"
//                   style={{ color: theme.orange }}
//                 >
//                   {projectsHeader.title}
//                 </h1>
//                 <p
//                   className="projects-header-detail-text subTitle"
//                   style={{ color: theme.text }}
//                 >
//                   {projectsHeader["description"]}
//                 </p>
//               </div>
//             </div>
//           </Fade>
//         </div>
//         <div className="repo-cards-div-main">
//           <CardColumns>
//             {projectcards.list.map((proj) => {
//               return (
//                 <Card className="h-100">
//                   <Card.Img
//                     variant="top"
//                     src={require(`../../assets/projects/${proj.img_path}`)}
//                   />
//                   <Card.Body>
//                     <Card.Title>
//                       <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
//                         {proj.title}
//                         <a
//                           style={{ color: theme.text }}
//                           href={proj.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <i
//                             className={`fas fa-external-link-alt`}
//                             style={{
//                               color: proj.linkcolor,
//                               marginLeft: "10px",
//                             }}
//                           ></i>
//                         </a>
//                         <a
//                           style={{ color: theme.text }}
//                           href={proj.code}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <i
//                             className={`fab fa-github`}
//                             style={{
//                               color: proj.linkcolor,
//                               paddingLeft: "10px",
//                             }}
//                           ></i>
//                         </a>
//                       </h2>
//                     </Card.Title>
//                     <div>
//                       {proj.tags.map((demo2) => {
//                         return (
//                           <Badge
//                             style={{
//                               marginRight: "0.5em",
//                               backgroundColor: demo2.color,
//                             }}
//                           >
//                             {" "}
//                             {demo2.lang}
//                           </Badge>
//                         );
//                       })}
//                     </div>
//                     <div
//                       className="text-center"
//                       style={{ marginTop: "20px" }}
//                     ></div>
//                     <Card.Text>{proj.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               );
//             })}
//           </CardColumns>
//         </div>
//         <Button
//           text={"More Projects"}
//           className="project-button"
//           href="https://github.com/rohankokkula"
//           newTab={true}
//           theme={theme}
//         />
//         <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
//         <TopButton theme={this.props.theme} />
//       </div>
//     );
//   }
// }

// export default Projects;
import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import Badge from "react-bootstrap/Badge";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import { projectcards } from "../../portfolio";
import { Card } from "react-bootstrap";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <style>
          {`
            .repo-cards-div-main {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
              gap: 1rem;
              margin: 40px;
            }

            .card {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
              background-color: black;
              color: white;
            }

            .card:hover {
              transform: translateY(-5px);
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
              transition: all 0.3s ease;
            }

            .card img {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-top-left-radius: 0.25rem;
              border-top-right-radius: 0.25rem;
            }

            .card-body {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              flex-grow: 1;
              padding: 1.25rem;
            }

            .card-title {
              font-size: 1.3rem;
              font-weight: bold;
              margin-bottom: 10px;
            }

            .card-text {
              text-align: justify;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 0.95rem;
              color: #ccc;
            }

            .button-links-div {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
              margin-top: 15px;
            }
          `}
        </style>

        <div className="projects-main">
          <Header theme={theme} />
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-heading-div">
                <div className="projects-heading-img-div">
                  <ProjectsImg theme={theme} />
                </div>
                <div className="projects-heading-text-div">
                  <h1
                    className="projects-heading-text"
                    style={{ color: theme.orange }}
                  >
                    {projectsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.text }}
                  >
                    {projectsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="repo-cards-div-main">
            {projectcards.list.map((proj, index) => {
              return (
                <Card className="h-100" key={index}>
                  <Card.Img
                    variant="top"
                    src={require(`../../assets/projects/${proj.img_path}`)}
                    alt={proj.title}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                        {proj.title}
                        {proj.link && (
                          <a
                            style={{ color: theme.text }}
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fas fa-external-link-alt"
                              style={{
                                color: proj.linkcolor,
                                marginLeft: "10px",
                              }}
                            ></i>
                          </a>
                        )}
                        {proj.code && (
                          <a
                            style={{ color: theme.text }}
                            href={proj.code}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fab fa-github"
                              style={{
                                color: proj.linkcolor,
                                paddingLeft: "10px",
                              }}
                            ></i>
                          </a>
                        )}
                      </h2>
                    </Card.Title>
                    <div>
                      {proj.tags.map((demo2, index2) => (
                        <Badge
                          key={index2}
                          style={{
                            marginRight: "0.5em",
                            backgroundColor: demo2.color,
                          }}
                        >
                          {demo2.lang}
                        </Badge>
                      ))}
                    </div>
                    <div
                      className="text-center"
                      style={{ marginTop: "20px" }}
                    ></div>
                    <Card.Text>{proj.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href="https://github.com/ankitparkhe"
            newTab={true}
            theme={theme}
          />
          <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
          <TopButton theme={this.props.theme} />
        </div>
      </>
    );
  }
}

export default Projects;
