import React from "react";

const FamilyRelations = () => {
  return (
    <div>
      
      <div className="card w-96 md:w-full bg-base-100 card-lg shadow-sm">
        <div className="card-body flex flex-col">
          <h2 className="card-title text-center">ข้อมูลความสำคัญในครอบครัว</h2>
          {/* สมาชิกในครอบครัว */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend ">
              จำนวนสมาชิกในครัวเรือน ( รวมตัวนักเรียน ){" "}
              <span className="text-red-600">*</span>
            </legend>
            <input
              className="input validator w-20"
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
              className="input validator w-20"
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
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyRelations;
