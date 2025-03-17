"use client";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import ModalAddYear from "../../../components/modals/addyear";

const page = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const res = await fetch("/api/years");
        const data = await res.json();
        setYears(data);
      } catch (error) {
        console.log("Error fetch years", error);
      }
    };
    fetchYears();
  }, []);

  if (!years || years.length === 0) {
    return (
      <>
        <div className="w-full h-screen">
          <div className="m-6">
            <button
              className="btn btn-outline size-40 rounded-xl"
              onClick={() => document.getElementById("add_year").showModal()}
            >
              <FaPlus className="size-36" />
            </button>
          </div>
        </div>
        <ModalAddYear />
      </>
    );
  }
  return (
    <>
      <div className="w-full h-screen">
        <div className="m-6 grid grid-cols-8 gap-3">
          {years?.length > 0 &&
            years.map((year, index) => {
              return (
                <a
                  href="/admin/add-class"
                  className="btn btn-outline size-40 rounded-xl text-4xl"
                  key={index}
                >
                  {year.year}
                </a>
              );
            })}
        </div>
      </div>
      <ModalAddYear />
    </>
  );
};

export default page;
