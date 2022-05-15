/*global chrome*/
import logo from './manuvie-logo.png';
import './App.css';
import MaterialIcon from 'material-icons-react';
import React from "react";
import { Admin, Resource } from "react-admin";
import * as fetchUtils from "./utils/fetch";
import decodeJwt from "jwt-decode";
import NotFound from "./NotFound";
import authProvider from "./authProvider";
import restProvider from "./restProvider";
import users from "./users";
import configs from "./configs";
import tokenProvider from "./utils/tokenProvider";
import addUploadFeature from "./addUploadFeature";

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: "application/json" });
//   }
//   const token = tokenProvider.getToken();
//   const decodedToken = decodeJwt(token);
//   const { exp } = decodedToken;
//   const now = new Date();
//   if (now > (exp + 5) * 1000) {
//     return tokenProvider.getRefreshedToken().then((gotFreshToken) => {
//       if (gotFreshToken) {
//         options.headers.set(
//           "Authorization",
//           `Bearer ${tokenProvider.getToken()}`
//         );
//       }
//       return fetchUtils.fetchJson(url, options);
//     });
//   } else {
//     options.headers.set("Authorization", `Bearer ${token}`);
//     return fetchUtils.fetchJson(url, options);
//   }
// };

// const API_URL = process.env.API_URL || "";
// const dataProvider = restProvider(`${API_URL}/api/v1`, httpClient);
// const uploadCapableDataProvider = addUploadFeature(dataProvider);

function App() {
  return (
    // <Admin
      // title="Awesome App Admin"
      // dataProvider={uploadCapableDataProvider}
      // authProvider={authProvider}
      // catchAll={NotFound}
    // >
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h3 className="App-title">Les 101 Dalmatiens Lead Gen</h3>
        </header>
        <main>
          <section className="App-intro">
            <p>Automating the process of LinkedIn lead generation for Manulife Asset Management.</p>
            <div className="flex card">
              <MaterialIcon icon="check" color="green" />
              <p className="space-x">You currently are on the correct page to use this service.</p>
            </div>
          </section>
          <section className="App-main">
            <h5>Settings</h5>
            <div className="Scrape-options-container">
              <div className="Scrape-option-box">
                <MaterialIcon icon="timer" size="medium"/>
                <p className="bold no-padding-margin">Set a time limit</p>
              </div>
              <div className="Scrape-option-box">
                <MaterialIcon icon="tune" size="medium"/>
                <p className="bold no-padding-margin">Set a lead limit</p>
              </div>
              <div className="Scrape-option-box">
                <MaterialIcon icon="all_inclusive" size="medium"/>
                <p className="bold no-padding-margin">Set no limit</p>
              </div>
            </div>
            <div className="Scrape-filename-input">
              <h5>Please provide a name for the excel worksheet.</h5>
              <div className="flex">
                <input/>
                <span className="light">.xlsx</span>
              </div>
            </div>
            <hr />
            <h5 className="light">Approximate count of prospects to be generated</h5>
            <h3>1,756</h3>
            <button className="Scrape-cta">Run Les 101 Dalmatiens</button>
          </section>
        </main>
      </div>
    // </Admin>
  );
}

export default App;
