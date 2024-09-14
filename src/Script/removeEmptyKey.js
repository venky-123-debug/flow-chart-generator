/**
 * function to auto delete empty key from json object
 * @param {Object} obj - object from which empty key value pair to be deleted
 * @returns {Object}
 */
export const removeEmptyKeys = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (key === "") {
      delete obj[key]
    } else if (typeof obj[key] === "object") {
      removeEmptyKeys(obj[key])
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key]
      }
    }
  })
}
