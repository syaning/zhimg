# zhimg

Image src util for [zhihu](https://www.zhihu.com/) images.

[![npm](https://img.shields.io/npm/v/zhimg.svg)](https://www.npmjs.com/package/zhimg)
[![Travis](https://img.shields.io/travis/syaning/zhimg.svg)](https://travis-ci.org/syaning/zhimg)

### Install

```
$ npm install zhimg
```

### Usage

```javascript
const zhimg = require('zhimg')

zhimg('https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_b.jpg').l
// => 'https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_l.jpg'

zhimg('d38dd09765d51b5d163c555b081eea53.jpg').m
// => 'https://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_m.jpg'

zhimg('d38dd09765d51b5d163c555b081eea53_b.jpg').size('200x112')
// => 'https://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_200x112.jpg'
```

### API

- `zhimg(src)`: return an `Image` instance

**Instance properties and methods:**

- `img.src`: return the parameter `src`
- `img.host`: return the host, with default value is `'https://pic.zhimg.com/'`
- `img.version`: the version, `''` or `'v2'`
- `img.hash`: a string with length 32
- `img.ext`: image extension
- `img.b`: often appears in answers
- `img.l`: large size, 100x100
- `img.m`: medium size, 75x75
- `img.r`: raw image
- `img.s`: small size, 25x25
- `img.t`: 150x150
- `img.xl`: 200x200
- `img.hd`: high definition, the same as raw image
- `img.size(size)`: custom size, e.g. `200x112`

### License

[MIT](./LICENSE)
