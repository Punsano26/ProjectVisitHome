"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import StudentPicAdd from "@componentsStudentPicAdd";

const AddSelfInfo = () => {
  const router = useRouter();
  const [studentPic, setStudentPic] = useState(null);
  const [parentCheck, setParentCheck] = useState(false);

  const handleSelectPic = () => {
    document.getElementById("stdPic").click();
  };

  const handleParentCheck = () => {
    setParentCheck((prev) => !prev);
    console.log(parentCheck);
  };

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
          <div className="flex justify-center my-2">
            <StudentPicAdd
              id={"stdPic"}
              set={setStudentPic}
              get={studentPic}
              onClick={handleSelectPic}
            />
          </div>
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
              ชื่อ - นามสกุล บิดา <span className="text-red-600">*</span>
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
              ชื่อ - นามสกุล มารดา <span className="text-red-600">*</span>
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
          <fieldset className="fieldset mb-8">
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
          {/* Parent section */}
          <fieldset className="fieldset mb-8">
            <legend className="fieldset-legend">
              ผู้ปกครองของนักเรียน ( กรณีที่ผู้ปกครองไม่ใช่บิดา หรือ มารดา )
            </legend>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={handleParentCheck}
                className="checkbox"
              />
              <span>เรียกใช้ข้อมูลจากบิดา หรือ มารดา</span>
            </div>
          </fieldset>
          <fieldset className="fieldset mb-8">
            <legend className="fieldset-legend">
              ความสัมพันธ์ของผู้ปกครองกับนักเรียน
            </legend>
            <select
              name="parent-relation"
              id="parent-relation"
              className="select"
            >
              <option value="บิดา">บิดา</option>
              <option value="มารดา">มารดา</option>
              <option value="ลุง">ลุง</option>
              <option value="ป้า">ป้า</option>
              <option value="น้า">น้า</option>
              <option value="อา">อา</option>
              <option value="ปู่">ปู่</option>
              <option value="ย่า">ย่า</option>
              <option value="ตา">ตา</option>
              <option value="ยาย">ยาย</option>
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              ชื่อ - นามสกุล ผู้ปกครอง<span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator w-full"
              type="text"
              required
              placeholder="กรอกชื่อและนามสกุลของผู้ปกครอง"
              disabled={parentCheck === true}
            />
            <div className="validator-hint">
              กรุณากรอกชื่อและนามสกุลของผู้ปกครอง
            </div>
          </fieldset>
          <div className="flex w-full space-x-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                อาชีพ <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="กรอกอาชีพของผู้ปกครอง"
              />
              <div className="validator-hint">กรุณากรอกอาชีพของผู้ปกครอง</div>
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">
                เบอร์โทรศัพท์ <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="กรอกเบอร์โทรศัพท์ของผู้ปกครอง"
              />
              <div className="validator-hint">
                กรุณากรอกเบอร์โทรศัพท์ของผู้ปกครอง
              </div>
            </fieldset>
          </div>
          {/* lat lng */}
          <div className="flex w-full space-x-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                ละติจูด <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="ละติจูด"
              />
              <div className="validator-hint">กรุณากรอกละติจูด</div>
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">
                ลองจิจูด <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator"
                type="text"
                required
                placeholder="ลองจิจูด"
              />
              <div className="validator-hint">กรุณากรอกลองจิจูด</div>
            </fieldset>
          </div>
          {/* Map btn */}
          <button className="btn btn-login">กำหนดตำแหน่งบ้าน</button>
          {/* Next and Submit and Cancel */}
          <div className="flex space-x-22 justify-end mt-8">
            <button className="btn btn-danger">ยกเลิก</button>
            <button className="btn btn-scc">บันทึก</button>
            <button className="btn btn-prev-next">ถัดไป</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSelfInfo;
