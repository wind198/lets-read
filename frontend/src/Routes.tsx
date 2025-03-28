import React, { lazy } from "react";
import { Route, Routes } from "react-router";

/** LAYOUTS */
const HomeLayout = lazy(() => import("src/layouts/HomeLayout"));

/** VIEWS */
const Reader = lazy(() => import("src/views/Reader"));
const Home = lazy(() => import("src/views/Home"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/reader" element={<Reader />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
