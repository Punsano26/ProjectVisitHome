import * as yup from "yup";

const textOnly = /^[\u0E00-\u0E7F]+$/;
const numberOnly = /^\d+$/;
const numberAndDot = /^\d+(\.\d+)?$/;

export const selfInfoSchema = yup.object().shape({
  stdName: yup
    .string()
    .matches(textOnly, { message: "ชื่อควรเป็นภาษาไทย" })
    .required("กรุณากรอกชื่อ"),
  classroom: yup.string().required("กรุณาเลือกชั้นเรียน"),
  stdNumber: yup
    .string()
    .matches(numberOnly, { message: "กรุณากรอกเป็นตัวเลข" })
    .required("กรุณากรอกเลขที่"),
  stdPhone: yup
    .string()
    .matches(numberOnly, { message: "เบอร์โทรศัพท์ควรเป็นตัวเลข" })
    .required("กรุณากรอเบอร์โทรศัพท์"),
  dadName: yup
    .string()
    .matches(textOnly, { message: "ชื่อควรเป็นภาษาไทย" })
    .required("กรุณากรอกชื่อ"),
  dadCareer: yup
    .string()
    .matches(textOnly, { message: "อาชี่พควรกรอกเป็นตัวอักษร" })
    .required("กรุณากรอกเลขที่"),
  dadPhone: yup
    .string()
    .matches(numberOnly, { message: "เบอร์โทรศัพท์ควรเป็นตัวเลข" })
    .required("กรุณากรอเบอร์โทรศัพท์"),
  momName: yup
    .string()
    .matches(textOnly, { message: "ชื่อควรเป็นภาษาไทย" })
    .required("กรุณากรอกชื่อ"),
  momCareer: yup
    .string()
    .matches(textOnly, { message: "อาชี่พควรกรอกเป็นตัวอักษร" })
    .required("กรุณากรอกเลขที่"),
  momPhone: yup
    .string()
    .matches(numberOnly, { message: "เบอร์โทรศัพท์ควรเป็นตัวเลข" })
    .required("กรุณากรอเบอร์โทรศัพท์"),
  dadAndMomStatus: yup.string().required("กรุณาเลือกสถานะ"),
  parentRelation: yup.string().required("กรุณาเลือกคำตอบ"),
  parentName: yup
    .string()
    .matches(textOnly, { message: "ชื่อควรเป็นภาษาไทย" })
    .required("กรุณากรอกชื่อ"),
  parentCareer: yup
    .string()
    .matches(textOnly, { message: "อาชี่พควรกรอกเป็นตัวอักษร" })
    .required("กรุณากรอกเลขที่"),
  parentPhone: yup
    .string()
    .matches(numberOnly, { message: "เบอร์โทรศัพท์ควรเป็นตัวเลข" })
    .required("กรุณากรอเบอร์โทรศัพท์"),
  lat: yup
    .string()
    .matches(numberAndDot, { message: "กรุณากรอกเป็นตัวเลข" })
    .required("กรุณาเลือกตำแหน่งบ้าน"),
  lng: yup
    .string()
    .matches(numberAndDot, { message: "กรุณากรอกเป็นตัวเลข" })
    .required("กรุณาเลือกตำแหน่งบ้าน"),
});
