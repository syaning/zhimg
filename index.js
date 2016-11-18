const defaultHost = 'https://pic.zhimg.com/'
const reg = /^(https?:\/\/pic\d?\.zhimg\.com\/)?(\w*-)?([a-z0-9]{32})\w*\.(\w+)$/

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
  this.version = ret[2] ? ret[2].slice(0, -1) : ''
  this.hash = ret[3]
  this.ext = ret[4]
}

Image.prototype = {
  /**
   * Fancybox thumb.
   *
   * @return {String}
   * @public
   */
  get b() {
    return this.size('b')
  },

  /**
   * Large size: 100x100.
   *
   * @return {String}
   * @public
   */
  get l() {
    return this.size('l')
  },

  /**
   * Medium size: 75x75.
   *
   * @return {String}
   * @public
   */
  get m() {
    return this.size('m')
  },

  /**
   * Raw image.
   *
   * @return {String}
   * @public
   */
  get r() {
    return this.size('r')
  },

  /**
   * Small size: 25x25.
   *
   * @return {String}
   * @public
   */
  get s() {
    return this.size('s')
  },

  /**
   * 150x150.
   *
   * @return {String}
   * @public
   */
  get t() {
    return this.size('t')
  },

  /**
   * 200x200.
   *
   * @return {String}
   * @public
   */
  get xl() {
    return this.size('xl')
  },

  /**
   * High definition, the same as raw image.
   *
   * @return {String}
   * @public
   */
  get hd() {
    return this.size('hd')
  },

  /**
   * Get other size. For example: 200x112.
   *
   * @param  {String} size
   * @return {String}
   * @public
   */
  size: function(size) {
    var version = this.version ? this.version + '-' : ''
    return `${this.host}${version}${this.hash}_${size}.${this.ext}`
  }
}
