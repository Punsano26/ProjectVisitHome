import React from "react";

const addclass = () => {
  return (
    <div>
      <dialog id="add_class" className="modal">
        <div className="modal-box flex flex-col items-center justify-center w-11/12">
          <h3 className="font-bold text-lg text-center">เพิ่มชั้นเรียน</h3>
          <div className="flex flex-col items-center justify-center">
            <input className="text-center mt-2 border" placeholder="ชื่อชั้นเรียน" type="text" />
            <details className="dropdown rounded-md mt-2">
              <summary className="btn m-1">เลือกคุณครู</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
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

export default addclass;
