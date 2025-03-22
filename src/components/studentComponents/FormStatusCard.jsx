import React from "react";

const FormStatusCard = () => {
  return (
    <div>
      <div className="card bg-base-100 card-md shadow-sm h-full w-full">
        <div className="card-body">
          <h2 className="text-center text-lg font-bold">
            สถานะข้อมูลการเยี่ยมบ้าน
          </h2>
          <div className="m-4 flex justify-center">
            {/* For TSX uncomment the commented types below */}
            <div
              className="radial-progress"
              style={{ "--value": 70 } /* as React.CSSProperties */}
              aria-valuenow={70}
              role="progressbar"
            >
              70%
            </div>
          </div>
          <div className="justify-center card-actions">
            <p className="text-base text-center">มีการกรอกข้อมุลเข้ามาแล้ว</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStatusCard;
