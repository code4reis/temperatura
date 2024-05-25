import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import Weather from "./pages/Weather";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/weather/:city" element={<Weather />} />
    </Routes>
  );
}
