"use client";
import { useRouter } from "next/navigation";

const FamilyRelations = ({ setFamilyRelation, familyRelation }) => {
  const router = useRouter();
  return (
    <div>
      <div className="card w-80 md:w-full bg-base-100 card-md shadow-sm md:px-20 md:py-10">
        <div className="card-body flex flex-col">
          <h2 className="card-title text-center">ข้อมูลความสำพันธ์ในครอบครัว</h2>
          {/* สมาชิกในครอบครัว */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend ">
              จำนวนสมาชิกในครัวเรือน ( รวมตัวนักเรียน ){" "}
              <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator w-30"
              type="number"
              required
              placeholder="กรอกจำนวนสมาชิกในครัวเรือน"
            />
            <div className="validator-hint">
              กรุณากรอกจำนวนสมาชิกในครัวเรือน
            </div>
          </fieldset>
          {/* เวลาที่อยู๋กับผู้ปกครอง */}
          <fieldset className="fieldset flex-1">
            <legend className="fieldset-legend text-sm">
              สมาชิกในครอบครัวมีเวลาอยู่ร่วมกันกี่ชั่วโมงต่อวัน
              <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator w-30"
              type="number"
              required
              placeholder="กรอกชั่วโมง"
            />
            <div className="validator-hint">
              กรุณากรอกเวลาที่อยู่ร่วมกันในครอบครัว
            </div>
          </fieldset>
          <p className="text-sm">
            ความสัมพันธ์ระหว่างนักเรียนกับสมาชิกในครอบครัว{" "}
            <span className="text-red-600">*</span>
          </p>
          {/* ความสนิทสมกับพ่อ */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              บิดา <span className="text-red-600">*</span>
            </legend>
            <select defaultValue="กรุณาเลือก" className="select validator">
              <option disabled={true}>กรุณาเลือก</option>
              <option>สนิทสนม</option>
              <option>เฉย</option>
              <option>ขัดแย้ง</option>
              <option>ห่างเหิน</option>
            </select>
            <div className="validator-hint">
              กรุณาเลือกความสัมพันธ์ระหว่างบิดา
            </div>
          </fieldset>
          {/* ความสนิทสมกับแม่ */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              มารดา <span className="text-red-600">*</span>
            </legend>
            <select defaultValue="กรุณาเลือก" className="select validator">
              <option disabled={true}>กรุณาเลือก</option>
              <option>สนิทสนม</option>
              <option>เฉย</option>
              <option>ขัดแย้ง</option>
              <option>ห่างเหิน</option>
            </select>
            <div className="validator-hint">
              กรุณาเลือกความสัมพันธ์ระหว่างมารดา
            </div>
          </fieldset>
          {/* ความสนิทสมกับพี่ชาย/น้องชาย */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              พี่ชาย/น้องชาย <span className="text-red-600">*</span>
            </legend>
            <select defaultValue="กรุณาเลือก" className="select validator">
              <option disabled={true}>กรุณาเลือก</option>
              <option>สนิทสนม</option>
              <option>เฉย</option>
              <option>ขัดแย้ง</option>
              <option>ห่างเหิน</option>
            </select>
            <div className="validator-hint">
              กรุณาเลือกความสัมพันธ์ระหว่างพี่ชาย/น้องชาย
            </div>
          </fieldset>
          {/* ความสนิทสมกับพี่สาว/น้องสาว */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              พี่สาว/น้องสาว <span className="text-red-600">*</span>
            </legend>
            <select defaultValue="กรุณาเลือก" className="select validator">
              <option disabled={true}>กรุณาเลือก</option>
              <option>สนิทสนม</option>
              <option>เฉย</option>
              <option>ขัดแย้ง</option>
              <option>ห่างเหิน</option>
            </select>
            <div className="validator-hint">
              กรุณาเลือกความสัมพันธ์ระหว่างพี่สาว/น้องสาว
            </div>
          </fieldset>
          {/* ความสนิทสมกับปู่/ย่า/ตา/ยาย */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              ปู่/ย่า/ตา/ยาย <span className="text-red-600">*</span>
            </legend>
            <select defaultValue="กรุณาเลือก" className="select validator">
              <option disabled={true}>กรุณาเลือก</option>
              <option>สนิทสนม</option>
              <option>เฉย</option>
              <option>ขัดแย้ง</option>
              <option>ห่างเหิน</option>
            </select>
            <div className="validator-hint">
              กรุณาเลือกความสัมพันธ์ระหว่างปู่/ย่า/ตา/ยาย
            </div>
          </fieldset>
          {/* ความสนิทสมกับญาติ */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              ญาติ <span className="text-red-600">*</span>
            </legend>
            <select defaultValue="กรุณาเลือก" className="select validator">
              <option disabled={true}>กรุณาเลือก</option>
              <option>สนิทสนม</option>
              <option>เฉย</option>
              <option>ขัดแย้ง</option>
              <option>ห่างเหิน</option>
            </select>
            <div className="validator-hint">
              กรุณาเลือกความสัมพันธ์ระหว่างญาติ
            </div>
          </fieldset>
          {/* อื่นๆและมีหรือไม่มี */}
          <div className="">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">อื่นๆ</legend>
              <input
                className="input validator"
                type="text"
                placeholder="กรอกญาติอื่นๆ"
              />
            </fieldset>
            <fieldset className="fieldset">
              <select defaultValue="ไม่มี" className="select validator">
                <option disabled={true}>กรุณาเลือก</option>
                <option>มี</option>
                <option>ไม่มี</option>
              </select>
              <div className="validator-hint">
                กรุณาเลือกความสัมพันธ์ระหว่างญาติ
              </div>
            </fieldset>
          </div>
          <p className="text-sm">
            กรณีที่ผู้ปกครองไม่อยู่บ้าน ฝากเด็กนักเรียนอยู่บ้านกับใคร{" "}
            <span className="text-red-600">*</span>
          </p>
          {/* กรณีที่ผู้ปกครองไม่อยู่บ้าน ฝากเด็กนักเรียนอยู่บ้านกับใคร */}
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>ญาติ</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>เพื่อนบ้าน</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>นักเรียนอยู่บ้านด้วยตัวเอง</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>
                    อื่นๆ ระบุ
                    <input
                      className="input validator w-24 sm:w-32 md:w-40 lg:w-52 ml-2"
                      type="text"
                      placeholder="บุคคลอื่นๆ"
                    />
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              รายได้รวมของครัวเรือน <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator"
              type="number"
              required
              placeholder="กรอกรายได้รวมของครัวเรือน"
            />
            <div className="validator-hint">กรุณากรอกรายได้รวมของครัวเรือน</div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              นักเรียนได้เงินมาโรงเรียนวันละกี่บาท{" "}
              <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator"
              type="number"
              required
              placeholder="กรอกเงินค่าขนม"
            />
            <div className="validator-hint">กรุณากรอกเงินค่าขนม</div>
          </fieldset>

          {/* นักเรียนได้รับค่าใช้จ่ายจาก */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              นักเรียนได้รับค่าใช้จ่ายจาก{" "}
              <span className="text-red-600">*</span>
            </legend>
            <select defaultValue="บิดา" className="select validator">
              <option disabled={true}>กรุณาเลือก</option>
              <option>บิดา</option>
              <option>มารดา</option>
              <option>พี่สาว</option>
              <option>พี่ชาย</option>
              <option>ปู่</option>
              <option>ย่า</option>
              <option>ตา</option>
              <option>ยาย</option>
              <option>ญาติ</option>
            </select>
            <div className="validator-hint">
              กรุณาเลือกความสัมพันธ์ระหว่างญาติ
            </div>
          </fieldset>

          <div className="flex flex-wrap md:flex-row gap-4">
            {/* อาชีพที่ทำรายได้พิเศษ */}
            <fieldset className="fieldset flex-1 min-w-[250px]">
              <legend className="fieldset-legend">
                นักเรียนทำงานรายได้พิเศษ อาชีพ{" "}
                <span className="text-red-600">*</span>
              </legend>
              <input
                className="input validator w-full"
                type="text"
                required
                placeholder="กรอกอาชีพที่ทำ"
              />
              <div className="validator-hint">กรุณากรอกอาชีพของนักเรียน</div>
            </fieldset>

            {/* รายได้ */}
            <fieldset className="fieldset flex-1 min-w-[250px]">
              <legend className="fieldset-legend">
                รายได้วันละ <span className="text-red-600">*</span>
              </legend>
              <div className="flex items-center gap-2">
                <input
                  className="input validator"
                  type="number"
                  placeholder="ระบุรายได้"
                />
                <span className="text-gray-600">บาท</span>
              </div>
              <div className="validator-hint">กรุณากรอกรายได้ของนักเรียน</div>
            </fieldset>
          </div>
          <p className="text-sm">
            สิ่งที่ผู้ปกครองต้องการให้โรงเรียนช่วยเหลือนักเรียน *{" "}
            <span className="text-red-600">*</span>
          </p>
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>ด้านการเรียน</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>ด้านพฤติกรรม</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>ด้านเศรษฐกิจ (เช่น ขอรับทุน)</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>
                    อื่นๆ ระบุ
                    <input
                      className="input validator w-24 sm:w-32 md:w-40 lg:w-52 ml-2"
                      type="text"
                      placeholder="บุคคลอื่นๆ"
                    />
                  </span>
                </label>
              </div>
            </fieldset>
          </div>
          <p className="text-sm">
            ความช่วยเหลือที่ครอบครัวเคยได้รับจากหน่วยงานหรือต้องการได้รับการช่วยเหลือ{" "}
            <span className="text-red-600">*</span>
          </p>
          <div>
            <fieldset className="fieldset mb-8">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>เบี้ยผู้สูงอายุ</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>เบี้ยคนพิการ</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>
                    อื่นๆ ระบุ
                    <input
                      className="input validator w-24 sm:w-32 md:w-40 lg:w-52 ml-2"
                      type="text"
                      placeholder="บุคคลอื่นๆ"
                    />
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              ความห่วงใยของผู้ปกครองที่มีต่อนักเรียน{" "}
              <span className="text-red-600">*</span>
            </legend>
            <textarea
              className="input validator w-full h-40"
              type="text"
              required
              placeholder="กรอกอาชีพของบิดา"
            />
            <div className="validator-hint">
              กรุณากรอกความห่วงใยของผู้ปกครองที่มีต่อนักเรียน
            </div>
          </fieldset>

          <div className="flex justify-between items-center w-full p-4">
            <button
              onClick={() => router.push("/student/add-selfinfo")}
              className="btn btn-prev-next"
            >
              ก่อนหน้า
            </button>
            <button
              onClick={() => router.push("/student/add-familystatus")}
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
    </div>
  );
};

export default FamilyRelations;
