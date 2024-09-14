let animate = document.querySelector("#particles-js")

animate.style.display = "none"

const grads = ["linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)", "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)", "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)", "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)", "linear-gradient( 83.2deg,  rgba(150,93,233,1) 10.8%, rgba(99,88,238,1) 94.3% )", "linear-gradient( 68.3deg,  rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% )", "radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% )", "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )", "linear-gradient( 63.1deg,  rgba(5,23,111,1) 16.4%, rgba(24,95,240,1) 64.5% )"]
const changeGradient = () => {
  let random = Math.floor(Math.random() * grads.length)
  localStorage.setItem("bgGradient", grads[random])
  animate.style.background = grads[random]
}
