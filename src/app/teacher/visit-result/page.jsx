"use client";
import { useState } from "react";
import React from "react";
import AddPicture from "@componentsAddPicture";

const page = () => {
  const [homepic, setHomepic] = useState(null);
  const [familypic, setFamilypic] = useState(null);

  const handleAddHome = () => {
    document.getElementById("addhomepic").click();
  };
  const handleAddFamily = () => {
    document.getElementById("addfamilypic").click();
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-4">
        <h5 className="font-semibold">
          ข้อมูลของ <span>นาย</span> <span>กิตติพงษ์</span>
        </h5>
      </div>

      <div className="md:flex mx-auto justify-between w-8/12">
        {/* ส่วนปุ่มเพิ่มรูปภาพบ้านกับรูปภาพนักเรียน */}
        <div className="flex flex-col justify-center items-center mt-4">
          <h3>รูปถ่ายสภาพบ้าน</h3>
          <AddPicture
            set={setHomepic}
            get={homepic}
            onClick={handleAddHome}
            id={"addhomepic"}
          />
          <fieldset className="fieldset my-6">
            <legend className="fieldset-legend">คำอธิบายภาพ :</legend>
            <input
              type="text"
              className="input w-92"
              placeholder="กรอกคำอธิบายภาพ"
            />
          </fieldset>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <h3>รูปถ่ายกับครอบครัว</h3>
          <AddPicture
            set={setFamilypic}
            get={familypic}
            onClick={handleAddFamily}
            id={"addfamilypic"}
          />
          <fieldset className="fieldset my-6">
            <legend className="fieldset-legend">คำอธิบายภาพ :</legend>
            <input type="text" className="input w-92" placeholder="ชั้นเรียน" />
          </fieldset>
        </div>
      </div>

      <div className="md:flex w-8/12 mx-auto">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">ความคิดเห็นของอาจารย์ :</legend>
          <textarea
            className="textarea textarea-lg w-98 md:w-128"
            placeholder="กรอกคำอธิบายภาพ"
          />
        </fieldset>
      </div>

      <div className="flex justify-end mr-6 my-4">
        <button className="btn bg-red-400 mr-8">ยกเลิก</button>
        <button className="btn bg-green-400">บันทึก</button>
      </div>
    </div>
  );
};

export default page;
