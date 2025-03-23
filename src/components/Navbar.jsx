"use client";
import { useContext } from "react";
import { AuthContext } from "contexts/auth.context";
import TestSignbtn from "@componentsTestSignbtn";
const Navbar = () => {
  const { GoogleLogin, user, logout } = useContext(AuthContext);
  console.log(user);

  const studentNav = [
    { label: "หน้าหลัก", link: "/student" },
    { label: "จัดการข้อมูลการเยี่ยมบ้าน", link: "/student/" },
    { label: "ประเมิน SDQ", link: "/student/" },
  ];

  const teacherNav = [
    { label: "หน้าหลัก", link: "/teacher" },
    { label: "รายชื่อนักเรียน", link: "/teacher/" },
    { label: "ผลประเมิน SDQ", link: "/teacher/" },
  ];

  const adminNav = [
    { label: "หน้าหลัก", link: "/admin" },
    { label: "บุคลากร", link: "/admin/personnel" },
  ];

  // const studentNav = (
  //   <>
  //     <li>
  //       <a href="/student">หน้าหลัก</a>
  //     </li>
  //     <li>
  //       <a href="/student">จัดการข้อมูลการเยี่ยมบ้าน</a>
  //     </li>
  //     <ul>
  //       ประเมิน SDQ
  //       <li>
  //         <a href="/student">ผู้ปกครอง</a>
  //       </li>
  //       <li>
  //         <a href="/student">นักเรียน</a>
  //       </li>
  //     </ul>
  //   </>
  // );

  // const teacherNav = (
  //   <>
  //     <li>
  //       <a href="/teacher">หน้าหลัก</a>
  //     </li>
  //     <li>
  //       <a href="/teacher">รายชื่อนักเรียน</a>
  //     </li>
  //     <li>
  //       <a href="/teacher">ผลประเมิน SDq</a>
  //     </li>
  //   </>
  // );

  // const adminNav = (
  //   <>
  //     <li>
  //       <a href="/admin">หน้าหลัก</a>
  //     </li>
  //     <li>
  //       <a href="/admin/personnel">บุคลากร</a>
  //     </li>
  //   </>
  // );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          {user && (
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                {user?.user?.role[0] === "Admin" ? (
                  adminNav.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.link}>{item.label}</a>
                      </li>
                    );
                  })
                ) : user?.user?.role[0] === "Teacher" ? (
                  teacherNav.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.link}>{item.label}</a>
                      </li>
                    );
                  })
                ) : user?.user?.role[0] === "Student" ? (
                  studentNav.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.link}>{item.label}</a>
                      </li>
                    );
                  })
                ) : (
                  <></>
                )}
              </ul>
            </div>
          )}
          <a className="btn btn-ghost text-sm">
            <img src="../logoschool.png" alt="logoschool" className="w-8 h-8" />
            <h3 className="hidden md:block md:text-sm">
              ระบบบันทึกการเยี่ยมบ้านโรงเรียนบางแพปฐมพิทยา
            </h3>
          </a>
        </div>
        {user && (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {user?.user?.role === "Admin" ? (
                adminNav.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link}>{item.label}</a>
                    </li>
                  );
                })
              ) : user?.user?.role === "Teacher" ? (
                teacherNav.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link}>{item.label}</a>
                    </li>
                  );
                })
              ) : user?.user?.role[0] === "Student" ? (
                studentNav.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link}>{item.label}</a>
                    </li>
                  );
                })
              ) : (
                <></>
              )}
            </ul>
          </div>
        )}
        <div className="navbar-end">
          {user ? (
            <button onClick={logout} className="btn btn-danger">
              ลงชื่อออกจากระบบ
            </button>
          ) : (
            <button onClick={GoogleLogin} className="btn btn-login">
              เข้าสู่ระบบ
            </button>
            // <TestSignbtn />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
