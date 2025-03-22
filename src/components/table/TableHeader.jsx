// ทำ columns เป็น props เพื่อที่จะแสดงคอลัมน์ที่ต้องการแบบไดนามิก
const TableHeader = ({ columns }) => {
    return (
      <thead>
        <tr>
          <th>
            <input type="checkbox" className="checkbox" />
          </th>
          {columns.map((col, index) => (
            <th key={index} className="text-center">{col}</th>
          ))}
          <th className="text-center">แก้ไข/ลบ</th>
        </tr>
      </thead>
    );
  };
  

export default TableHeader