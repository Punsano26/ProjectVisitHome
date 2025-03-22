"use client";
import React, { useEffect, useState } from "react";
import UserService from "services/user.service";
import ModalAddpersonnel from "@components/modals/addpersonnel";
import PersonTable from "@components/table/PersonTable";
import api from "services/api";

const page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      UserService.getUsers().then((res) => {
        console.log(res);

        setUsers(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(users);

  const showStatus = (status) => {
    switch (status) {
      case "รับราชกาล":
        return <div className="badge badge-dash badge-success">รับราชกาล</div>;
      case "ลาออก":
        return <h1>Good Afternoon!</h1>;
      default:
        return <h1>Hello!</h1>;
    }
  };

  const columns = ["เลขที่ประจำตัวบุคลากร", "คำนำหน้า", "ชื่อ", "นามสกุล", "ตำแหน่ง", "ติดต่อ", "สถานะ"];

  const formattedPerson = users.map((user) => ({
    "เลขที่ประจำตัวบุคลากร": user.id,
    "คำนำหน้า": user.prefix,
    "ชื่อ": user.first_name,
    "นามสกุล": user.last_name,
    "ตำแหน่ง": user.role.includes("Admin") ? "เจ้าหน้าที่" : "ครูที่ปรึกษา",
    "ติดต่อ": user.phone || "ยังไม่มีเบอร์โทรศัพท์", // เผื่อ API ไม่มีข้อมูล
    "สถานะ": showStatus(user.status),
  }));

  return (
    <div className="p-2">
      <h5 className="text-center font-bold">รายชื่อบุคลากร</h5>
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
            <input type="search" required placeholder="กรอกรายชื่อบุคลากร" />
          </label>
          <button
            onClick={() => document.getElementById("add_personnel").showModal()}
            className="btn btn-success"
          >
            เพิ่มบุคลากร
          </button>
        </div>
      </div>
      {/* Modal เพิ่มบุคลากร */}
      <ModalAddpersonnel />
      {/* ตารางแสดงรายชื่อบุคลากรในโรงเรียน*/}
      <div className="overflow-x-auto">
<<<<<<< HEAD
        <PersonTable columns={columns} data={formattedPerson} />
=======
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-center">เลขที่ประจำตัวบุคลากร</th>
              <th className="text-center">คำนำหน้า</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>ตำแหน่ง</th>
              <th>ติดต่อ</th>
              <th>สถานะ</th>
              <th className="text-center">แก้ไข/ลบ</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="text-center">74837495</td>
                <td className="text-center">
                  <span>{user.prefix}</span>
                </td>
                <td>
                  <span>{user.first_name}</span>
                </td>
                <td>
                  <span>{user.last_name}</span>
                </td>
                <td>
                  {user.role.includes("Admin") ? (
                    <span>เจ้าหน้าที่</span>
                  ) : (
                    <span>ครูที่ปรึกษา</span>
                  )}
                </td>
                <td>
                  <span>0987654321</span>
                </td>
                <td>
                  <span className="">{showStatus(user.status)}</span>
                </td>

                <td>
                  <div className="flex gap-4 items-center justify-center">
                    <BiSolidEdit />
                    <AiOutlineDelete />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
>>>>>>> 962e8a4072208dfd3e3d227edfad987d60a383fb
      </div>
    </div>
  );
};

export default page;
