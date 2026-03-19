#!/usr/bin/node

const msg = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let output = '';
for (let i = 0; i < msg.length; i++) {
  output += msg[i] + '\n';
}
console.log(output.trim());
