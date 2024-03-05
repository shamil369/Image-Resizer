import React from "react";

function DialogBox({ value, icon }) {
  return (
    <div className="absolute inset-0 flex justify-center z-20 p-8">
      <div className="p-4 bg-slate-700 text-center text-teal-400 rounded-md border-green-950 h-16 text-lg">
        {value} <i className={icon}></i>
      </div>
    </div>
  );
}

export default DialogBox;
