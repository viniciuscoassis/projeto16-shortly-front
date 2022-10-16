import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyle/globalStyles.js";
import AuthPage from "./AuthPage/AuthPage.js";

import HomePage from "./Home/HomePage.js";
import HomePageLogged from "./Home/HomePageLog.js";
import PrivatePage from "./PrivatePage/PrivatePage.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/home"
          element={
            <PrivatePage>
              <HomePageLogged />
            </PrivatePage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
