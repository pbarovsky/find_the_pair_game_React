import sc from "./Slab.module.css";

const Slab = ({ color, isFlipped, isMatched, onClick }) => {
  return (
    <div
      className={`${sc.slab} ${isFlipped ? sc.flipped : ""}`}
      onClick={!isFlipped && !isMatched ? onClick : null}
      style={{
        cursor: isFlipped || isMatched ? "default" : "pointer",
      }}
    >

      { /* обложка плитки еще не перевернутой */}
      <div
        className={sc["slab-front"]}
        style={{ visibility: isMatched ? "hidden" : "visible" }}
      >
        ?
      </div>

      {/* перевернутая плитка с цветом */}
      <div
        className={sc["slab-back"]}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Slab;
