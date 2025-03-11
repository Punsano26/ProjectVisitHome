import React from "react";

const addyear = () => {
  return (
    <div>
      <dialog id="add_year" className="modal">
        <div className="modal-box flex flex-col items-center justify-center w-11/12">
          <h3 className="font-bold text-lg text-center">ปีการศึกษา</h3>
          <input className="text-center rounded-md mt-2" type="date" />
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

export default addyear;
