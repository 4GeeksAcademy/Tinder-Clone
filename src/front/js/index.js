//import react into the bundle
import React from "react";
import { createRoot } from "react-dom/client";

//include your index.scss file into the bundle
import "../styles/index.css";
import "../styles/frank.css";
import "../styles/ProfileSettings.css";

//import your own components
import Layout from "./layout";

const container = document.getElementById("app");

//render your react application
const root = createRoot(container)
root.render(<Layout />);

