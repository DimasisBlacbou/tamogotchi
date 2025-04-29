import { useState } from "react";

import Menu from "./menu";
import Feed from "./feed";
import "./App.css";
import Play from "./play";
import Sleep from "./sleep";

import { Route, Routes } from "react-router-dom";

import Info from "./info";
export interface Pet {
  energy: number;
  hunger: number;
  name: string;
  color: string;
  old: number;
  isSick: boolean;
}

function App() {
  const [coin, setCoin] = useState<number>(2000);
  const [pet, setPet] = useState<Pet>({
    energy: 50,
    hunger: 50,
    name: "Viki",
    color: "blue",
    old: 1,
    isSick: false,
  });

  return (
    <>
      <div className="obolochka">
        <Routes>
          <Route path="/info" element={<Info pet={pet}></Info>} />
          <Route path="/" element={<Menu></Menu>} />
          <Route
            path="/feed"
            element={
              <Feed
                coin={coin}
                setCoin={setCoin}
                pet={pet}
                setPet={setPet}
              ></Feed>
            }
          />
          <Route
            path="/play"
            element={<Play coin={coin} setCoin={setCoin}></Play>}
          />
          <Route
            path="/sleep"
            element={<Sleep pet={pet} setPet={setPet}></Sleep>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
