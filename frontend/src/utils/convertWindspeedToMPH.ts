export const convertWindspeedToMPH = (windpseed: number) => {
  return (windpseed / 1.609).toFixed(1);
};
