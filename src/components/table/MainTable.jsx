import TableHeader from "@components/table/TableHeader";
import TableBody from "@components/table/TableBody";

const MainTable = ({ columns, data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="table">
          <TableHeader columns={columns} />
          <TableBody data={data} columns={columns} />
        </table>
      </div>
    );
  };
  
  export default MainTable;
  