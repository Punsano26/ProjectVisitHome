export async function GET() {
    return Response.json([
        {
            id: 1, 
            no: 1, 
            mypass: "25002",
            prefix: "นาย",
            firstname: "อัครเดช",
            lastname: "ศรีนวล",
            status_visit: "เยี่ยมแล้ว"
        },
        {
            id: 2, 
            no: 2, 
            mypass: "25003",
            prefix: "นาย",
            firstname: "เดชกร",
            lastname: "สะอาด",
            status_visit: "ยังไม่ได้เยี่ยม"
        },
        {
            id: 3, 
            no: 3, 
            mypass: "25004",
            prefix: "นางสาว",
            firstname: "กาญจนา",
            lastname: "บุญมาก",
            status_visit: "เยี่ยมแล้ว"
        },
        {
            id: 4, 
            no: 4, 
            mypass: "25005",
            prefix: "นาย",
            firstname: "ศุภณัฐ",
            lastname: "ทองดี",
            status_visit: "ยังไม่ได้เยี่ยม"
        },
        {
            id: 5, 
            no: 5, 
            mypass: "25006",
            prefix: "นาง",
            firstname: "จิราภรณ์",
            lastname: "แซ่ลิ้ม",
            status_visit: "เยี่ยมแล้ว"
        }
    ]);
}
