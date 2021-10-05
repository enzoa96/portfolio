import React, { useState } from "react";
import { CgScreen } from "react-icons/cg";
import { IoFolderSharp } from "react-icons/io5";
import { BsFillTrashFill } from "react-icons/bs";
import MiPc from "./views/mipc";
import Archivos from "./views/archivos";
import Papelera from "./views/papelera";

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

function App() {
  const [view, setView] = useState("");

  const handleViewChange = (e) => {
    const name = e.target.getAttribute("name");
    setView(name);
  };

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
          <button className="w-24" name="mipc" onDoubleClick={handleViewChange}>
            <CgScreen></CgScreen>
          </button>
          <button name="archivos" onDoubleClick={handleViewChange}>
            <IoFolderSharp></IoFolderSharp>
          </button>
          <button name="papelera" onDoubleClick={handleViewChange}>
            <BsFillTrashFill></BsFillTrashFill>
          </button>

          {view === "archivos" && <Archivos />}

          {view === "mipc" && <MiPc />}

          {view === "papelera" && <Papelera />}
        </main>
      </div>
    </div>
  );
}

export default App;
