const { readFileSync } = require("fs");
const path = require("path");
const { parse } = require("babylon");
const CPA = require("./lib/cpa");

const getBundle = (file) =>
  readFileSync(file, "utf-8");

const findMatches = (file) => {
  const input = getBundle(file);
  const ast = parse(input, {
    sourceFilename: file
  }).program;
  return new CPA(ast, file).run();
};

module.exports = findMatches;
