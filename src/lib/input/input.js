const convertToNumber = (value) => {
  const number = Number(value);
  if (Number.isNaN(number) || !Number.isFinite(number)) {
    return 0;
  }

  return number;
};

module.exports = {
  convertToNumber,
};
