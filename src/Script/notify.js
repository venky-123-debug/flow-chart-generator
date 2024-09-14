import notificationStore from "../Stores/notification"

/**
 * Adds a new notification entry into the stores
 * @param {String} type - type of notification
 * @param {String} message - message to be shown in notification
 * @param {String} duration - how long should the message be shown
 */
let notificationInfo = {}
const updateStore = (type, message, duration) => {
  notificationStore.update((store) => {
    let id = Date.now() + Math.random()
    notificationInfo = {
      type: type,
      message: message,
      id: id,
      close: () => {
        notificationStore.update((store) => {
          return store.filter((notification) => notification.id != id)
        })
      },
    }
    if (duration) notificationInfo.duration = duration
    let notificationArray = [...store, notificationInfo]
    return notificationArray
  })
  return notificationInfo
}

const notify = {
  /**
   * Creates a primary type notification
   * @param {String} message - message to be shown in the notification
   * @param {Number} duration - (Optional) how long should the message be shown, in ms, default: 3000
   * @returns {void}
   */
  primary: (message, duration = 3000) => {
    return updateStore("primary", message, duration)
  },
  /**
   * Creates a secondary type notification
   * @param {String} message - message to be shown in the notification
   * @param {Number} duration - (Optional) how long should the message be shown, in ms, default: 2000
   * @returns {void}
   */
  secondary: (message, duration = 2000) => {
    return updateStore("secondary", message, duration)
  },
  /**
   * Creates a danger type notification
   * @param {String} message - message to be shown in the notification
   * @param {Number} duration - (Optional) how long should the message be shown, in ms, default: 10000
   * @returns {void}
   */
  danger: (message, duration = 10000) => {
    return updateStore("danger", message, duration)
  },
  /**
   * Creates a warning type notification
   * @param {String} message - message to be shown in the notification
   * @param {Number} duration - (Optional) how long should the message be shown, in ms, default: 5000
   * @returns {void}
   */
  warning: (message, duration = 5000) => {
    return updateStore("warning", message, duration)
  },
  /**
   * Creates a info type notification
   * @param {String} - message to be shown in the notification message
   * @param {Number} duration - (Optional) how long should the message be shown, in ms, default: 3000
   * @returns {void}
   */
  info: (message, duration = 3000) => {
    return updateStore("info", message, duration)
  },
  /**
   * Creates a success type notification
   * @param {String} message - message to be shown in the notification
   * @param {Number} duration - (Optional) how long should the message be shown, in ms, default: 4000
   * @returns {void}
   */
  success: (message, duration = 4000) => {
    return updateStore("success", message, duration)
  },
}
export default notify
