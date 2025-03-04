import { useState } from "react";
import ModelViewer from "./ModelViewer";

type TModelGrid = {
  grid: string;
  modelPath: string;
  position?: number[];
  rotation?: number[];
};

export default function ModelGrid({
  grid,
  modelPath,
  position,
  rotation,
}: TModelGrid) {
  // const [isHovered, setIsHovered] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`modelgrid relative rounded-xl bg-black ${grid}`}>
      {/* <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={isOpen ? undefined : () => setIsOpen(!isOpen)}
        className="door absolute w-full h-full z-10 bg-white"
        style={{
          transform: isOpen
            ? `rotate(6deg) skew(6deg, 20deg)`
            : isHovered
              ? `rotate(6deg) skew(6deg, 10deg)`
              : `rotate(6deg) skew(6deg, 1deg)`,
          width: "90%",
          height: "90%",
          top: "5%",
          left: "5%",
          transformOrigin: "0% 50%",
          transition: "all 0.5s ease-in-out",
          opacity: isOpen ? 0 : 1,
          display: "none",
        }}
      /> */}
      <ModelViewer
        modelPath={modelPath}
        className="z-20"
        position={position}
        rotation={rotation}
      />
    </div>
  );
}
