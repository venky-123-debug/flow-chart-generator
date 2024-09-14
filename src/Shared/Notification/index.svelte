<script>
  import Notification from "./Components/notification.svelte"
  import ApplicationState from "../../Stores/applicationStates"
  import notificationStore from "../../Stores/notification"
  import { flip } from "svelte/animate"

  let notifications = []
  notificationStore.subscribe((data) => {
    notifications = data
  })
  let positionClasses = "flex-col items-end"
  switch ($ApplicationState.notificationPosition) {
    case "top-left":
      positionClasses = "flex-col items-start"
      break
    case "top-center":
      positionClasses = "flex-col items-center"
      break
    case "top-right":
      positionClasses = "flex-col items-end"
      break
    case "bottom-left":
      positionClasses = "flex-col-reverse items-start"
      break
    case "bottom-center":
      positionClasses = "flex-col-reverse items-center"
      break
    case "bottom-right":
      positionClasses = "flex-col-reverse items-end"
      break
  }
</script>

<div class="pointer-events-none fixed inset-5 z-50 flex gap-3 overflow-hidden mobile:inset-y-20 mobile:inset-x-10 mobile:gap-5 {positionClasses}">
  {#each notifications as notification (notification.id)}
    <div class="w-full mobile:w-2/3 md:w-1/2 lg:w-1/3 xls:w-1/4" animate:flip={{ duration: 500 }}>
      <Notification {notification} />
    </div>
  {/each}
</div>
