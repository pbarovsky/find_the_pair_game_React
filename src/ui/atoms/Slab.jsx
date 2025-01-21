import sc from "./Slab.module.css";

export const Slab = ({ image, isFlipped, isMatched, onClick }) => (
  <div
    className={`${sc.slab} ${isFlipped ? sc.flipped : ""} ${
      isMatched ? sc.matched : ""
    }`}
    onClick={!isFlipped && !isMatched ? onClick : null}
    style={{ "--slab-image": `url(${image})` }}
  ></div>
);
