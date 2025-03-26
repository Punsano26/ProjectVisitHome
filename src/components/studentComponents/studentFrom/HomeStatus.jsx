import React, { useState } from "react";

const HomeStatus = () => {
  return (
    <div>
      <div className="card w-80 md:w-full bg-base-100 card-md shadow-sm md:px-20 md:py-10">
        <div className="card-body flex flex-col">
          <h2 className="card-title text-center">ข้อมูลสถานะครัวเรือน</h2>
          <p className="text-base">
            ครัวเรือนมีภาวะพึ่งพิง (ตอบได้มากกว่า 1 ข้อ){" "}
            <span className="text-red-600">*</span>
          </p>
          <div>
            {" "}
            <fieldset className="fieldset mb-8 text-base">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>คนพิการ</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>ผู้สูงอายุเกิน 60 ปี</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>เป็นพ่อ/แม่ เลี้ยงเดี่ยว</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="status" className="checkbox" />
                  <span>
                    มีคนอายุ 15–65 ปีว่างงาน (ที่ไม่ใช่นักเรียน/นักศึกษา)
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          <p className="text-base">
            ประเภทที่อยู่อาศัย (ตอบได้มากกว่า 1 ข้อ){" "}
            <span className="text-red-600">*</span>
          </p>
          <div>
            <fieldset className="fieldset mb-8 text-base">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>บ้านตนเอง</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>บ้านเช่า</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>อาศัยอยู่กับผู้อื่น</span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* สภาพที่อยู่อาศัย */}

          <p className="text-base">
            สภาพที่อยู่อาศัย <span className="text-red-600">*</span>
          </p>
          <div>
            <fieldset className="fieldset mb-8 text-base">
              {/* ใช้ Grid สำหรับจัดเรียงให้รองรับหน้าจอมือถือและจอปกติ */}
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-3 mt-3">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>
                    สภาพบ้านชำรุดทรุดโทรม หรือ บ้านทำจากวัสดุพื้นบ้าน เช่น
                    ไม้ไผ่ ใบจากหรือวัสดุเหลือใช้
                  </span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>ไม่มีห้องส้วมในที่อยู่อาศัยและบริเวณ</span>
                </label>

                <label className="flex flex-col items-start space-y-2">
                  {/* Radio Button */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="status"
                      value="other"
                      className="radio"
                    />
                    <span>อื่นๆ ระบุ</span>
                  </div>

                  {/* Input: แสดงตลอดแต่ Disabled ถ้ายังไม่เลือก */}
                  <input
                    className="input validator w-24 sm:w-32 md:w-52 lg:w-52"
                    type="text"
                    placeholder="อื่นๆ"
                    disabled
                  />
                </label>
              </div>
            </fieldset>
          </div>

          {/* ยานพาหนะของครอบครัว */}
          <p className="text-base">
            ยานพาหนะของครอบครัว ( ตอบได้มากกว่า 1 ข้อ ){" "}
            <span className="text-red-600">*</span>
          </p>

          <div className="space-y-2">
            <fieldset className="fieldset mb-8 text-base">
              <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <span className="text-left">• รถมอเตอร์ไซค์</span>
                <div className="flex flex-row space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="motorcycle" className="radio" />
                    <span>มี</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="motorcycle" className="radio" />
                    <span>ไม่มี</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <span className="text-left">• รถยนต์ส่วนบุคคล</span>
                <div className="flex flex-row space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="car" className="radio" />
                    <span>มี</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="car" className="radio" />
                    <span>ไม่มี</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <span className="text-left">• รถบรรทุกเล็ก/ รถตู้</span>
                <div className="flex flex-row space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="truck" className="radio" />
                    <span>มี</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="truck" className="radio" />
                    <span>ไม่มี</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <span className="text-left">
                  • รถไถ/เกี่ยวข้าว/รถอีแต๋น/รถอื่นๆ
                </span>
                <div className="flex flex-row space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="other" className="radio" />
                    <span>มี</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="other" className="radio" />
                    <span>ไม่มี</span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          {/* เป็นเกษตรกร มีที่ดินทำกิน */}
          <p className="text-base">
            เป็นเกษตรกร มีที่ดินทำกิน ( รวมเช่า ){" "}
            <span className="text-red-600">*</span>
          </p>

          <div>
            <fieldset className="fieldset mb-8 text-base">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-3 mt-3">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="status" className="radio" />
                  <span>ไม่เกิน 1 ไร</span>
                </label>

                <label className="flex flex-col items-start space-y-2">
                  {/* Radio Button */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="status"
                      value="other"
                      className="radio"
                    />
                    <span>เป็นเจ้าของจำนวน</span>
                  </div>

                  {/* Input: แสดงตลอดแต่ Disabled ถ้ายังไม่เลือก */}
                  <div className="flex items-center gap-2">
                    <input
                      className="input validator"
                      type="number"
                      placeholder="0"
                    />
                    <span className="text-gray-600">ไร่</span>
                  </div>
                </label>

                <label className="flex flex-col items-start space-y-2">
                  {/* Radio Button */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="status"
                      value="other"
                      className="radio"
                    />
                    <span>เช่าจำนวน</span>
                  </div>

                  {/* Input: แสดงตลอดแต่ Disabled ถ้ายังไม่เลือก */}
                  <div className="flex items-center gap-2">
                    <input
                      className="input validator"
                      type="number"
                      placeholder="0"
                    />
                    <span className="text-gray-600">ไร่</span>
                  </div>
                </label>
              </div>
            </fieldset>
            <div className="flex justify-between items-center w-full p-4">
              <button className="btn btn-prev-next">ก่อนหน้า</button>
              <button className="btn btn-prev-next">ถัดไป</button>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <button className="btn btn-danger">ยกเลิก</button>
              <button className="btn btn-scc">บันทึก</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStatus;
