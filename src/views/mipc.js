import React, { useState } from "react";
import { ImCross } from "react-icons/im";

export default function mipc({ onClose }) {
  return (
    <div className="flex justify-center -mt-72">
      <div className="bg-white shadow-2xl rounded-lg w-3/6 h-96">
        <header className="items-center grid grid-cols-3 bg-gray-300 text-black py-1 px-8 rounded-t-lg text-xl text-center">
          <span className="col-span-2 justify-self-end">
            C:\Users\Enzo\Documents
          </span>
          <ImCross className="justify-self-end" onClick={onClose} />
        </header>
        <h1 className="text-black"> Hola mi pc </h1>
      </div>
    </div>
  );
}
