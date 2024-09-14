/**
 * Function for loading JS library
 * @param id {String} id for the newly creating script element
 * @param location {String} path for the library
 */
export const loadJs = async (id, location, integrity = "", crossOrigin = "") => {
  return new Promise((resolve) => {
    let elem = document.createElement("script")
    elem.id = id
    elem.type = "application/javascript"
    elem.src = location
    if (crossOrigin) elem.crossOrigin = crossOrigin
    if (integrity) elem.integrity = integrity
    document.body.appendChild(elem)
    elem.onload = async function () {
      resolve()
    }
  })
}
/**
 * Function for loading CSS library
 * @param id {String} id for the newly creating script element
 * @param location {String} path for the library
 */
export const loadCSS = async (id, location) => {
  return new Promise((resolve) => {
    let elem = document.createElement("link")
    elem.id = id
    elem.href = location
    elem.rel = "stylesheet"
    document.body.appendChild(elem)
    elem.onload = async function () {
      resolve()
    }
    // }
  })
}
