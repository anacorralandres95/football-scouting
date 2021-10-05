import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage.js";
import { TermsConditions } from "./pages/TermsConditions.js";
import { AboutUs } from "./pages/AboutUs.js";
import { Contact } from "./pages/Contact.js";
import { Login } from "./pages/Login.js";
import { PasswordRecovery } from "./pages/PasswordRecovery.js";
import { PromiseRegister } from "./pages/PromiseRegister.js";
import { ScoutRegister } from "./pages/ScoutRegister.js";
import { AssistantRegister } from "./pages/AssistantRegister.js";
import { FileCard } from "./pages/FileCard.js";
import { Payment } from "./pages/Payment.js";
import { Dashboard } from "./pages/Dashboard.js";
import { Favorites } from "./pages/Favorites.js";
import { MyVideos } from "./pages/MyVideos.js";
import { VideoUpload } from "./pages/VideoUpload.js";
import { Video } from "./pages/Video.js";
import { Messages } from "./pages/Messages.js";
import { NotFound } from "./pages/NotFound.js";

import { AuthProvider } from "./shared/context/auth-context";


import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
      <BrowserRouter>
      <AuthProvider>
        <ScrollToTop >
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/terms-conditions">
            <TermsConditions/>
          </Route>
          <Route path="/about-us">
            <AboutUs/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/password-recovery">
            <PasswordRecovery />
          </Route>
          <Route path="/promise-register">
            <PromiseRegister/>
          </Route>
          <Route path="/scout-register">
            <ScoutRegister/>
          </Route>
          <Route path="/assistant-register">
            <AssistantRegister/>
          </Route>
          <Route path="/file-card">
            <FileCard/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/video/favorites">
            <Favorites/>
          </Route>
          <Route path="/video/my-videos">
            <MyVideos/>
          </Route>
          <Route path="/video-upload">
            <VideoUpload/>
          </Route>
          <Route path="/video/:video_id">
            <Video/>
          </Route>
          <Route path="/messages">
            <Messages/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        </ScrollToTop>
      </AuthProvider>
      </BrowserRouter>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));

