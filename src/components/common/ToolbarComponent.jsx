import React from 'react';
import { NavLink } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../info/ColorUtils';
import { useLocation, useHistory } from 'react-router-dom'

export default function ToolbarComponent() {
  const location = useLocation();
  const history = useHistory()
  return (
    <nav className={"flex justify-between items-center h-16 bg-white text-black relative shadow-md font-mono"} role={"navigation"}>
      <NavLink style={{ fontSize: "large", color: PRIMARY_COLOR }} to={"/"} className={"pl-8"}>Yazan Tarifi</NavLink>
        <div className={"px-4 cursor-pointer md:hidden"} onClick={() => history.push("/nav")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
      <div className={"pr-4 md:block hidden"}>
        <NavLink style={{ color: location.pathname === "/" ? PRIMARY_COLOR : "" }} className={"p-2"} to="/">Home</NavLink>
        <NavLink style={{ color: location.pathname === "/projects" ? PRIMARY_COLOR : ""}} className={"p-2"} to="/projects">Projects</NavLink>
        <NavLink style={{ color: location.pathname === "/skills" ? PRIMARY_COLOR : "" }} className={"p-2"} to="/skills">Skills</NavLink>
        <NavLink style={{ color: location.pathname === "/archive" ? PRIMARY_COLOR : "" }} className={"p-2"} to="/archive">Archive</NavLink>
      </div>
    </nav>
  );
}
