/**
 *function to seperate keys as flatened from given JSON object
 * @param {Object} obj -json object from which keys to be extracted
 * @param {String} namespace -namespace is the optional parameter and its represents keys in the flatedObject
 * @returns {Object} -with flatened keys
 */
export const flatenObject = (obj, namespace = "") => {
  let result = {}
  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    let namedKey = namespace ? `${namespace}_${keys[i]}` : keys[i]
    if (typeof obj[keys[i]] == "object") {
      let nestedObject = flatenObject(obj[keys[i]], namedKey)
      result = { ...result, ...nestedObject }
    } else {
      result[namedKey] = obj[keys[i]]
    }
  }
}
