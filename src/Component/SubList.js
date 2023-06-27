import React, { useEffect } from "react";
import "./SubList.css";
import Sub from "./Sub";
import { useState } from "react";

const SubList = () => {
  const [basic, setBasic] = useState(9.99);
  const [pro, setPro] = useState(19.99);
  const [master, setMaster] = useState(29.9);

  const [yearly, setYearly] = useState(false);

  const handleClick = () => {
    setYearly(!yearly);
  };

  // calc Percentage
  const calcPercentage = (num, per) => {
    return ((num * 12) / 100) * per;
  };

  useEffect(() => {
    if (yearly) {
      setBasic(calcPercentage(basic, 70).toFixed(0));
      setPro(calcPercentage(pro, 70).toFixed(0));
      setMaster(calcPercentage(master, 70).toFixed(0));
    } else {
      setBasic(9.99);
      setPro(19.99);
      setMaster(29.99);
    }
  }, [yearly]);

  return (
    <section className="main">
      <div className="container --center-all">
        <div className="title">
          <h2>Pricing</h2>
          <div className="--line"></div>

          <div className="--flex-center --my-2">
            <p>Monthly</p>
            <div className="--mx2">
              <span
                className={yearly ? "toggle-btn toggled" : "toggle-btn"}
                onClick={handleClick}
              >
                <div className={yearly ? "ball move" : "ball"}></div>
              </span>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        <div className="sub-plans">
          <Sub
            plan={"basic"}
            theme={"theme1"}
            price={basic}
            isBasic={true}
            yearly={yearly}
            onBuy={() => alert("$" + basic)}
          />
          <Sub
            plan={"pro"}
            theme={"theme2"}
            price={pro}
            isPro={true}
            yearly={yearly}
            onBuy={() => alert("$" + pro)}
          />
          <Sub
            plan={"master"}
            theme={"theme3"}
            price={master}
            isMaster={true}
            yearly={yearly}
            onBuy={() => alert("$" + master)}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;
