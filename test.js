const assert = require('assert')
const zhimg = require('./index')

var src1 = 'https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_b.jpg'
var src2 = 'http://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53.jpg'
var src3 = 'd38dd09765d51b5d163c555b081eea53.jpg'

var img1 = zhimg(src1)
var img2 = zhimg(src2)
var img3 = zhimg(src3)

describe('zhimg', function() {
  it('`zhimg.defaultHost` is a string', function() {
    assert(typeof zhimg.defaultHost === 'string')
  })

  it('`zhimg.reg` is a RegExp', function() {
    assert(zhimg.reg instanceof RegExp)
  })

  it('img.src', function() {
    assert(img1.src === src1)
    assert(img2.src === src2)
    assert(img3.src === src3)
  })

  it('img.host', function() {
    assert(img1.host === 'https://pic1.zhimg.com/')
    assert(img2.host === 'http://pic.zhimg.com/')
    assert(img3.host === zhimg.defaultHost)
  })

  it('img.hash', function() {
    var hash = 'd38dd09765d51b5d163c555b081eea53'
    assert(img1.hash === hash)
    assert(img2.hash === hash)
    assert(img3.hash === hash)
  })

  it('img.ext', function() {
    var ext = 'jpg'
    assert(img1.ext === ext)
    assert(img2.ext === ext)
    assert(img3.ext === ext)
  })

  it('img.<size>', function() {
    assert(img1.b === 'https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_b.jpg')
    assert(img2.l === 'http://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_l.jpg')
    assert(img3.m === 'https://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_m.jpg')
    assert(img1.r === 'https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_r.jpg')
    assert(img2.s === 'http://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_s.jpg')
    assert(img3.t === 'https://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_t.jpg')
  })

  it('img.size(size)', function() {
    var size = '200x112'
    assert(img1.size(size) === `https://pic1.zhimg.com/d38dd09765d51b5d163c555b081eea53_${size}.jpg`)
    assert(img2.size(size) === `http://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_${size}.jpg`)
    assert(img3.size(size) === `https://pic.zhimg.com/d38dd09765d51b5d163c555b081eea53_${size}.jpg`)
  })
})
