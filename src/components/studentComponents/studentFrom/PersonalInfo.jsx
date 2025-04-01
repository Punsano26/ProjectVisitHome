"use client";
import StudentPicAdd from "@componentsStudentPicAdd";
import { useRouter } from "next/navigation";

const PersonalInfo = ({
  studentPic,
  setStudentPic,
  parentCheck,
  setParentCheck,
  formik,
}) => {
  const router = useRouter();
  const handleSelectPic = () => {
    document.getElementById("stdPic").click();
  };

  const handleParentCheck = () => {
    setParentCheck((prev) => !prev);
    console.log(parentCheck);
  };

  return (
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
            value={formik.values.stdName}
            onChange={formik.handleChange}
            name="stdName"
            type="text"
            required
            pattern="[\u0E00-\u0E7F]+"
            placeholder="กรอกชื่อและนามสกุลของนักเรียน"
          />
          <div className="validator-hint">{formik.errors.stdName}</div>
        </fieldset>
        {/* Class */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            ชั้นเรียน <span className="text-red-600">*</span>
          </legend>
          <select
            className="select validator"
            value={formik.values.classroom}
            onChange={formik.handleChange}
            name="classroom"
          >
            <option>5/1</option>
            <option>5/2</option>
            <option>5/3</option>
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
              value={formik.values.stdNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="stdNumber"
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
              value={formik.values.stdPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="stdPhone"
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
            value={formik.values.dadName}
            onChange={formik.handleChange}
            name="dadName"
            type="text"
            required
            pattern="[\u0E00-\u0E7F]+"
            placeholder="กรอกชื่อและนามสกุลของบิดา"
          />
          <div className="validator-hint">{formik.errors.dadName}</div>
        </fieldset>
        {/* Job and Phone */}
        <div className="flex w-full space-x-10">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              อาชีพ <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator"
              value={formik.values.dadCareer}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dadCareer"
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
              value={formik.values.dadPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="dadPhone"
              type="text"
              required
              placeholder="กรอกเบอร์โทรศัพท์ของบิดา"
            />
            <div className="validator-hint">กรุณากรอกเบอร์โทรศัพท์ของบิดา</div>
          </fieldset>
        </div>
        {/* Mom Name */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            ชื่อ - นามสกุล มารดา <span className="text-red-600">*</span>
          </legend>
          <input
            className="input validator w-full"
            value={formik.values.momName}
            onChange={formik.handleChange}
            name="momName"
            type="text"
            required
            pattern="[\u0E00-\u0E7F]+"
            placeholder="กรอกชื่อและนามสกุลของมารดา"
          />
          <div className="validator-hint">{formik.errors.momName}</div>
        </fieldset>
        {/* Job and Phone */}
        <div className="flex w-full space-x-10">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              อาชีพ <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator"
              value={formik.values.momCareer}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="momCareer"
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
              value={formik.values.momPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="momPhone"
              type="text"
              required
              placeholder="กรอกเบอร์โทรศัพท์ของมารดา"
            />
            <div className="validator-hint">กรุณากรอกเบอร์โทรศัพท์ของมารดา</div>
          </fieldset>
        </div>
        {/* Dad - Mom status */}
        <fieldset className="fieldset mb-8">
          <legend className="fieldset-legend">
            สถานะของบิดา - มารดา <span className="text-red-600">*</span>
          </legend>
          <div className="flex space-x-8 w-full">
            <div className="flex space-x-1.5 items-center">
              <input
                type="radio"
                value={formik.values.dadAndMomStatus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="dadAndMomStatus"
                className="radio"
              />
              <span>อยู่ร่วมกัน</span>
            </div>
            <div className="flex space-x-1.5 items-center">
              <input
                type="radio"
                value={formik.values.dadAndMomStatus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="dadAndMomStatus"
                className="radio"
              />
              <span>แยกกันอยู่</span>
            </div>
            <div className="flex space-x-1.5 items-center">
              <input
                type="radio"
                value={formik.values.dadAndMomStatus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="dadAndMomStatus"
                className="radio"
              />
              <span>อย่าร้าง</span>
            </div>
            <div className="flex space-x-1.5 items-center">
              <input
                type="radio"
                value={formik.values.dadAndMomStatus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="dadAndMomStatus"
                className="radio"
              />
              <span>บิดาเสียชีวิต</span>
            </div>
            <div className="flex space-x-1.5 items-center">
              <input
                type="radio"
                value={formik.values.dadAndMomStatus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="dadAndMomStatus"
                className="radio"
              />
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
            name="parentRelation"
            className="select"
            value={formik.values.parentRelation}
            onChange={formik.handleChange}
          >
            <option>บิดา</option>
            <option>มารดา</option>
            <option>ลุง</option>
            <option>ป้า</option>
            <option>น้า</option>
            <option>อา</option>
            <option>ปู่</option>
            <option>ย่า</option>
            <option>ตา</option>
            <option>ยาย</option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            ชื่อ - นามสกุล ผู้ปกครอง<span className="text-red-600">*</span>
          </legend>
          <input
            className="input validator w-full"
            value={formik.values.parentName}
            onChange={formik.handleChange}
            name="parentName"
            type="text"
            required
            pattern="[\u0E00-\u0E7F]+"
            placeholder="กรอกชื่อและนามสกุลของผู้ปกครอง"
            disabled={parentCheck === true}
          />
          <div className="validator-hint">{formik.errors.parentName}</div>
        </fieldset>
        <div className="flex w-full space-x-10">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              อาชีพ <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator"
              value={formik.values.parentCareer}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="parentCareer"
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
              value={formik.values.parentPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="parentPhone"
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
              value={formik.values.lat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lat"
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
              value={formik.values.lng}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lng"
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
        <div className="flex justify-end items-center w-full p-4">
          <button
            onClick={() => router.push("/student/add-relation")}
            className="btn btn-prev-next"
          >
            ถัดไป
          </button>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <button className="btn btn-danger">ยกเลิก</button>
          <button className="btn btn-scc">บันทึก</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
