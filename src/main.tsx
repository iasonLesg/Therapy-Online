import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; 
import './index.css'
import App from './App.tsx'


// Wrap your app in BrowserRouter and set the basename
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter > 
      <App />
    </BrowserRouter>
  </StrictMode>
);
