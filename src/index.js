// import React from "react";
// import ReactDOM from "react-dom";
// import { BaseProvider, LightTheme } from "baseui";
// import { Provider as StyletronProvider } from "styletron-react";
// import { Client as Styletron } from "styletron-engine-atomic";
// import "./index.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import "./assets/font-awesome/css/all.css";

// const engine = new Styletron();
// ReactDOM.render(
//   <StyletronProvider value={engine}>
//     <BaseProvider theme={LightTheme}>
//       <App />
//     </BaseProvider>
//   </StyletronProvider>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from "react";
import ReactDOM from "react-dom/client"; // ⬅️ updated import
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import "./index.css";
import "./assets/font-awesome/css/all.css";

const engine = new Styletron();
const root = ReactDOM.createRoot(document.getElementById("root")); // ⬅️ updated for React 18

root.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BaseProvider>
  </StyletronProvider>
);
