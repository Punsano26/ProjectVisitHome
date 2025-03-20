import React from "react";

const page = () => {
  return (
    <div className="section-container m-8">
      <h2 className="text-red">text size</h2>
      <div>
        <p className="text-2xl">Hello word</p>
        <p className="text-xl">Hello word</p>
        <p className="text-lg">Hello word</p>
        <p className="text-base">Hello word</p>
        <p className="text-sm">Hello word</p>
        <p className="text-xs">Hello word</p>
      </div>
      <h2 className="mt-4 text-red">Button</h2>
      <div className="flex flex-row space-x-4 mt-4">
        <button className="btn-scc">Button Success</button>
        <button className="btn-danger">Button Danger</button>
        <button className="btn-warn">Button Warning</button>
        <button className="btn-prev-next">Button Prev & Next</button>
        <button className="btn-login">Button login</button>
      </div>

      <div className="flex flex-col space-y-2 mt-2">
        <h2 className="text-red">Badge</h2>
        <div className="badge badge-outline badge-success">เยี่ยมแล้ว</div>
        <div className="badge badge-outline badge-error">ยังไม่ได้เยี่ยม</div>
      </div>
    </div>
  );
};

export default page;
