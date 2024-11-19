export const getPosition = (index, size, col, marginItems) => {
  "worklet";

  const margin = marginItems * (index % col);
  const marginTop = marginItems * Math.floor(index / col);

  return {
    x: (index % col) * size + margin,
    y: Math.floor(index / col) * size + marginTop,
  };
};

export const getOrder = (x, y, size, columns) => {
  "worklet";
  const row = Math.round(y / size);
  const col = Math.round(x / size);
  return row * columns + col;
};
