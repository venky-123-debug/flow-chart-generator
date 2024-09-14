import { writable } from "svelte/store"
/**
 * @type {ApplicationState}
 */
let storedApplicationState = localStorage.getItem("FLOW_CHART_V1.0")
if (typeof storedApplicationState != "Object") {
  try {
    storedApplicationState = JSON.parse(storedApplicationState)
    if (!storedApplicationState) {
      throw new Error("storedApplicationState value is null")
    }
  } catch (error) {
    // console.error(error)
    storedApplicationState = {}
    storedApplicationState.notificationPosition = "top-right"
    storedApplicationState.darkMode = false
    // storedApplicationState.currentContent = "settings-settings"
  } finally {
    storedApplicationState.checkUpdateValue = {}
  }
}

/**
 * @typedef {Object} ApplicationState - represents application states during its operations
 * @type {Object}
 * represents application states during its operations
 *
 * @property {string} token - x-accesss-token to be used for authenticating other request
 * @property {string} created - ISO8601 Date of when the user was created
 * @property {string} email - Registered email of the user
 * @property {string} issuerID - ID of the currently logged in user
 * @property {string} name - Registered Name of the user
 * @property {string} pubkey - Public Key of the user
 * @property {string} tokenhmac - hmac value for the generated token
 * @property {Object} section - indicates the section shows in the main container
 * @property {"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center"| "bottom-right"} notificationPosition - position of the notification that given by user
 * @property {Boolean} addEmailTemplate - indicates adding email template state to open and close carousel
 * @property {Boolean} addFileTemplate - indicates adding file template state to open and close carousel
 * @property {Boolean} checkUpdateValue - to manage state for addfield button in doc edit page for dispatched value
 * @property {Boolean} fileListToggle - file template list design toggle veriable
 * @property {Boolean} darkMode - to display dark or light mode
 */

/**
 * @type {import("svelte/store").Writable<ApplicationState>}
 */

const ApplicationState = writable(storedApplicationState)

ApplicationState.subscribe((value) => {
  localStorage.setItem("FLOW_CHART_V1.0", JSON.stringify(value))
})

export default ApplicationState
