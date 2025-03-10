import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const page = () => {
  return (
    <>
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
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" required placeholder="Search"/>
</label>


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
                <th>ชั้นเรียน</th>
                <th>จำนวนสมาชิก</th>
                <th>แก้ไขและลบ</th>
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
                <td>ม.4/1</td>
                <td>
                  <span>32</span> คน
                </td>
                <td>
                  <div className="flex gap-4 items-center justify-center">
                    <BiSolidEdit />
                    <AiOutlineDelete />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
