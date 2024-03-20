// code for navbar
import React from "react";
import { NavLink } from "react-router-dom";
import { GrProductHunt } from "react-icons/gr";
import { IoMdColorFill } from "react-icons/io";
import { FaGear } from "react-icons/fa6";

export function Navbar() {
  return (
    <div>
      <ul className="list-style">
        <li>
          <NavLink to={"/"}>
            <GrProductHunt/>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Color"}>
            <IoMdColorFill/>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Setting"}>
            <FaGear/>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
