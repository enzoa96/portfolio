import React, { useState, useEffect } from "react";
import { CgScreen } from "react-icons/cg";
import { IoFolderSharp } from "react-icons/io5";
import { BsFillTrashFill } from "react-icons/bs";
import MiPc from "./views/mipc";
import Archivos from "./views/archivos";
import Papelera from "./views/papelera";

function App() {
  const [view, setView] = useState("");
  const [time, setTime] = useState("");

  React.useEffect(() => {
    const tInterval = setInterval(() => {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      setTime(date + " " + time);
    }, 1000);

    return () => clearInterval(tInterval);
  }, []);
  const handleViewChange = (e) => {
    const name = e.target.getAttribute("name");
    setView(name);
  };

  const handleClose = () => {
    setView("");
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
          <h1 className="text-white text-center">{time}</h1>
        </header>
        <main className="flex flex-col text-white p-8 gap-16">
          <CgScreen
            className="cursor-pointer text-6xl "
            name="mipc"
            onClick={handleViewChange}
          />

          <IoFolderSharp
            className="cursor-pointer text-6xl"
            name="archivos"
            onClick={handleViewChange}
          />

          <BsFillTrashFill
            className="cursor-pointer text-6xl"
            name="papelera"
            onClick={handleViewChange}
          />

          {view === "archivos" && <Archivos onClose={handleClose} />}

          {view === "mipc" && <MiPc onClose={handleClose} />}

          {view === "papelera" && <Papelera onClose={handleClose} />}
        </main>
      </div>
    </div>
  );
}

export default App;
