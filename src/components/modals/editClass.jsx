import React from "react";

const ModalEditClass = () => {
  return (
    <dialog id="edit_class" className="modal">
      <div className="modal-box flex flex-col items-center justify-center w-11/12">
        <h3 className="font-bold text-lg text-center">แก้ไขชั้นเรียน</h3>
        <div className="flex flex-col items-center justify-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">ชั้นเรียน :</legend>
            <input
              type="text"
              className="input w-64 md:w-72"
              placeholder="ชั้นเรียน"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">เลือกคุณครูที่ปรึกษา :</legend>
            <select className="input w-64 md:w-72 border rounded-md p-2">
              <option value="">เลือกคุณครูที่ปรึกษา</option>
              <option value="mr">ครูนัฐวุฒ แฝงนาง</option>
              <option value="mrs">ครูภูวดล ปิ่ยกูล</option>
              <option value="ms">ครูนงรักษ์ ทับบัว</option>
            </select>
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
  );
};

export default ModalEditClass;
