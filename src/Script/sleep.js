/**
 * function to execute after a time duration
 * @param {Number} time -delay timer to execute after its specified duration
 * @returns Promise
 */
export const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
