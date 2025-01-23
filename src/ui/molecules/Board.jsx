import { Slab } from "../atoms/Slab";

export const Board = ({
  slabs,
  flippedSlabs,
  matchedSlabs,
  handleSlabClick,
}) => {
  return (
    <div className="max-w-[580px] max-h-[580px] w-full h-full grid grid-cols-4 grid-rows-4 gap-[15px] my-0 mx-[30px]">
      {slabs.map((image, index) => (
        <Slab
          key={index}
          image={image}
          isFlipped={flippedSlabs.includes(index)}
          isMatched={matchedSlabs.includes(index)}
          onClick={() => handleSlabClick(index)}
        />
      ))}
    </div>
  );
};
