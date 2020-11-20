#!/usr/bin/env node
const yargs = require('yargs');
const passwordly = require('passwordly');

const options = yargs
  .usage("Usage: -t <type>")
  .option("t", { alias: "type", describe: "Type of password", type: "string", default: "word" })
  .option("u", { alias: "uppercase", describe: "Use uppercase", type: "boolean" })
  .option("l", { alias: "lowercase", describe: "Use lowercase", type: "boolean" })
  .option("d", { alias: "digits", describe: "Use digits", type: "boolean" })
  .option("s", { alias: "symbols", describe: "Use symbols", type: "boolean" })
  .option("z", { alias: "len", describe: "Number of characters", type: "number", default: 16 })
  .option("c", { alias: "count", describe: "Number of passwords to make", type: "number", default: 1 })
  .option("p", { alias: "prefix", describe: "Prefix with 4-digits", type: "boolean" })
  .option("x", { alias: "suffix", describe: "Suffix with 4-digits", type: "boolean" })
  .option("n", { alias: "numberOfWords", describe: "Number of words to add", type: "number" })
  .option("delimiter", { describe: "Delimiter between words", type: "string", default: "-" })
  .argv;

if (options.type === "string" || options.type === "strings") {
  passwordly('string', options).forEach((p) => console.log(p));
} else if (options.type === "word" || options.type === "words") {
  passwordly('word', options).forEach((p) => console.log(p));
} else {
  console.log(`ERR: Type '${options.type}' is not supported.`);
}