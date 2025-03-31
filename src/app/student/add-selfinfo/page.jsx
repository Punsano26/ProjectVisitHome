"use client";
import { useState, useEffect } from "react";
import { Stepper } from "@componentsStepper";
import PersonalInfo from "@componentsstudentComponents/studentFrom/PersonalInfo";
import { useFormik } from "formik";
import { selfInfoSchema } from "schemas/studentInfo";

const AddSelfInfo = () => {
  const [studentPic, setStudentPic] = useState(null);
  const [parentCheck, setParentCheck] = useState(false);

  const formik = useFormik({
    initialValues: {
      stdName: "",
      classroom: "",
      stdNumber: "",
      stdPhone: "",
      dadName: "",
      dadCareer: "",
      dadPhone: "",
      momName: "",
      momCareer: "",
      momPhone: "",
      dadAndMomStatus: "",
      parentRelation: "",
      parentName: "",
      parentCareer: "",
      parentPhone: "",
      lat: "",
      lng: "",
    },
    validationSchema: selfInfoSchema,
  });

  console.log(formik);

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
        formik={formik}
      />
    </div>
  );
};

export default AddSelfInfo;
