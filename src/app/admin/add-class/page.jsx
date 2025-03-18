"use client";
import { useState, useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import ModalAddClass from "../../../components/modals/addclass";
import ModalEditClass from "@componentsmodals/editClass";

const page = () => {
  const [classes, setClasses] = useState([]);
  const classesMockup = [
    { id: 1, grade: 1, room: 1, students: 32, teacher: "ครูณัฐวุฒิ" },
    { id: 2, grade: 1, room: 2, students: 88, teacher: "ครูxxx" },
    { id: 3, grade: 2, room: 1, students: 55, teacher: "ครูyyy" },
    { id: 4, grade: 2, room: 2, students: 44, teacher: "ครูzzz" },
    { id: 5, grade: 3, room: 1, students: 22, teacher: "ครูaaa" },
    { id: 6, grade: 3, room: 2, students: 45, teacher: "ครูbbb" },
    { id: 7, grade: 4, room: 1, students: 88, teacher: "ครูccc" },
    { id: 8, grade: 4, room: 2, students: 77, teacher: "ครูddd" },
    { id: 9, grade: 5, room: 1, students: 66, teacher: "ครูeee" },
    { id: 10, grade: 5, room: 2, students: 45, teacher: "ครูfff" },
    { id: 11, grade: 6, room: 1, students: 54, teacher: "ครูggg" },
    { id: 12, grade: 6, room: 2, students: 78, teacher: "ครูhhh" },
  ];
  useEffect(() => {
    setClasses(classesMockup);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-2">
        <h5 className="text-center font-bold">
          เพิ่มชั้นเรียนของปีการศึกษา<span>2565</span>
        </h5>
        <div className="flex justify-center items-center mt-4">
          {/* การ์ดกำหนดช่วงนัดการเยี่ยมบ้านนักเรียน */}
          <div className="card w-2xl p-4 shadow-sm flexl flex-col items-center justify-center">
            <h5 className="text-center">กำหนดช่วงเวลานัดเยี่ยมบ้าน</h5>
            <div className="gap-4 flex">
              <fieldset className="fieldset mr-6">
                <legend className="fieldset-legend">เริ่มต้น</legend>
                <input type="date" className="input" placeholder="" />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">สิ้นสุด</legend>
                <input type="date" className="input" placeholder="" />
              </fieldset>
            </div>
          </div>
        </div>
        {/* ฟีเจอร์เสริม */}
        <div className="flex items-center justify-between m-2 mt-4 mb-4">
          {/* Dropdown ชิดซ้าย */}
          <div className="dropdown dropdown-bottom mr-4">
            <div tabIndex={0} role="button" className="btn">
              ทั้งหมด
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          {/* Search + Button ชิดขวา */}
          <div className="flex items-center gap-4">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="กรอกชื่อนักเรียน" />
            </label>
            <button
              onClick={() => document.getElementById("add_class").showModal()}
              className="btn btn-success"
            >
              เพิ่มชั้นเรียน
            </button>
          </div>
        </div>
        <ModalAddClass />
        <ModalEditClass />
        {/* ตารางชั้นเรียน */}

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className="text-center">ชั้นเรียน</th>
                <th className="text-center">จำนวนสมาชิก</th>
                <th className="text-center">แก้ไขและลบ</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {classes?.length > 0 &&
                classes.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td className="text-center">
                        ม.{item.grade}/{item.room}
                      </td>
                      <td className="text-center">
                        <span>{item.students}</span> คน
                      </td>
                      <td className="flex space-x-2 items-center justify-center">
                        <button
                          className="btn btn-warning btn-outline"
                          onClick={() =>
                            document.getElementById("edit_class").showModal()
                          }
                        >
                          <BiSolidEdit />
                        </button>
                        <button className="btn btn-error btn-outline">
                          <AiOutlineDelete />
                        </button>
                      </td>
                     
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;