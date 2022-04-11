import SToggle from "./style";
import imgD6 from "@assets/d6.png";
import imgD20 from "@assets/d20.png";
import { useState } from "react";

export default function Toggle() {
  const [isRPG, setRPG] = useState(false);

  const toggleRPG = () => {
    setRPG(!isRPG);
  };

  return (
    <SToggle logo={isRPG ? imgD20 : imgD6}>
      <input type="checkbox" checked={isRPG} onChange={toggleRPG} />
      <span />
    </SToggle>
  );
}