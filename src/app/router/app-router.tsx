import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Home } from "@/pages";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  );
};

export default AppRouter;
