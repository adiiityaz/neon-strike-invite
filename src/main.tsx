import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Remove light class on initial load for dark neon theme
document.documentElement.classList.remove('light');

createRoot(document.getElementById("root")!).render(<App />);
