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
  return result
}

export const unflattenObject = (flatObj) => {
  let result = {}

  for (let key in flatObj) {
    let value = flatObj[key]
    let keys = key.split("_")
    let currentObj = result

    for (let i = 0; i < keys.length - 1; i++) {
      let nestedKey = keys[i]
      if (!currentObj[nestedKey]) {
        currentObj[nestedKey] = {}
      }
      currentObj = currentObj[nestedKey]
    }

    currentObj[keys[keys.length - 1]] = value
  }

  return result
}
