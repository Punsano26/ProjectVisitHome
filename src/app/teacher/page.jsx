"use client";
import React, { useEffect, useState } from "react";
import ModalManageVisitor from "@componentsmodals/manageVisitor";
const page = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/studentname");
        const data = await res.json();
        setStudents(data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-2">
      <h5 className="text-center font-bold">
        รายชื่อนักเรียน ม.<span>4/1</span>
      </h5>
      {/* ฟีเจอร์เสริม */}
      <div className="flex items-center justify-between m-2 mt-4 mb-4">
        {/* Dropdown ชิดซ้าย */}
        <div className="dropdown dropdown-bottom mr-4">
          <select className="input w-36 md:w-72 border rounded-md p-2">
            <option value="">เรียงตามเลขที่</option>
            <option value="mr">ก-ฮ</option>
          </select>
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
            <input type="search" required placeholder="ค้นหารายชื่อนักเรียน" />
          </label>
        </div>
      </div>
      <div className="items-center flex justify-center mb-4 md:justify-start md:ml-4 ">
        <button className="btn btn-success">พิมพ์รายชื่อนักเรียน</button>
      </div>

      {/* ตารางแสดงรายชื่อนักเรียนขอห้องนี้ */}
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
              <th className="text-center">เลขที่</th>
              <th className="text-center">เลขที่ประจำตัวนักเรียน</th>
              <th className="">คำนำหน้า</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th className="text-center">สถานะการเยี่ยมบ้าน</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {students.map((student, index) => (
              <tr
                key={index}
                className="hover:bg-amber-100 cursor-pointer"
                onClick={() =>
                  document.getElementById(student.firstname, student.lastname).showModal()
                }
              >
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="text-center">{student.no}</td>
                <td className="text-center">
                  <span>{student.mypass}</span>
                </td>
                <td className="">
                  <span>{student.prefix}</span>
                </td>
                <td>
                  <span>{student.firstname}</span>
                </td>
                <td>
                  <span>{student.lastname}</span>
                </td>

                {/* ใช้ Ternary Operator */}
                <td className="text-center">
                  {student.status_visit !== "เยี่ยมแล้ว" ? (
                    <span className="badge badge-soft badge-error">
                      {student.status_visit}
                    </span>
                  ) : (
                    <span className="badge badge-soft badge-success">
                      {student.status_visit}
                    </span>
                  )}
                </td>
                {/* Modal จัดการข้อมูลนักเรียน */}
                <ModalManageVisitor name={student.firstname} lastname={student.lastname} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
