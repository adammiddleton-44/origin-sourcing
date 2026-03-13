import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
// Fade in after React hydration to prevent FOSC
rootEl.style.opacity = '1';
