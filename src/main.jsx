import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import './i18n';
import i18n from "./i18n";

function updateDocumentDirection(language) {
  const dir = language === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", language);
}

// Listen for language changes
i18n.on("languageChanged", (lng) => {
  updateDocumentDirection(lng);
});

// Call initially
updateDocumentDirection(i18n.language);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
