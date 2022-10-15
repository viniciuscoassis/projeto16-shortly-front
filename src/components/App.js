import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyle/globalStyles.js";

import HomePage from "./HomePage/HomePage.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
