export const Slab = ({ image, isFlipped, isMatched, onClick }) => (
  <div
    className={`slab ${isFlipped ? "flipped" : ""} ${
      isMatched ? "matched" : ""
    }`}
    onClick={!isFlipped && !isMatched ? onClick : null}
    style={{ "--slab-image": `url(${image})` }}
  ></div>
);
