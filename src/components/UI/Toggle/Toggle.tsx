import "./Toggle.scss";
import { useState } from "react";

export default function Toggle(props: any) {
  const [circleDirection, setCircleDirection] = useState<"Left" | "Right">("Right");

  return (
    <div
      className="toggle"
      {...props}
      onClick={() => {
        setCircleDirection((prevDir) => (prevDir === "Left" ? "Right" : "Left"));
        props?.onClick();
      }}
    >
      <div className={`toggle__circle ${circleDirection === "Left" ? "toggle__circle--right" : "toggle__circle--left"}`}></div>
    </div>
  );
}
