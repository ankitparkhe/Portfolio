// import React, { Component } from "react";
// import { Route, Switch, Router } from "react-router-dom";
// import Home from "../pages/home/HomeComponent";
// import Splash from "../pages/splash/Splash";
// import Education from "../pages/EduEx/EducationComponent";
// import Contact from "../pages/contact/ContactComponent";
// import Projects from "../pages/projects/Projects";
// import { settings } from "../portfolio.js";
// import { createBrowserHistory } from "history";

// import ReactGA from "react-ga";
// export const history = createBrowserHistory();
// history.listen((location) => {
//   ReactGA.pageview(location.pathname);
//   console.log(location.pathname);
// });

// export default class Main extends Component {
//   render() {
//     if (settings.isSplash) {
//       return (
//         <div>
//           <Router basename="/" history={history}>
//             <Switch>
//               <Route
//                 path="/"
//                 exact
//                 render={(props) => (
//                   <Splash {...props} theme={this.props.theme} />
//                 )}
//               />
//               <Route
//                 path="/home"
//                 render={(props) => <Home {...props} theme={this.props.theme} />}
//               />
//               <Route
//                 path="/education"
//                 render={(props) => (
//                   <Education {...props} theme={this.props.theme} />
//                 )}
//               />
//               <Route
//                 path="/contact"
//                 render={(props) => (
//                   <Contact {...props} theme={this.props.theme} />
//                 )}
//               />
//               <Route
//                 path="/splash"
//                 render={(props) => (
//                   <Splash {...props} theme={this.props.theme} />
//                 )}
//               />
//               <Route
//                 path="/projects"
//                 render={(props) => (
//                   <Projects {...props} theme={this.props.theme} />
//                 )}
//               />
//             </Switch>
//           </Router>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <Router basename="/">
//             <Switch>
//               <Route
//                 path="/"
//                 exact
//                 render={(props) => <Home {...props} theme={this.props.theme} />}
//               />
//               <Route
//                 path="/home"
//                 render={(props) => <Home {...props} theme={this.props.theme} />}
//               />
//               <Route
//                 path="/education"
//                 render={(props) => (
//                   <Education {...props} theme={this.props.theme} />
//                 )}
//               />
//               <Route
//                 path="/contact"
//                 render={(props) => (
//                   <Contact {...props} theme={this.props.theme} />
//                 )}
//               />
//               <Route
//                 path="/projects"
//                 render={(props) => (
//                   <Projects {...props} theme={this.props.theme} />
//                 )}
//               />
//             </Switch>
//           </Router>
//         </div>
//       );
//     }
//   }
// }
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/EduEx/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio";

export default function Main({ theme }) {
  return (
    <Routes>
      {settings.isSplash && (
        <Route path="/" element={<Splash theme={theme} />} />
      )}
      {!settings.isSplash && (
        <Route path="/" element={<Home theme={theme} />} />
      )}
      <Route path="/home" element={<Home theme={theme} />} />
      <Route path="/education" element={<Education theme={theme} />} />
      <Route path="/contact" element={<Contact theme={theme} />} />
      <Route path="/projects" element={<Projects theme={theme} />} />
      {settings.isSplash && (
        <Route path="/splash" element={<Splash theme={theme} />} />
      )}
    </Routes>
  );
}
