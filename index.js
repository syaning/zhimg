const defaultHost = 'https://pic.zhimg.com/'
const reg = /^(https?:\/\/pic\d?\.zhimg\.com\/)?([a-z0-9]{32})\w*\.(\w+)$/

exports = module.exports = Image
exports.defaultHost = defaultHost
exports.reg = reg

/**
 * Initialize `Image` with given `src`.
 *
 * @param {String} src
 * @public
 */
function Image(src) {
  if (!(this instanceof Image)) {
    return new Image(src)
  }

  if (typeof src !== 'string') {
    throw new Error('param `src` must be a string')
  }

  var ret = reg.exec(src)

  if (!ret) {
    throw new Error('invalid param `src`')
  }

  this.src = src
  this.host = ret[1] || defaultHost
  this.hash = ret[2]
  this.ext = ret[3]
}

Image.prototype = {
  /**
   * Fancybox thumb.
   *
   * @return {String}
   * @public
   */
  get b() {
    return imgSrc(this, 'b')
  },

  /**
   * Large size: 100*100.
   *
   * @return {String}
   * @public
   */
  get l() {
    return imgSrc(this, 'l')
  },

  /**
   * Medium size: 75*75.
   *
   * @return {String}
   * @public
   */
  get m() {
    return imgSrc(this, 'm')
  },

  /**
   * Raw image.
   *
   * @return {String}
   * @public
   */
  get r() {
    return imgSrc(this, 'r')
  },

  /**
   * Small size: 25*25.
   *
   * @return {String}
   * @public
   */
  get s() {
    return imgSrc(this, 's')
  },

  /**
   * 150*150.
   *
   * @return {String}
   * @public
   */
  get t() {
    return imgSrc(this, 't')
  },

  /**
   * 200*200.
   *
   * @return {String}
   * @public
   */
  get xl() {
    return imgSrc(this, 'xl')
  },

  /**
   * Get other size. For example: 200x112.
   *
   * @param  {String} size
   * @return {String}
   * @public
   */
  size: function(size) {
    return imgSrc(this, size)
  }
}

/**
 * Return an image url of given `size`.
 *
 * @param  {Image} img
 * @param  {String} size
 * @return {String}
 * @private
 */
function imgSrc(img, size) {
  return `${img.host}${img.hash}_${size}.${img.ext}`
}
