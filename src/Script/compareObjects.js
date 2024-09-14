  /**
   * Compares two objects to check if they have the same keys and values.
   *
   * @param {object} obj1 - The first object to compare.
   * @param {object} obj2 - The second object to compare.
   * @returns {boolean} - Returns `true` if the objects are equal, `false` otherwise.
   */
 export const compareObjects = (obj1, obj2) => {
    // Get the keys of the first object
    const keys1 = Object.keys(obj1)

    // Check if the number of keys is the same
    if (keys1.length !== Object.keys(obj2).length) {
      return false
    }

    // Iterate over the keys
    for (let key of keys1) {
      // Check if the key exists in both objects
      if (!(key in obj2)) {
        return false
      }

      // Check if the values of the keys are equal
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }

    // All keys and values match
    return true
  }