# 𝔉𝔯𝔞𝔨𝔱𝔲𝔯

[![builds.sr.ht status](https://builds.sr.ht/~rasch/fraktur.svg)](https://builds.sr.ht/~rasch/fraktur?)

𝕮𝔬𝔫𝔳𝔢𝔯𝔱 𝔩𝔢𝔱𝔱𝔢𝔯𝔰 𝔣𝔯𝔬𝔪 𝔱𝔥𝔢 𝔈𝔫𝔤𝔩𝔦𝔰𝔥 𝔞𝔩𝔭𝔥𝔞𝔟𝔢𝔱 𝔱𝔬 𝔉𝔯𝔞𝔨𝔱𝔲𝔯 𝔲𝔫𝔦𝔠𝔬𝔡𝔢 𝔠𝔬𝔡𝔢𝔭𝔬𝔦𝔫𝔱𝔰.

# 𝕴𝔫𝔰𝔱𝔞𝔩𝔩

```sh
npm install @rasch/fraktur
```

# 𝔘𝔰𝔞𝔤𝔢

```javasript
import { encode, decode } from "@rasch/fraktur"

encode("hello world")
// => 𝔥𝔢𝔩𝔩𝔬 𝔴𝔬𝔯𝔩𝔡

decode("𝔥𝔢𝔩𝔩𝔬 𝔴𝔬𝔯𝔩𝔡")
// => hello world
```

# 𝕮𝔬𝔪𝔪𝔞𝔫𝔡 𝔏𝔦𝔫𝔢 𝕴𝔫𝔱𝔢𝔯𝔣𝔞𝔠𝔢

```sh
echo 'hello world' | fraktur
# 𝔥𝔢𝔩𝔩𝔬 𝔴𝔬𝔯𝔩𝔡

echo '𝔥𝔢𝔩𝔩𝔬 𝔴𝔬𝔯𝔩𝔡' | fraktur -d
# hello world

fraktur <<EOF
All at once the wolves began to howl as though the
moonlight had had some peculiar effect on them.
EOF
# 𝔄𝔩𝔩 𝔞𝔱 𝔬𝔫𝔠𝔢 𝔱𝔥𝔢 𝔴𝔬𝔩𝔳𝔢𝔰 𝔟𝔢𝔤𝔞𝔫 𝔱𝔬 𝔥𝔬𝔴𝔩 𝔞𝔰 𝔱𝔥𝔬𝔲𝔤𝔥 𝔱𝔥𝔢
# 𝔪𝔬𝔬𝔫𝔩𝔦𝔤𝔥𝔱 𝔥𝔞𝔡 𝔥𝔞𝔡 𝔰𝔬𝔪𝔢 𝔭𝔢𝔠𝔲𝔩𝔦𝔞𝔯 𝔢𝔣𝔣𝔢𝔠𝔱 𝔬𝔫 𝔱𝔥𝔢𝔪.
```
