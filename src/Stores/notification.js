import { writable } from "svelte/store"

/**
 * @typedef {Object} Notification - represents the notification of type and message
 * @type {Object}
 * represents the notification of type and message
 *
 * @property {"primary" | "secondary" | "danger" | "info" | "success" | "warning"} type - type of the notification
 * @property {String} message - message of the notification
 * @property {Number} id - ID of the notification
 * @property {Number} duration - duration to show the notification for
 */

/**
 * @type {import("svelte/store").Writable<Array<Notification>>}
 */
const Notification = writable([])

export default Notification
