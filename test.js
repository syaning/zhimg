const assert = require('assert')
const zhimg = require('./index')

var src1 = 'https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_b.jpg'
var src2 = 'http://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53.jpg'
var src3 = 'd38dd09765d51b5d163c555b081eea53.jpg'
var src4 = 'https://pic4.zhimg.com/v2-4987b4501c8572a0fdc437079ae3fadb_200x112.png'

var img1 = zhimg(src1)
var img2 = zhimg(src2)
var img3 = zhimg(src3)
var img4 = zhimg(src4)

describe('zhimg', function() {
  it('zhimg.defaultHost is a string', function() {
    assert(typeof zhimg.defaultHost === 'string')
  })

  it('zhimg.reg is a RegExp', function() {
    assert(zhimg.reg instanceof RegExp)
  })

  it('check param', function() {
    assert.throws(() => zhimg(123), /string/)
    assert.throws(() => zhimg('invalid src'), /invalid/)
  })

  it('img.src', function() {
    assert.equal(img1.src, src1)
    assert.equal(img2.src, src2)
    assert.equal(img3.src, src3)
    assert.equal(img4.src, src4)
  })

  it('img.host', function() {
    assert.equal(img1.host, 'https://pic1.zhimg.com/')
    assert.equal(img2.host, 'http://pic.zhimg.com/')
    assert.equal(img3.host, zhimg.defaultHost)
    assert.equal(img4.host, 'https://pic4.zhimg.com/')
  })

  it('img.version', function() {
    assert.equal(img1.version, '')
    assert.equal(img2.version, '')
    assert.equal(img3.version, '')
    assert.equal(img4.version, 'v2')
  })

  it('img.hash', function() {
    assert.equal(img1.hash, 'd38dd09765d51b5d163c555b081eea53')
    assert.equal(img2.hash, 'd38dd09765d51b5d163c555b081eea53')
    assert.equal(img3.hash, 'd38dd09765d51b5d163c555b081eea53')
    assert.equal(img4.hash, '4987b4501c8572a0fdc437079ae3fadb')
  })

  it('img.ext', function() {
    assert.equal(img1.ext, 'jpg')
    assert.equal(img2.ext, 'jpg')
    assert.equal(img3.ext, 'jpg')
    assert.equal(img4.ext, 'png')
  })

  it('img.<size>', function() {
    assert.equal(img1.b, 'https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_b.jpg')
    assert.equal(img2.l, 'http://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_l.jpg')
    assert.equal(img3.m, 'https://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_m.jpg')
    assert.equal(img1.r, 'https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_r.jpg')
    assert.equal(img2.s, 'http://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_s.jpg')
    assert.equal(img3.t, 'https://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_t.jpg')
    assert.equal(img1.xl, 'https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_xl.jpg')
    assert.equal(img4.hd, 'https://pic4.zhimg.com/v2-4987b4501c8572a0fdc437079ae3fadb_hd.png')
  })

  it('img.size(size)', function() {
    var size = '200x112'
    assert.equal(img1.size(size), `https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_${size}.jpg`)
    assert.equal(img2.size(size), `http://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_${size}.jpg`)
    assert.equal(img3.size(size), `https://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_${size}.jpg`)
    assert.equal(img4.size(size), `https://pic4.zhimg.com/v2-4987b4501c8572a0fdc437079ae3fadb_${size}.png`)
  })
})
