/**
 * function to remove duplicate keys from json object by consdering case insensitive
 * @param {Object} jsonObj - json Object from which duplicate keys to be deleted
 * @returns {Object}
 */
export const removeDuplicateKeys = (jsonObj) => {
  let newObject = {}
  for (let key in jsonObj) {
    let lowercaseKey = key.toLowerCase()
    let value = jsonObj[key]
    if (typeof value === "object") {
      // Recursively remove duplicate keys in sub-object
      newObject[lowercaseKey] = removeDuplicateKeys(value)
    } else if (!newObject.hasOwnProperty(lowercaseKey)) {
      newObject[lowercaseKey] = value
    }
  }
  return newObject
}
