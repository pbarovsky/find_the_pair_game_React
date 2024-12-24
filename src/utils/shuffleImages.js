export const shuffleImages = (images) => {
  const shuffled = [...images, ...images].sort(() => Math.random() - 0.5);
  return shuffled;
};
