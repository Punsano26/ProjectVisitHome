import React from "react";

const AssessmentStatusCard = () => {
  return (
    <div>
      <div className="card  bg-base-100 card-md shadow-sm h-full w-full">
        <div className="card-body">
          <h2 className="text-center text-lg font-bold">สถานะการประเมิน SDQ</h2>
          <div className="text-center bg-neutral_content m-4 p-2 rounded-lg shadow-md space-x-2">
            <div aria-label="status" className="status status-error" />
            <span className="text-base">นักเรียนยังไม่ได้ประเมิน</span>
          </div>
          <div className="justify-center card-actions">
            <button className="btn-login">คะแนนประเมิน SDQ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentStatusCard;
