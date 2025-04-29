import "./App.css";
import { useNavigate } from "react-router-dom";

interface MovementProps {
  upButton?: () => void;
  downButton?: () => void;
  enter?: () => void;
  left?: () => void;
  right?: () => void;
}
function Movement({ upButton, downButton, enter, left, right }: MovementProps) {
  const navigate = useNavigate();
  return (
    <>
      <div className="movement">
        <button className="movementButtonUp" onClick={upButton}>
          up
        </button>
        <button className="movementButtonDown" onClick={downButton}>
          down
        </button>
        <button className="movementButtonLeft" onClick={left}>
          left
        </button>
        <button className="movementButtonRight" onClick={right}>
          right
        </button>
        <button className="movementButtonJump" onClick={enter}>
          jump
        </button>
        <button className="movementButtonBack" onClick={() => navigate("/")}>
          back
        </button>
      </div>
    </>
  );
}

export default Movement;
