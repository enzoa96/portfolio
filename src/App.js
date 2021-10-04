import React from "react";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-black">
          <h1 className="text-white text-center">{dateTime}</h1>
          <div>
            <img
              src="https://www.xtrafondos.com/wallpapers/ubuntu-linux-minimalism-3445.jpg"
              height={190}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
