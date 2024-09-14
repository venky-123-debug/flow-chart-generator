/**
 * function to convert query string into Json Object to retain id for api call
 * @param {String} qs - query string (can be more than one)
 * @returns {Object}
 */

export const queryStringToJSON = (qs) => {
  qs = qs || location.search.slice(1) //return querystring of URL
  let pairs = qs.split("&") //splits querystring using symbol["&"] and gives in array
  let result = {}
  pairs.forEach(function (p) {
    //executes a provided function once for each array element.
    let pair = p.split("=") //splitting querystring values based on equal operator
    let key = pair[0] //making first element of an array after splitting as current key
    let value = decodeURIComponent(pair[1] || "") //value representing an encoded uri component && making second element in array as value

    if (result[key]) {
      //substituting another object to current object
      if (Object.prototype.toString.call(result[key]) === "[object Array]") {
        result[key].push(value)
      } else {
        result[key] = [result[key], value]
      }
    } else {
      result[key] = value
    }
  })

  return JSON.parse(JSON.stringify(result))
}
