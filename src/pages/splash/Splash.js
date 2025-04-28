// import React, { Component } from "react";
// import "./Splash.css";
// import { Redirect } from "react-router-dom";
// import LoaderLogo from "../../components/Loader/LoaderLogo.js";

// function AnimatedSplash(props) {
//   return (
//     <div className="logo_wrapper">
//       <div className="screen" style={{ backgroundColor: props.theme.body }}>
//         <LoaderLogo id="logo" theme={props.theme} />
//       </div>
//     </div>
//   );
// }

// class Splash extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       redirect: false,
//     };
//   }

//   componentDidMount() {
//     this.id = setTimeout(() => this.setState({ redirect: true }),1000);
//   }

//   componentWillMount() {
//     clearTimeout(this.id);
//   }

//   render() {
//     return this.state.redirect ? (
//       <Redirect to="/home" />
//     ) : (
//       <AnimatedSplash theme={this.props.theme} />
//     );
//   }
// }

// export default Splash;

// import React, { Component } from "react";
// import "./Splash.css";
// import { Redirect } from "react-router-dom";

// function AnimatedSplash(props) {
//   return (
//     <div className="logo_wrapper">
//       <div className="screen" style={{ backgroundColor: props.theme.body }}>
//         <h1
//           style={{
//             color: props.theme.text,
//             fontSize: "3rem",
//             fontWeight: "bold",
//             fontFamily: "sans-serif",
//           }}
//         >
//           Ankit Parkhe
//         </h1>
//       </div>
//     </div>
//   );
// }

// class Splash extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       redirect: false,
//     };
//   }

//   componentDidMount() {
//     this.id = setTimeout(() => this.setState({ redirect: true }), 1000);
//   }

//   componentWillUnmount() {
//     clearTimeout(this.id);
//   }

//   render() {
//     return this.state.redirect ? (
//       <Redirect to="/home" />
//     ) : (
//       <AnimatedSplash theme={this.props.theme} />
//     );
//   }
// }

// export default Splash;
import React, { Component } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom"; // ⬅️ Updated import

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.body }}>
        <h1
          style={{
            color: props.theme.text,
            fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Ankit Parkhe
        </h1>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Navigate to="/home" replace /> // ⬅️ React Router v6 way
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
