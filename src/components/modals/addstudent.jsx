import React from "react";

const addstudent = () => {
  return (
    <div>
      <dialog id="add_student" className="modal">
        <div className="modal-box flex flex-col items-center justify-center w-11/12">
          <h3 className="font-bold text-lg text-center">เพิ่มนักเรียน</h3>
          <div className="flex flex-col items-center justify-center">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">คำนำหน้าชื่อ :</legend>
              <select className="input w-64 md:w-72 border rounded-md p-2">
                <option value="">เลือกคำนำหน้า</option>
                <option value="mr">นาย</option>
                <option value="mrs">นาง</option>
                <option value="ms">นางสาว</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">ชื่อ :</legend>
              <input
                type="text"
                className="input w-64 md:w-72"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">นามสกุล :</legend>
              <input
                type="text"
                className="input w-64 md:w-72"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">เลขประจำตัว :</legend>
              <input
                type="text"
                className="input w-64 md:w-72"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">รหัสผ่าน :</legend>
              <input
                type="password"
                className="input w-64 md:w-72 validator"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="ต้องมากกว่า 8 ตัวอักษร รวมถึงตัวเลข ตัวอักษรพิมพ์เล็ก ตัวอักษรพิมพ์ใหญ่"
              />
              <p className="validator-hint">
                จะต้องมากกว่า 8 ตัวอักษร รวมถึง
                <br />
                อย่างน้อยหนึ่งหมายเลข
                <br />
                อย่างน้อยต้องมีตัวอักษรพิมพ์เล็กหนึ่งตัว
                <br />
                อย่างน้อยต้องมีตัวอักษรพิมพ์ใหญ่หนึ่งตัว
              </p>
            </fieldset>
          </div>

          <div className="modal-action">
            <form method="dialog mt-2">
              <button className="btn bg-red-400 mr-8">ยกเลิก</button>
              <button className="btn bg-green-400">บันทึก</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default addstudent;
