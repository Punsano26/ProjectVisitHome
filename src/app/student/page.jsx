import React from "react";
import AssessmentStatusCard from "@components/studentComponents/AssessmentStatusCard";
import FormStatusCard from "@components/studentComponents/FormStatusCard";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-20">
        
        {/* กล่องซ้าย */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-sm h-full flex flex-col">
            <AssessmentStatusCard />
          </div>
        </div>
        
        {/* กล่องขวา */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-sm h-full flex flex-col">
            <FormStatusCard />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
