"use client";
import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import ModalAddClass from "../../../components/modals/addclass";
import ModalEditClass from "@componentsmodals/editClass";

const page = () => {
  return (
    <div className="h-[71.5vh]">
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
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="text-center">ม.4/1</td>
                <td className="text-center">
                  <span>32</span> คน
                </td>
                <td className="flex space-x-2">
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
                <ModalEditClass />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
