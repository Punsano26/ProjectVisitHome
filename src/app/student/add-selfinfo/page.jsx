"use client";
import { useState, useEffect } from "react";
import { Stepper } from "@componentsStepper";
import PersonalInfo from "@componentsstudentComponents/studentFrom/PersonalInfo";

const AddSelfInfo = () => {
  const [studentPic, setStudentPic] = useState(null);
  const [parentCheck, setParentCheck] = useState(false);

  return (
    <div className="py-12 w-full mx-auto">
      <h3 className="h5 text-center">ข้อมูลการเยี่ยมบ้านของ นาย ... ....</h3>

      {/* Stepper section */}
      <Stepper step={1} />

      {/* Form section */}
      <PersonalInfo
        setParentCheck={setParentCheck}
        setStudentPic={setStudentPic}
        studentPic={studentPic}
        parentCheck={parentCheck}
      />
    </div>
  );
};

export default AddSelfInfo;
