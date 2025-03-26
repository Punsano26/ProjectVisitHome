"use client";
import React from 'react'
import { Stepper } from "@componentsStepper";
import HomeStatus from '@componentsstudentComponents/studentFrom/HomeStatus'
const page = () => {
  return (
    <div className="section-container">
      <h3 className="text-lg text-center">ข้อมูลการเยี่ยมบ้านของ <span>นาย </span><span>พันแสน สมกล้า</span></h3>

      {/* Stepper section */}
      <Stepper/>

      {/* ฟอร์มกรอกข้อมูลความสัมพันธ์ในครอบครัว */}
      <div className="flex justify-center"><HomeStatus/></div>
      
    </div>
  )
}

export default page;
