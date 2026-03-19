#!/usr/bin/node

const argv = process.argv;
const arg = parseInt(argv[2]);

if (Number.isNaN(arg)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${arg}`);
}
