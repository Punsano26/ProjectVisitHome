"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AddSelfInfo = () => {
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
            className="step hover:cursor-pointer"
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
        <div className="bg-base-200 w-[50%] px-28 py-8 rounded-2xl">
          {/* Student Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              ชื่อ - นามสกุล <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator w-full"
              type="text"
              required
              placeholder="กรอกชื่อและนามสกุลของนักเรียน"
            />
            <div className="validator-hint">
              กรุณากรอกชื่อและนามสกุลของนักเรียน
            </div>
          </fieldset>
          {/* Class */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              ชั้นเรียน <span className="text-red-600">*</span>
            </legend>
            <select defaultValue="เลือกชั้นเรียน" className="select validator">
              <option disabled={true}>เลือกชั้นเรียน</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
            <div className="validator-hint">กรุณาเลือกชั้นเรียน</div>
          </fieldset>
          {/* Number and Phone */}
          <div className="flex w-full space-x-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                เลขที่ <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="กรอกเลขที่"
              />
              <div className="validator-hint">กรุณากรอกเลขที่</div>
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">
                เบอร์โทรศัพท์ <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="กรอกเบอร์โทรศัพท์ของนักเรียน"
              />
              <div className="validator-hint">
                กรุณากรอกเบอร์โทรศัพท์ของนักเรียน
              </div>
            </fieldset>
          </div>
          {/* Dad Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              ชื่อ - นามสกุล <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator w-full"
              type="text"
              required
              placeholder="กรอกชื่อและนามสกุลของบิดา"
            />
            <div className="validator-hint">กรุณากรอกชื่อและนามสกุลของบิดา</div>
          </fieldset>
          {/* Job and Phone */}
          <div className="flex w-full space-x-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                อาชีพ <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="กรอกอาชีพของบิดา"
              />
              <div className="validator-hint">กรุณากรอกอาชีพของบิดา</div>
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">
                เบอร์โทรศัพท์ <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="กรอกเบอร์โทรศัพท์ของบิดา"
              />
              <div className="validator-hint">
                กรุณากรอกเบอร์โทรศัพท์ของบิดา
              </div>
            </fieldset>
          </div>
          {/* Mom Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              ชื่อ - นามสกุล <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator w-full"
              type="text"
              required
              placeholder="กรอกชื่อและนามสกุลของมารดา"
            />
            <div className="validator-hint">
              กรุณากรอกชื่อและนามสกุลของมารดา
            </div>
          </fieldset>
          {/* Number and Phone */}
          <div className="flex w-full space-x-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                อาชีพ <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="กรอกอาชีพของมารดา"
              />
              <div className="validator-hint">กรุณากรอกอาชีพของมารดา</div>
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">
                เบอร์โทรศัพท์ <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="กรอกเบอร์โทรศัพท์ของมารดา"
              />
              <div className="validator-hint">
                กรุณากรอกเบอร์โทรศัพท์ของมารดา
              </div>
            </fieldset>
          </div>
          {/* Dad - Mom status */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              สถานะของบิดา - มารดา <span className="text-red-600">*</span>
            </legend>
            <div className="flex space-x-8 w-full">
              <div className="flex space-x-1.5 items-center">
                <input type="radio" name="status" className="radio" />
                <span>อยู่ร่วมกัน</span>
              </div>
              <div className="flex space-x-1.5 items-center">
                <input type="radio" name="status" className="radio" />
                <span>แยกกันอยู่</span>
              </div>
              <div className="flex space-x-1.5 items-center">
                <input type="radio" name="status" className="radio" />
                <span>อย่าร้าง</span>
              </div>
              <div className="flex space-x-1.5 items-center">
                <input type="radio" name="status" className="radio" />
                <span>บิดาเสียชีวิต</span>
              </div>
              <div className="flex space-x-1.5 items-center">
                <input type="radio" name="status" className="radio" />
                <span>มารดาเสียชีวิต</span>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AddSelfInfo;
