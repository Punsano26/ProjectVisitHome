"use client";
import * as yup from "yup";
import { useFormik } from "formik";

const addclass = () => {
  const { handleChange, values, handleBlur, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        grade: "",
        room: "",
        advisor: "",
      },
      validationSchema: yup.object().shape({
        grade: yup.string().required("กรุณาเลือกชั้นเรียน"),
        room: yup
          .string()
          .matches(/^\d+$/, { message: "กรุณากรอกเป็นตัวเลข" })
          .required("กรุณากรอกห้องเรียน"),
        advisor: yup.string().required("กรุณาเลือกครูที่ปรึกษา"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <dialog id="add_class" className="modal">
      <div className="modal-box flex flex-col items-center justify-center w-11/12">
        <h3 className="font-bold text-lg text-center">เพิ่มชั้นเรียน</h3>
        <div className="flex flex-col items-center justify-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">ชั้นเรียน :</legend>
            <select
              className="select validator w-64 md:w-72"
              name="grade"
              value={values.grade}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="1">ม.1</option>
              <option value="2">ม.2</option>
              <option value="3">ม.3</option>
              <option value="4">ม.4</option>
              <option value="5">ม.5</option>
              <option value="6">ม.6</option>
            </select>
            <div className="validator-hint">{errors.grade}</div>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">ห้อง :</legend>
            <input
              type="text"
              className="input validator w-64 md:w-72"
              placeholder="ห้องเรียน"
              name="room"
              pattern="\d+"
              required
              value={values.room}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className="validator-hint">{errors.room}</div>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">เลือกคุณครูที่ปรึกษา :</legend>
            <select
              className="select validator w-64 md:w-72 border rounded-md p-2"
              name="advisor"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.advisor}
            >
              <option value="ครูนัฐวุฒิ แฝงนาง">ครูนัฐวุฒิ แฝงนาง</option>
              <option value="ครูภูวดล ปิ่ยกูล">ครูภูวดล ปิ่ยกูล</option>
              <option value="ครูนงรักษ์ ทับบัว">ครูนงรักษ์ ทับบัว</option>
            </select>
            <div className="validator-hint">{errors.advisor}</div>
          </fieldset>
        </div>

        <div className="modal-action">
          <form method="dialog mt-2">
            <button className="btn bg-red-400 mr-8">ยกเลิก</button>
            <button onClick={handleSubmit} className="btn bg-green-400">
              บันทึก
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default addclass;
