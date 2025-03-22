import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data?.map((item, index) => (
        <tr key={index}>
          <td>
            <input type="checkbox" className="checkbox" />
          </td>
          {columns?.map((column, idex) => (
            <td key={idex} className="text-center">{item[column]}</td>
          ))}
          <td className="flex gap-4 items-center justify-center">
            <BiSolidEdit />
            <AiOutlineDelete />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody