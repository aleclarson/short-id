
module.exports = short

function short(len) {
  if (typeof len != 'number') {
    return Math.random().toString(36).substr(2, 10)
  }
  if (len <= 10) {
    return Math.random().toString(36).substr(2, len)
  }
  return longer(len)
}

function longer() {
  var len = arguments[0]
  var chunks = []
  while (true) {
    if (len > 10) {
      len -= 10
      chunks.push(Math.random().toString(36).substr(2, 10))
    } else {
      chunks.push(Math.random().toString(36).substr(2, len))
      break
    }
  }
  return chunks.join('')
}
