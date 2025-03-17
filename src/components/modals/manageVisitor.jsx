"use client"
import React,{useEffect, useState} from 'react'

const ManageVisitor = ({name, lastname}) => {
    
  return (
    <dialog id={name} className="modal">
      <div className="modal-box flex flex-col items-center justify-center w-11/12 max-w-3xl">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg text-center">จัดการข้อมูล</h3>
        <div className='flex items-center justify-center space-x-2'>
            <h4>{name}</h4><h4>{lastname}</h4>
        </div>
       
        <div className="modal-action flex items-center justify-center">
          <form method="dialog" className="flex flex-col space-y-4 md:flex-row md:space-x-4">
            <button type="submit" className="btn">ประเมิน SDQ</button>
            <button type="submit" className="btn">ดูเส้นทาง</button>
            <button type="submit" className="btn">ผลการเยี่ยมบ้าน</button>
            <button type="submit" className="btn">ข้อมูลการเยี่ยมบ้าน</button>
            <button type="submit" className="btn">พิมพ์เอกสาร</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default ManageVisitor
