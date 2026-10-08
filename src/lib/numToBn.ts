const numToBn = (num: number) => {
  const banglaFormatter = new Intl.NumberFormat("bn-BD", {
    useGrouping: false,
  });
  return banglaFormatter.format(num);
};

export default numToBn;
