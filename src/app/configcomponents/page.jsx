import React from "react";

const page = () => {
  return (
    <div className="section-container m-8">
      <div>
        <p className="text-2xl">Hello word</p>
        <p className="text-xl">Hello word</p>
        <p className="text-lg">Hello word</p>
        <p className="text-base">Hello word</p>
        <p className="text-sm">Hello word</p>
        <p className="text-xs">Hello word</p>
      </div>

      <div className="flex flex-row space-x-4">
        <button className="btn-scc">Button Success</button>
        <button className="btn-danger">Button Danger</button>
        <button className="btn-warn">Button Warning</button>
        <button className="btn-prev-next">Button Prev & Next</button>
       
      </div>
    <div className="flex flex-col space-y-2 mt-2">
         <div className="badge badge-outline badge-success">เยี่ยมแล้ว</div>
      <div className="badge badge-outline badge-error">ยังไม่ได้เยี่ยม</div>
    </div>
      
    </div>
  );
};

export default page;
