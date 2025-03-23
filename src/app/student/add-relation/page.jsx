"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="py-12 w-full mx-auto">
      <h3 className="h5 text-center">ข้อมูลการเยี่ยมบ้านของ นาย ... ....</h3>

      {/* Stepper section */}
      <div className="flex justify-center my-4">
        <ul className="steps">
          <li
            onClick={() => router.push("/student/add-selfinfo")}
            className="step step-warning hover:cursor-pointer"
          >
            ข้อมูลส่วนตัว
          </li>
          <li
            onClick={() => router.push("/student/add-relation")}
            className="step hover:cursor-pointer step-warning"
          >
            ข้อมูลความสัมพันธ์ในครอบครัว
          </li>
          <li
            onClick={() => router.push("/student/add-familystatus")}
            className="step hover:cursor-pointer"
          >
            ข้อมูลสถานะครัวเรือน
          </li>
          <li
            onClick={() => router.push("/student/add-behavior")}
            className="step hover:cursor-pointer"
          >
            ข้อมูลพฤติกรรมและความเสี่ยง
          </li>
        </ul>
      </div>

      {/* Form section */}
      <div className="flex justify-center w-full mx-auto">
        <div className="bg-base-200 w-[50%] px-28 py-8 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default page;
