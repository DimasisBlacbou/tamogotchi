import { Pet } from "./App";
import { useEffect } from "react";
import Movement from "./movement";
import "./App.css";
interface SleepProps {
  pet: Pet;
  setPet: React.Dispatch<React.SetStateAction<Pet>>;
}
function Sleep(props: SleepProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      props.setPet((pet: Pet) => {
        if (pet.energy < 100) {
          return { ...pet, energy: pet.energy + 1 };
        } else {
          return pet;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [props]);

  return (
    <>
      <div className="screen">
        <h1 className="nameSl">Sleep</h1>
        <h2 className="energySleep">Energy:</h2>
        <progress
          value={props.pet.energy / 100}
          className={
            props.pet.energy < 20
              ? "red"
              : props.pet.energy < 55
              ? "yellow"
              : "progressSleep"
          }
        ></progress>
        <img
          src="kirawra-pixel-rats-sleep-animation.gif"
          className="sleepMause"
        ></img>
      </div>
      <div className="button">
        <Movement></Movement>
      </div>
    </>
  );
}
export default Sleep;
