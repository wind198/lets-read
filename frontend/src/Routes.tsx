import React, { lazy } from "react";
import { Route, Routes } from "react-router";

/** LAYOUTS */
const HomeLayout = lazy(() => import("layouts/HomeLayout"));

/** VIEWS */
const Reader = lazy(() => import("views/Reader"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/reader" element={<Reader />} />
      </Route>
    </Routes>
  );
}
