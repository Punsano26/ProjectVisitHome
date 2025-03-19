import { MdUpload } from "react-icons/md";

const AddPicture = ({ set, get, onClick, id }) => {
  return (
    <>
      <div
        className={`btn btn-ghost flex flex-col py-30 px-28 border-1 rounded-md border-[#EFEFEF]`}
        onClick={onClick}
      >
        {get ? (
          <>
            <img
              src={URL.createObjectURL(get)}
              className="w-30 h-28 rounded-md object-cover"
              alt=""
            />
          </>
        ) : (
          <>
            <div>
              <MdUpload className="size-16 text-[#A0A0A0]" />
            </div>
            <p className="text-[#A0A0A0]">เพิ่มรูปภาพที่นี่</p>
            <p className="text-[#A0A0A0]">JPG, PNG (Max 5MB)</p>
          </>
        )}
      </div>{" "}
      <input
        className="hidden"
        type="file"
        id={id}
        accept="image/jpeg, image/png"
        onChange={(e) => set(e.target.files[0])}
      />
    </>
  );
};

export default AddPicture;
