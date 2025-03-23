import { FaPlus } from "react-icons/fa6";

const StudentPicAdd = ({ set, get, id, onClick }) => {
  return (
    <div
      className="w-[13.2rem] h-[17.6rem] border rounded-lg flex justify-center items-center bg-white border-gray-400 hover:bg-gray-50 hover:cursor-pointer p-1"
      onClick={onClick}
    >
      {get ? (
        <img
          src={URL.createObjectURL(get)}
          className="w-full h-full object-cover"
        />
      ) : (
        <FaPlus className="size-24 text-gray-600" />
      )}
      <input
        type="file"
        className="hidden"
        id={id}
        onChange={(e) => set(e.target.files[0])}
      />
    </div>
  );
};

export default StudentPicAdd;
