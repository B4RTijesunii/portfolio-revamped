import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

// Theme is now fixed-dark (navy/gold system) — the old light/dark
// toggle and localStorage theme logic have been removed.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <meta
        name="google-site-verification"
        content="google-site-verification=PcAu7_RHTsgKfUJKc_vmeLymeYPYYLpYCb8rUMYewRA"
      />
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
