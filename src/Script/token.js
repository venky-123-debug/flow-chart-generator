/**
 * @typedef {Object} DecodedJWT - Contains decoded data of the JWT
 * @type {Object}
 * Contains decoded data of the JWT
 * @property {Number} exp - expiry time of JWT in seconds
 * @property {Number} iat - issued time of JWT in seconds
 */

/**
 * Decodes a given JWT
 * @param {String} token - JWT to be decoded
 * @return {DecodedJWT}
 */
export const parseJWT = (token) => {
  try {
    let base64Url = token.split(".")[1]
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join("")
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error(error)
    throw new Error("Token invalid")
    // return null
  }
}
