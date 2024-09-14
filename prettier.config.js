module.exports = {
  semi: false,
  htmlWhitespaceSensitivity: "ignore",
  printWidth: 800,
  plugins: [
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  pluginSearchDirs: false,
}
