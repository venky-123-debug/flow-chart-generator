<script>
  import Router, { push } from "svelte-spa-router"
  import { onMount } from "svelte"
  import routes from "./Routes/index"
  import NotificationSystem from "./Shared/Notification/index.svelte"

  onMount(() => {
    const load = document.getElementById("mainLoader")
    load.style.display = "none"
    const mainContent = document.getElementById("mainContent")
    mainContent.style.display = "block"
  })
</script>

<div>
  <Router {routes} />
</div>

<NotificationSystem />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    html {
      -webkit-tap-highlight-color: transparent;
    }
  }

  .wordBreak {
    word-break: break-word;
  }

  body {
    font-family: "Nunito", sans-serif;
  }
  /*This would all go into the global.css file*/
  [data-tooltip] {
    position: relative;
    /* z-index: 1000; */
    display: inherit;
  }

  [data-tooltip]:before,
  [data-tooltip]:after {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    /* animation-delay: 3s; */
    /* transition-delay: 1s; */
    /* transform: translate(-50%, 5px); */
  }

  [tooltip-position="top"]:before {
    /* top */
    margin-bottom: 5px;
    bottom: 100%;
    left: 50%;
  }
  [tooltip-position="bottom"]:before {
    /* bottom */
    margin-top: 5px;
    top: 100%;
    left: 50%;
  }
  [tooltip-position="right"]:before {
    /* right */
    margin-left: 6.8px;
    left: 100%;
    top: 50%;
  }
  [tooltip-position="left"]:before {
    /* left */
    margin-right: 6.8px;
    right: 100%;
    top: 50%;
  }

  [data-tooltip]:before {
    position: absolute;
    word-break: break-all;

    padding: 7px;
    width: max-content;
    max-width: 100vh;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #666666;
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
    /* transition: 0.2s ease-out; */
  }

  [tooltip-position="top"]:after {
    /* top */
    border-top: 5px solid #666666;
    bottom: 100%;
    left: 50%;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
  [tooltip-position="bottom"]:after {
    /* bottom */
    top: 100%;
    left: 50%;
    border-bottom: 5px solid #666666;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
  [tooltip-position="right"]:after {
    /* right */
    margin-left: 2px;
    left: 100%;
    top: 50%;
    border-right: 5px solid #666666;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  [tooltip-position="left"]:after {
    /* left */
    margin-right: 2px;
    right: 100%;
    top: 50%;
    border-left: 5px solid #666666;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  [data-tooltip]:after {
    position: absolute;
    content: " ";
    font-size: 0;
    line-height: 0;
  }

  [tooltip-position="bottom"]:hover:before,
  [tooltip-position="bottom"]:hover:after,
  [tooltip-position="top"]:hover:before,
  [tooltip-position="top"]:hover:after {
    transform: translate(-50%, 0);
  }
  [tooltip-position="right"]:hover:before,
  [tooltip-position="right"]:hover:after,
  [tooltip-position="left"]:hover:before,
  [tooltip-position="left"]:hover:after {
    transform: translate(0, -50%);
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    visibility: visible;
    z-index: 1000;
    opacity: 1;
  }

  [data-tooltip="false"]:hover:before,
  [data-tooltip="false"]:hover:after {
    visibility: hidden;
    opacity: 0;
  }

  [type="checkbox"]:focus {
    outline: 0;
    outline-offset: 0;
    --tw-ring-inset: none;
    --tw-ring-offset-width: 0;
    --tw-ring-offset-color: transparent;
    --tw-ring-color: transparent;
    --tw-ring-offset-shadow: none;
    --tw-ring-shadow: none;
    box-shadow: none;
  }
</style>
