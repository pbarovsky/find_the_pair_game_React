export const shuffleColors = (colors) => {
  const shuffled = [...colors, ...colors]
    .sort(() => Math.random() - 0.5);
  return shuffled;
};
