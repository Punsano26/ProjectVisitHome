"use client";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import ModalAddYear from "../../../components/modals/addyear";

const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="m-4">
          <button onClick={()=>document.getElementById('add_year').showModal()} >
            <CiSquarePlus className="w-24 h-24 sm:w-40 sm:h-40" />
          </button>
        </div>
      </div>
      <ModalAddYear/>
    </>
  );
};

export default page;
