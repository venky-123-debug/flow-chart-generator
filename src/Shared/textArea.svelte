<script>
  import { onDestroy } from "svelte"
  export let value = ""
  export let maxCharacters = 500

  let textarea

  /**
   * function to auto scrollheight of textarea based on scrollheight
   */
  const autoGrow = () => {
    textarea.style.height = textarea.scrollHeight + "px"
  }

  /**
   * setting time for autogrow function to get auto scrollHeight
   */
  let timer = setInterval(autoGrow, 50)
  /**
   * clearing timer for preventing autogrowing of the textarea height.
   */
  onDestroy(() => {
    clearTimeout(timer)
  })
</script>

<div class="relative">
  <textarea
    on:input={autoGrow}
    on:input={() => {
      if (value.length >= maxCharacters) {
        //checking for input characters length is greater than maxCharacters
        value = value.slice(0, maxCharacters) //returning input length value not to exclude more than maxchars(500)
      }
    }}
    bind:value
    bind:this={textarea}
    class="block min-h-[100px] w-full resize-none overflow-hidden rounded-md border border-[#a0a1a580] bg-white px-3 py-2 pb-9 pl-5 text-justify text-sm text-gray-800 outline-none placeholder:text-gray-200 focus:border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    placeholder="Enter text here..."
  />
  <div class="text-normal absolute bottom-1 right-2 inline-flex select-none items-center justify-center text-blue-500 md:bottom-2 md:right-3">
    characters used ( <span class="text-xs">
      &nbsp;{value.length} / {maxCharacters}&nbsp;
    </span>
    )
  </div>
</div>
