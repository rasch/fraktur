#!/usr/bin/env node

import readline from "readline"
import { encode, decode } from "./index.js"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on("line", ln =>
  console.log((/^-(?:d|-decode)$/.test(process.argv[2]) ? decode : encode)(ln))
)
