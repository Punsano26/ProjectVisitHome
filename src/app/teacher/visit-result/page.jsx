"use client";
import { useState } from "react";
import { MdUpload } from "react-icons/md";
import React from "react";

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
          <div
            className={`btn btn-ghost flex flex-col py-30 px-28 border-1 rounded-md border-[#EFEFEF]`}
            onClick={handleAddHome}
          >
            {homepic ? (
              <>
                <img
                  src={URL.createObjectURL(homepic)}
                  className="w-30 h-28 rounded-md object-cover"
                  alt=""
                />
              </>
            ) : (
              <>
                <div>
                  <MdUpload className="size-16 text-[#A0A0A0]" />
                </div>
                <p className="text-[#A0A0A0]">เพิ่มรูปภาพนักเรียนที่นี่</p>
                <p className="text-[#A0A0A0]">JPG, PNG (Max 5MB)</p>
              </>
            )}

          </div>

          {/* Hidden file input with a unique ID */}
          <input
            className="hidden"
            type="file"
            id="addhomepic"
            accept="image/jpeg, image/png"
            onChange={(e) => setHomepic(e.target.files[0])}
          />
         <fieldset className="fieldset my-6">
          <legend className="fieldset-legend">ชั้นเรียน :</legend>
          <input
            type="text"
            className="input w-64 md:w-92"
            placeholder="ชั้นเรียน"
          />
        </fieldset>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <h3>รูปถ่ายกับครอบครัว</h3>
          <div
            className={`btn btn-ghost flex flex-col py-30 px-28 border-1 rounded-md border-[#EFEFEF]`}
            onClick={handleAddFamily}
          >
            {familypic ? (
              <>
                <img
                  src={URL.createObjectURL(familypic)}
                  className="w-30 h-28 rounded-md object-cover"
                  alt=""
                />
              </>
            ) : (
              <>
                <div>
                  <MdUpload className="size-16 text-[#A0A0A0]" />
                </div>
                <p className="text-[#A0A0A0]">เพิ่มรูปภาพนักเรียนที่นี่</p>
                <p className="text-[#A0A0A0]">JPG, PNG (Max 5MB)</p>
              </>
            )}
          </div>

          {/* Hidden file input with a unique ID */}
          <input
            className="hidden"
            type="file"
            id="addfamilypic"
            accept="image/jpeg, image/png"
            onChange={(e) => setFamilypic(e.target.files[0])}
          />
          <fieldset className="fieldset my-6">
          <legend className="fieldset-legend">ชั้นเรียน :</legend>
          <input
            type="text"
            className="input w-64 md:w-92"
            placeholder="ชั้นเรียน"
          />
        </fieldset>
        </div>
      </div>


      <div className="flex items-center justify-between w-8/12 mx-auto">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">ชั้นเรียน :</legend>
          <textarea
            className="textarea textarea-lg w-64 md:w-128"
            placeholder="ชั้นเรียน"
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
