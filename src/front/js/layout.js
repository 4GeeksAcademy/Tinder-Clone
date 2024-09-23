import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {HomeNotLog} from "./pages/HomeNotLog.jsx"
import { HomeMoreInfo } from "./pages/HomeMoreInfo.jsx";
import { Registro } from "./pages/registro.js";
import { Dashboard } from "./pages/Dashboard.jsx"
import { HomeSecurity } from "./pages/HomeSecurity.jsx";
import { Pricing } from "./pages/Pricing.jsx";
import {HomeSubscriptionLevels} from "./pages/HomeSubscriptionLevels.jsx"
import PrivateRoute from  "./component/Private_route/PrivateRoute.jsx";
import { ProfileSettings } from "./pages/ProfileSettings.jsx";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<HomeNotLog />} path="/" />
                        <Route element={<HomeMoreInfo/>} path="/Moreinfo"/>
                        <Route element={<PrivateRoute><Registro/></PrivateRoute>} path="/preferences"/>
                        <Route element={<Dashboard/>} path="/dashboard"/>
                        <Route element={<HomeSecurity/>} path="/Security"/>
                        <Route element={<Pricing/>} path="/pricing"/>
                        <Route element={<HomeSubscriptionLevels/>} path="/Subscription"/>
                        <Route element={<ProfileSettings/>} path="/settings"/>

                        {/* <Route element={<Home />} path="/user/:id" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} /> */}
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);