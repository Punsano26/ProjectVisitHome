"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ใช้เพื่อเปลี่ยนหน้า
import { FaPlus } from "react-icons/fa6";
import ModalAddYear from "../../../components/modals/addyear";

const Page = () => {
  const [years, setYears] = useState([]);
  const router = useRouter(); // ใช้ router สำหรับเปลี่ยนเส้นทาง

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const res = await fetch("/api/years");
        const data = await res.json();
        setYears(data);
      } catch (error) {
        console.log("Error fetching years", error);
      }
    };
    fetchYears();
  }, []);

  const handleSelectYear = (year) => {
    localStorage.setItem("selectedYear", year); // บันทึกปีที่เลือก
    router.push("/admin/add-class"); // เปลี่ยนหน้าไปที่หน้าถัดไป
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="m-6 grid grid-cols-8 gap-3">
          {years.length > 0 ? (
            years.map((year, index) => (
              <button
                key={index}
                className="btn btn-outline size-40 rounded-xl text-4xl"
                onClick={() => handleSelectYear(year.year)}
              >
                {year.year}
              </button>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <button
                className="btn btn-outline size-40 rounded-xl"
                onClick={() => document.getElementById("add_year").showModal()}
              >
                <FaPlus className="size-36" />
              </button>
            </div>
          )}
        </div>
      </div>
      <ModalAddYear />
    </>
  );
};

export default Page;
