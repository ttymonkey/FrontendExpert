function promisify(callback) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      function handleErrorAndValue(error, value) {
        if (error == null) {
          resolve(value)
        } else {
          reject(error)
        }
      }

      return callback.call(this, ...args, handleErrorAndValue)
    })
  }
}

module.exports = promisify
