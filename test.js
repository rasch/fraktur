import { encode, decode } from "./index.js";

const assertEqual = (a, b, msg) => {
  if (a !== b) throw new Error(msg);
};

assertEqual(
  decode(encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ!")),
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ!",
  "𝔉𝔞𝔦𝔩𝔢𝔡 to decode an encoded 𝔘𝔓𝔓𝔈𝕽𝕮𝔄𝔖𝔈 string"
);

assertEqual(
  decode(encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ!")),
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ!",
  "𝔉𝔞𝔦𝔩𝔢𝔡 to decode an encoded 𝔘𝔓𝔓𝔈𝕽𝕮𝔄𝔖𝔈 string"
);

assertEqual(
  decode(encode("abcdefghijklmnopqrstuvwxyz!")),
  "abcdefghijklmnopqrstuvwxyz!",
  "𝔉𝔞𝔦𝔩𝔢𝔡 to decode an encoded 𝔩𝔬𝔴𝔢𝔯𝔠𝔞𝔰𝔢 string"
);

assertEqual(
  encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ!"),
  "𝔄𝔅𝕮𝔇𝔈𝔉𝔊𝕳𝕴𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔𝕽𝔖𝔗𝔘𝔙𝔚𝔛𝔜𝖅!",
  "𝔉𝔞𝔦𝔩𝔢𝔡 to encode an 𝔘𝔓𝔓𝔈𝕽𝕮𝔄𝔖𝔈 string"
);

assertEqual(
  decode("𝔄𝔅𝕮𝔇𝔈𝔉𝔊𝕳𝕴𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔𝕽𝔖𝔗𝔘𝔙𝔚𝔛𝔜𝖅!"),
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ!",
  "𝔉𝔞𝔦𝔩𝔢𝔡 to decode an 𝔘𝔓𝔓𝔈𝕽𝕮𝔄𝔖𝔈 string"
);

assertEqual(
  encode("abcdefghijklmnopqrstuvwxyz!"),
  "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷!",
  "𝔉𝔞𝔦𝔩𝔢𝔡 to encode a 𝔩𝔬𝔴𝔢𝔯𝔠𝔞𝔰𝔢 string"
);

assertEqual(
  decode("𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷!"),
  "abcdefghijklmnopqrstuvwxyz!",
  "𝔉𝔞𝔦𝔩𝔢𝔡 to decode a 𝔩𝔬𝔴𝔢𝔯𝔠𝔞𝔰𝔢 string"
);
