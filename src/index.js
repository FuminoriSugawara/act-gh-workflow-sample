const { sqrt } = require("./lib/calc/calc");
const { convertToNumber } = require("./lib/input/input");

const main = () => {
  const input = process.argv[2];
  const number = convertToNumber(input);

  const result = sqrt(input);
  console.log(result);
};

main();
