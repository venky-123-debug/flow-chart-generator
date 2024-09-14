<script>
  export let notification
  import { fade } from "svelte/transition"
  import notificationStore from "../../../Stores/notification"

  let showCloseDuration, backgroundColor, icon
  switch (notification.type) {
    case "primary":
      showCloseDuration = notification.duration
      backgroundColor = "bg-alert-primary"
      icon = "fa-bell"
      break
    case "secondary":
      showCloseDuration = notification.duration
      backgroundColor = "bg-alert-secondary"
      icon = "fa-lightbulb"
      break
    case "danger":
      showCloseDuration = notification.duration
      backgroundColor = "bg-alert-danger"
      icon = "fa-triangle-exclamation"
      break
    case "warning":
      showCloseDuration = notification.duration
      backgroundColor = "bg-alert-warning"
      icon = "fa-shield-exclamation"
      break
    case "info":
      showCloseDuration = notification.duration
      backgroundColor = "bg-alert-info"
      icon = "fa-circle-exclamation"
      break
    case "success":
      showCloseDuration = notification.duration
      backgroundColor = "bg-alert-success"
      icon = "fa-circle-check"
      break
  }
  const closeNotification = (id) => {
    notificationStore.update((notificationStore) => {
      return notificationStore.filter((notificationStore) => notificationStore.id != id)
    })
  }

  setTimeout(closeNotification, notification.duration, notification.id)

  /**
   * @type {String}
   */
  let message = notification.message
  let countdown = notification.duration / 1000
  if (message.indexOf("%COUNT%") != -1) {
    // count exists
    let countDownTimer = setInterval(() => {
      if (countdown > 0) {
        countdown = Math.round((countdown - 0.1) * 10) / 10
      } else {
        clearInterval(countDownTimer)
      }
    }, 100)
  }
  $: message = notification.message.replace("%COUNT%", countdown)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => closeNotification(notification.id)} transition:fade={{ duration: 300 }} class="pointer-events-auto flex w-full select-none items-center justify-between gap-4 rounded-md p-3 {backgroundColor}">
  <div class="flex items-center gap-4">
    <div class="text-white">
      <i class="{icon} fa-solid fa-xl" />
    </div>
    <h1 class="break-words text-base font-medium tracking-wide text-white">
      {@html message}
    </h1>
  </div>
  <!-- event forwarding -->
  <!-- <button
    on:click={() => closeNotification(notification.id)}
    on:click|preventDefault
  >
    <Close class="h-5 w-5 fill-white" />
  </button> -->

  <button on:click={() => closeNotification(notification.id)} on:click|preventDefault>
    <div class="text-white">
      <i class="fa-light fa-xmark fa-lg" />
    </div>
  </button>
</div>
