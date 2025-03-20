export async function GET() {
  return Response.json([
    {
      _id: 1,
      email: "12345bp@bangpae.ac.th",
      prefix: "นาย",
      name: "เทสดี รสเผ็ด",
      role: "admin",
    },
    {
      _id: 2,
      email: "23456bp@bangpae.ac.th",
      prefix: "นางสาว",
      name: "สมหญิง ศีลเสมอ",
      role: "teacher",
    },
    {
      _id: 3,
      email: "34567bp@bangpae.ac.th",
      prefix: "นาย",
      name: "ชาติชาย ใจกล้า",
      role: "student",
    },
    {
      _id: 4,
      email: "45678bp@bangpae.ac.th",
      prefix: "เด็กชาย",
      name: "ซุกซน หายไปไหน",
      role: "student",
    },
    {
      _id: 5,
      email: "56789bp@bangpae.ac.th",
      prefix: "เด็กหญิง",
      name: "น้ำนิ่ง ไหลเชี่ยว",
      role: "student",
    },
    {
      _id: 6,
      email: "67890bp@bangpae.ac.th",
      prefix: "นาง",
      name: "สุขใจ รวยมาก",
      role: "teacher",
    },
  ]);
}
