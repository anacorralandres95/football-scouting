import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Homepage } from "./screens/homepage/Homepage.js";
import { TermsConditions } from "./screens/terms-about-contact/TermsConditions.js";
import { AboutUs } from "./screens/terms-about-contact/AboutUs.js";
import { Contact } from "./screens/terms-about-contact/Contact.js";
import { Login } from "./screens/login/Login.js";
import { PasswordRecovery } from "./screens/password-recovery/PasswordRecovery.js";
import { PromiseRegister } from "./screens/registers/PromiseRegister.js";
import { ScoutRegister } from "./screens/registers/ScoutRegister.js";
import { AssistantRegister } from "./screens/registers/AssistantRegister.js";
import { FileCard } from "./screens/file-card/FileCard.js";
import { Payment } from "./screens/payment/Payment.js";
import { Dashboard } from "./screens/dashboard/Dashboard.js";
import { Favorites } from "./screens/dashboard/favorites/Favorites.js";
import { MyVideos } from "./screens/dashboard/my-videos/MyVideos.js";
import { VideoUpload } from "./screens/video-upload/VideoUpload.js";
import { Video } from "./screens/video/Video.js";
import { Messages } from "./screens/messages/Messages.js";
import { NotFound } from "./screens/not-found/NotFound.js";

import { AuthProvider } from "./shared/context/auth-context";

import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/terms-conditions">
              <TermsConditions />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/password-recovery">
              <PasswordRecovery />
            </Route>
            <Route path="/promise-register">
              <PromiseRegister />
            </Route>
            <Route path="/scout-register">
              <ScoutRegister />
            </Route>
            <Route path="/assistant-register">
              <AssistantRegister />
            </Route>
            <Route path="/file-card">
              <FileCard />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/video/favorites">
              <Favorites />
            </Route>
            <Route path="/video/my-videos">
              <MyVideos />
            </Route>
            <Route path="/video-upload">
              <VideoUpload />
            </Route>
            <Route path="/video/:video_id">
              <Video />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ScrollToTop>
      </AuthProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
