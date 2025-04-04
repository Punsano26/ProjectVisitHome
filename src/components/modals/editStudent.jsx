"use client";

const ModalEditStudent = ({ std, id }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box flex flex-col items-center justify-center w-11/12">
        <h3 className="font-bold text-lg text-center">แก้ไขนักเรียน</h3>
        <div className="flex flex-col items-center justify-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">คำนำหน้าชื่อ :</legend>
            <select
              className="input w-64 md:w-72 border rounded-md p-2"
              value={std.prefix}
            >
              <option value="">เลือกคำนำหน้า</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">ชื่อ :</legend>
            <input
              type="text"
              className="input w-64 md:w-72"
              placeholder="Type here"
              value={std.firstname}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">นามสกุล :</legend>
            <input
              type="text"
              className="input w-64 md:w-72"
              placeholder="Type here"
              value={std.lastname}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">เลขประจำตัว :</legend>
            <input
              type="text"
              className="input w-64 md:w-72"
              placeholder="Type here"
              value={std.mypass}
            />
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

export default ModalEditStudent;
