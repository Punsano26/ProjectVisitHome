import React from "react";
import { useRouter } from "next/navigation";
export const Stepper = ({ step }) => {
  const router = useRouter();
  return (
    <div>
      {/* Stepper section */}
      <div className="flex justify-center my-4">
        <ul className="steps">
          <li
            onClick={() => router.push("/student/add-selfinfo")}
            className={`step hover:cursor-pointer ${
              step >= 1 && "step-warning"
            }`}
          >
            ข้อมูลส่วนตัว
          </li>
          <li
            onClick={() => router.push("/student/add-relation")}
            className={`step hover:cursor-pointer ${
              step >= 2 && "step-warning"
            }`}
          >
            ข้อมูลความสัมพันธ์ในครอบครัว
          </li>
          <li
            onClick={() => router.push("/student/add-familystatus")}
            className={`step hover:cursor-pointer ${
              step >= 3 && "step-warning"
            }`}
          >
            ข้อมูลสถานะครัวเรือน
          </li>
          <li
            onClick={() => router.push("/student/add-behavior")}
            className={`step hover:cursor-pointer ${
              step >= 4 && "step-warning"
            }`}
          >
            ข้อมูลพฤติกรรมและความเสี่ยง
          </li>
        </ul>
      </div>
    </div>
  );
};
