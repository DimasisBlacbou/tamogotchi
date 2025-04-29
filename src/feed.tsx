import { Pet } from "./App";
import Movement from "./movement";
import { useState } from "react";
import "./App.css";
interface FeepProps {
  pet: Pet;
  setPet: React.Dispatch<React.SetStateAction<Pet>>;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
}
interface Food {
  name: string;
  value: number;
  time: number;
  img: string;
  cost: number;
  valut: string;
}

const foods: Food[] = [
  {
    name: "pringls",
    value: 17,
    time: 2000,
    img: "pringls.png",
    cost: 65432,
    valut: "$",
  },
  {
    name: "shaurma",
    value: 150,
    time: 20000,
    img: "shaurma.png",
    cost: 200,
    valut: "$",
  },
  {
    name: "Creatine Monogidrat",
    value: 100,
    time: 200,
    img: "creatine.jpg",
    cost: 2000,
    valut: "$",
  },
  {
    name: "Protein",
    value: 130,
    time: 2000,
    img: "protein.webp",
    cost: 190,
    valut: "$",
  },
];

function Feed({ pet, setPet, coin, setCoin }: FeepProps) {
  const [eating, setEating] = useState<boolean>(false);

  const eat = (food: Food) => {
    if (food.cost <= coin) {
      setEating(true);
      setCoin(coin - food.cost);
      const interval = setInterval(() => {
        setPet((pet: Pet) => {
          if (pet.hunger < 100) {
            return {
              ...pet,
              hunger: pet.hunger + (food.value / food.time) * 100,
            };
          } else {
            return pet;
          }
        });
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        setEating(false);
      }, food.time + 50);
    }
  };
  return (
    <>
      <div className="screen">
        {eating == false ? (
          <div>
            <h3>coin:{coin}</h3>

            <div className="container">
              {foods.map((food) => (
                <button onClick={() => eat(food)} className="marketButton">
                  {food.name}
                  <img src={food.img} className="buttofood"></img>
                  <p>
                    {food.cost}
                    {food.valut}
                  </p>
                </button>
              ))}{" "}
            </div>
          </div>
        ) : (
          <>
            {" "}
            <h1 className="nameSl">Feed</h1>
            <h2 className="energySleep">Hunger:</h2>
            <progress
              value={pet.hunger / 100}
              className={
                pet.hunger < 20
                  ? "red"
                  : pet.hunger < 55
                  ? "yellow"
                  : "progressSleep"
              }
            ></progress>
            <img
              src="kirawra-pixel-rats-eat-animation.gif"
              className="feedMause"
            ></img>
          </>
        )}
      </div>
      <div className="button">
        <Movement></Movement>
      </div>
    </>
  );
}
export default Feed;
