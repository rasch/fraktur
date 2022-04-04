// The lowercase characters are ordered based on relative frequencies of
// letters in the English language. The uppercase characters are ordered
// based on relative frequencies of the first letters of a word in the
// English language. This may optimize lookup speed for the most common
// letters. See <https://en.wikipedia.org/wiki/Letter_frequency>.

const fraktur = {
  e: "\udd22",
  t: "\udd31",
  a: "\udd1e",
  o: "\udd2c",
  i: "\udd26",
  n: "\udd2b",
  s: "\udd30",
  h: "\udd25",
  r: "\udd2f",
  d: "\udd21",
  l: "\udd29",
  c: "\udd20",
  u: "\udd32",
  m: "\udd2a",
  w: "\udd34",
  f: "\udd23",
  g: "\udd24",
  y: "\udd36",
  p: "\udd2d",
  b: "\udd1f",
  v: "\udd33",
  k: "\udd28",
  j: "\udd27",
  x: "\udd35",
  q: "\udd2e",
  z: "\udd37",
  T: "\udd17",
  A: "\udd04",
  O: "\udd12",
  I: "\udd74",
  S: "\udd16",
  W: "\udd1a",
  C: "\udd6e",
  B: "\udd05",
  P: "\udd13",
  H: "\udd73",
  F: "\udd09",
  M: "\udd10",
  D: "\udd07",
  R: "\udd7d",
  E: "\udd08",
  L: "\udd0f",
  N: "\udd11",
  G: "\udd0a",
  U: "\udd18",
  V: "\udd19",
  Y: "\udd1c",
  J: "\udd0d",
  K: "\udd0e",
  Q: "\udd14",
  X: "\udd1b",
  Z: "\udd85"
}

const encode = text =>
  text.replace(
    /[A-Za-z]/g,
    c => `\ud835${fraktur[c]}`
  )

const decode = text =>
  text.replace(
    /\ud835[\udd04-\udd85]/g,
    f => Object.keys(fraktur).find(c => fraktur[c] === f.charAt(1)) || f
  )

export { encode, decode }
