import { Pet } from "./App";
import Movement from "./movement";
interface InfoProps {
  pet: Pet;
}
function Info({ pet }: InfoProps) {
  return (
    <>
      <div className="screen">
        <div>
          <h1>
            {pet.name} (old:{pet.old})
          </h1>

          <p>Energy:</p>
          <progress
            value={pet.energy / 100}
            className={
              pet.energy < 20 ? "red" : pet.energy < 55 ? "yellow" : "progress"
            }
          ></progress>
          <p>Hunger:</p>
          <progress
            value={pet.hunger / 100}
            className={
              pet.hunger < 20 ? "red" : pet.hunger < 55 ? "yellow" : "progress"
            }
          ></progress>
          {/*       <p>Color:{props.pet.color}</p> */}
          <p>isSick:{pet.isSick == false ? "healthy" : "sick"}</p>
        </div>
      </div>
      <div className="button">
        <Movement></Movement>
      </div>
    </>
  );
}

export default Info;
