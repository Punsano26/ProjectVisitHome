"use client";
import React from 'react'
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import ModalAddStudent from '@components/modals/addstudent';

const page = () => {
  return (
    <div className='p-2'>
         <h5 className="text-center font-bold">
          มัธยมศึกษาปีที่<span>5/1</span>
        </h5>
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
            onClick={()=>document.getElementById('add_student').showModal()}
            className="btn btn-success">เพิ่มชั้นเรียน</button>
          </div>
        </div>

        <div className='flex gap-4 justify-satart'> <h6>ครูที่ปรึกษา :<span>ณัฐวุฒ แฝงนาง</span></h6>
        <h6>ข้อมูลติดต่อ :<span></span></h6></div>
       
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
                       <th className="text-center">แก้ไข/ลบ</th>
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
                       <td className="text-center">0</td>
                       <td className="text-center">
                         <span>43453</span>
                       </td>
                       <td className="">
                         <span>นาย</span>
                       </td>
                       <td>
                         <span>พันแสน</span>
                       </td>
                       <td>
                         <span>สมกล้า</span>
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
               <ModalAddStudent/>
    </div>
  )
}

export default page