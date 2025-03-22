"use client";
import { useContext } from "react";
import { AuthContext } from "contexts/auth.context";
import TestSignbtn from "@componentsTestSignbtn";
const Navbar = () => {
  const { GoogleLogin, user, logout } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <a className="btn btn-ghost text-sm">
            <img src="../logoschool.png" alt="logoschool" className="w-8 h-8" />
            <h3 className="hidden md:block md:text-sm">
              ระบบบันทึกการเยี่ยมบ้านโรงเรียนบางแพปฐมพิทยา
            </h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
        </div>
        <div className="navbar-end">
       
          {user ? (
            <button onClick={logout} className="btn btn-danger">
              ลงชื่อออกจากระบบ
            </button>
            
          ) : (
            <button onClick={GoogleLogin} className="btn btn-login">
              เข้าสู่ระบบ
            </button>,
            <TestSignbtn />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
