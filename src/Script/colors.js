/**
 * Converts a hue value to its corresponding RGB value within the HSL color space.
 * @param {number} p - The calculated parameter used in the conversion.
 * @param {number} q - The calculated parameter used in the conversion.
 * @param {number} t - The input hue value (0-1).
 * @returns {number} The corresponding RGB value.
 */
const hueToRgb = (p, q, t) => {
  if (t < 0) t += 1 // Wrap around for values less than 0
  if (t > 1) t -= 1 // Wrap around for values greater than 1
  if (t < 1 / 6) return p + (q - p) * 6 * t // Calculate RGB value for the first segment
  if (t < 1 / 2) return q // Calculate RGB value for the second segment
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6 // Calculate RGB value for the third segment
  return p // Calculate RGB value for the remaining segment
}

/**
 * Converts HSL (Hue, Saturation, Lightness) color values to hexadecimal format.
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-100).
 * @param {number} l - The lightness value (0-100).
 * @returns {string} The color in hexadecimal format.
 */
const hslToHex = (h, s, l) => {
  h /= 360 // Normalize hue value to the range of 0-1
  s /= 100 // Normalize saturation value to the range of 0-1
  l /= 100 // Normalize lightness value to the range of 0-1

  let r, g, b

  if (s === 0) {
    // If saturation is 0, it's a shade of gray
    r = g = b = l
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = Math.round(hueToRgb(p, q, h + 1 / 3) * 255)
    g = Math.round(hueToRgb(p, q, h) * 255)
    b = Math.round(hueToRgb(p, q, h - 1 / 3) * 255)
  }

  // Convert RGB values to hexadecimal format and return the color
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
}

/**
 * Generates an array of equally spaced colors on the color wheel.
 * @param {number} n - The number of colors to generate.
 * @returns {string[]} An array of colors in hexadecimal format.
 */
export const getEquallySpacedColors = (n) => {
  const colors = [] // Array to store the generated colors
  const step = 360 / n // Calculate the step size between each color

  for (let i = 0; i < n; i++) {
    const hue = (i * step) % 360 // Calculate the hue value based on the index and step size
    const color = hslToHex(hue, 100, 50) // Convert the HSL color to hexadecimal format
    colors.push(color) // Add the color to the array
  }

  return colors // Return the array of colors
}
