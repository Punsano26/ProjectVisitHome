import React from 'react'

const addpersonnel = () => {
    return (
        <div>
          <dialog id="add_personnel" className="modal">
            <div className="modal-box flex flex-col items-center justify-center w-11/12">
              <h3 className="font-bold text-lg text-center">เพิ่มข้อมูลบุคลากร</h3>
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
                  <legend className="fieldset-legend">ตำแหน่ง :</legend>
                  <select className="input w-64 md:w-72 border rounded-md p-2">
                    <option value="">เลือกตำแหน่ง</option>
                    <option value="mr">ครูที่ปรึกษา</option>
                    <option value="mrs">เจ้าหน้าที่ฝ่ายทะเบียน</option>
                  
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
        </div>
      );
}

export default addpersonnel;