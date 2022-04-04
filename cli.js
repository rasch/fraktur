#!/usr/bin/env node

import { encode, decode } from "./index.js"

console.log(
  /^-(?:d|-decode)$/.test(process.argv[2])
    ? decode(process.argv.slice(3).join(" "))
    : encode(process.argv.slice(2).join(" "))
)
