import React from "react";
import { Link } from "react-router-dom";

const navItem = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Booking",
    href: "/booking",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <ul className="flex items-center justify-center py-4 gap-x-4">
        {navItem.map((item, index) => (
          <li
            key={index}
            className="px-2 py-1 font-semibold text-white hover:opacity-70"
          >
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
