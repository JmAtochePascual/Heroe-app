import { Navigate, Route, Routes } from "react-router";
import { DcPage, HeroLayout, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { LoginLayout, LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LoginLayout />}>
        <Route index path="login" element={<LoginPage />} />
      </Route>

      <Route element={<HeroLayout />}>
        <Route index path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero" element={<HeroPage />} />
      </Route>

      <Route path="/*" element={<Navigate to="marvel" />} />
    </Routes>
  );
};