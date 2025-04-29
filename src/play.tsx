import { useState, useEffect } from "react";
import Movement from "./movement";
interface PlayProps {
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
}
function Play({ coin, setCoin }: PlayProps) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [side, setSide] = useState(false);
  const [coinTop, setCoinTop] = useState<number>(0);
  const [coinLeft, setCoinLeft] = useState<number>(0);
  const [jumping, setJumping] = useState(false);
  const [jumpingTop, setJumpingTop] = useState(false);
  function randomCoin() {
    setCoin(coin + 1);
    const randomNum = Math.floor(Math.random() * 301);
    const randomNum1 = Math.floor(Math.random() * 201);
    setCoinTop(randomNum1);
    setCoinLeft(randomNum);
  }

  const [src, SetSrc] = useState<string>(
    `kirawra-pixel-rats-sit-animation.gif`
  );
  const goLeft = () => {
    if (isIntersecting(top, left, coinTop, coinLeft)) {
      randomCoin();
    }
    if (jumping == true) {
      setJumpingTop(true);
      SetSrc(`krisa/kirawra-pixel-rats-jump-animation-2.png`);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-3.png`);
      }, 266);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-4.png`);
      }, 532);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-5.png`);
      }, 798);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-6.png`);
      }, 1064);
      setJumping(false);

      const interval = setInterval(() => {
        setLeft((left) => {
          if (left <= -159) {
            return 450;
          } else {
            return left - 2.5;
          }
        });
      }, 30);
      setTimeout(() => {
        clearInterval(interval);
        setJumpingTop(false);
        SetSrc(`kirawra-pixel-rats-sit-animation.gif`);
      }, 1264);
    }
    setSide(true);
    setLeft((left) => {
      if (left <= -159) {
        return 450;
      } else {
        return left - 10;
      }
    });
  };
  const goTop = () => {
    if (isIntersecting(top, left, coinTop, coinLeft)) {
      randomCoin();
    }
    if (jumping == true) {
      setJumpingTop(true);
      SetSrc(`krisa/kirawra-pixel-rats-jump-animation-2.png`);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-3.png`);
      }, 266);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-4.png`);
      }, 532);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-5.png`);
      }, 798);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-6.png`);
      }, 1064);
      setJumping(false);

      const interval = setInterval(() => {
        setTop((top) => {
          if (top <= -116) {
            return 320;
          } else {
            return top - 2.5;
          }
        });
      }, 30);
      setTimeout(() => {
        clearInterval(interval);
        setJumpingTop(false);
        SetSrc(`kirawra-pixel-rats-sit-animation.gif`);
      }, 1264);
    }
    setTop((top) => {
      if (top <= -116) {
        return 320;
      } else {
        return top - 10;
      }
    });
  };
  const goRight = () => {
    if (isIntersecting(top, left, coinTop, coinLeft)) {
      randomCoin();
    }
    if (jumping == true) {
      setJumpingTop(true);
      SetSrc(`krisa/kirawra-pixel-rats-jump-animation-2.png`);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-3.png`);
      }, 266);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-4.png`);
      }, 532);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-5.png`);
      }, 798);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-6.png`);
      }, 1064);
      setJumping(false);

      const interval = setInterval(() => {
        setLeft((left) => {
          if (left >= 450) {
            return -159;
          } else {
            return left + 2.5;
          }
        });
      }, 30);
      setTimeout(() => {
        clearInterval(interval);
        setJumpingTop(false);
        SetSrc(`kirawra-pixel-rats-sit-animation.gif`);
      }, 1264);
    }
    setSide(false);
    setLeft((left) => {
      if (left >= 450) {
        return -159;
      } else {
        return left + 10;
      }
    });
  };
  const goBottom = () => {
    if (isIntersecting(top, left, coinTop, coinLeft)) {
      randomCoin();
    }
    if (jumping == true) {
      setJumpingTop(true);
      SetSrc(`krisa/kirawra-pixel-rats-jump-animation-2.png`);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-3.png`);
      }, 266);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-4.png`);
      }, 532);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-5.png`);
      }, 798);
      setTimeout(() => {
        SetSrc(`krisa/kirawra-pixel-rats-jump-animation-6.png`);
      }, 1064);
      setJumping(false);

      const interval = setInterval(() => {
        setTop((top) => {
          if (top >= 320) {
            return -116;
          } else {
            return top + 2.5;
          }
        });
      }, 30);
      setTimeout(() => {
        clearInterval(interval);
        setJumpingTop(false);
        SetSrc(`kirawra-pixel-rats-sit-animation.gif`);
      }, 1264);
    }

    setTop((top) => {
      if (top >= 320) {
        return -116;
      } else {
        return top + 10;
      }
    });
  };
  const jump = () => {
    if (jumping === false) {
      setJumping(true);
    }
  };
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 301);
    const randomNum1 = Math.floor(Math.random() * 201);
    setCoinTop(randomNum1);
    setCoinLeft(randomNum);
  }, []);
  function isIntersecting(
    ratTop: number,
    ratLeft: number,
    coinTop: number,
    coinLeft: number,
    ratWidth: number = 126,
    ratHeight: number = 62,
    coinSize: number = 75
  ): boolean {
    return (
      ratLeft < coinLeft + coinSize &&
      ratLeft + ratWidth > coinLeft &&
      ratTop < coinTop + coinSize &&
      ratTop + ratHeight > coinTop
    );
  }
  return (
    <>
      <div className="screen">
        <div className="play">
          <img
            src={src}
            className={side == false ? "rat" : " rat ratSS"}
            style={{ top: jumpingTop == false ? top : top - 70, left }}
          ></img>
          <img
            src="vbuck-single-1024x1024-085171118.png"
            className="coins"
            style={{ top: coinTop, left: coinLeft }}
          ></img>
        </div>
      </div>
      <h3 className="coinPlay">Coin: {coin}</h3>
      <div className="button">
        <Movement
          upButton={goTop}
          left={goLeft}
          right={goRight}
          enter={jump}
          downButton={goBottom}
        ></Movement>
      </div>
    </>
  );
}
export default Play;
