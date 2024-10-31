import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
