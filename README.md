# zhimg

Image src util for [zhihu](https://www.zhihu.com/) images.

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
- `zhimg.defaultHost`: `'https://pic.zhimg.com/'`
- `zhimg.reg`: `/^(https?:\/\/pic\d?\.zhimg\.com\/)?([a-z0-9]{32})\w*\.(\w+)$/`

**Instance properties and methods:**

- `img.src`: return the param `src`
- `img.host`: return the host, with default value is `zhimg.defaultHost`
- `img.hash`: a string with length 32
- `img.ext`: image extension
- `img.b`: often appears in answers
- `img.l`: large size, 100*100
- `img.m`: medium size, 75*75
- `img.r`: raw image
- `img.s`: small size, 25*25
- `img.t`: 150*150
- `img.xl`: 200*200
- `img.size(size)`: custom size, e.g. `200x112`

### License

[MIT](./LICENSE)
