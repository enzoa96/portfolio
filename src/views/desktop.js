import React from "react";
import { CgScreen } from "react-icons/cg";
import { IoFolderSharp } from "react-icons/io5";
import { BsFillTrashFill } from "react-icons/bs";

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

function App() {
  return (
    <div className="h-screen w-screen">
      <div
        style={{
          minHeight: "100%",

          backgroundImage:
            "url('https://www.xtrafondos.com/wallpapers/ubuntu-linux-minimalism-3445.jpg')",
        }}
      >
        <header className="bg-black">
          <h1 className="text-white text-center">{dateTime}</h1>
        </header>
        <main className="flex flex-col text-white text-6xl p-8 gap-16">
          <button
            onDoubleClick={() => {
              alert("mi pc");
            }}
          >
            <CgScreen></CgScreen>
          </button>
          <button
            onDoubleClick={() => {
              alert("mis archivos");
            }}
          >
            <IoFolderSharp></IoFolderSharp>
          </button>

          <button
            onDoubleClick={() => {
              alert("papelera");
            }}
          >
            <BsFillTrashFill></BsFillTrashFill>
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
