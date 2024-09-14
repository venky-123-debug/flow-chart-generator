<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  import { onMount } from "svelte"
  export let code = ""
  export let title = "Enter Authentication Code"
  export let btnName = "Confirm"
  export let cancelBtn = false
  export let resentBtn = false

  let resentDisbale = false
  let authInput1
  let authInput2
  let authInput3
  let authInput4
  let authInput5
  let authInput6
  onMount(() => {
    authInput1.focus()
  })

  $: if (!code && authInput1) authInput1.focus()
  $: if (!code && authInput1 && authInput2 && authInput3 && authInput4 && authInput5 && authInput6) {
    authInput1.value = ""
    authInput2.value = ""
    authInput3.value = ""
    authInput4.value = ""
    authInput5.value = ""
    authInput6.value = ""
  }

  const pasteValue = (value) => {
    let pastedValue = value
    authInput1.value = pastedValue.slice(0, 1)
    authInput2.value = pastedValue.slice(1, 2)
    authInput3.value = pastedValue.slice(2, 3)
    authInput4.value = pastedValue.slice(3, 4)
    authInput5.value = pastedValue.slice(4, 5)
    authInput6.value = pastedValue.slice(5, 6)
  }
</script>

<form action="#" method="post" on:submit|preventDefault class="w-full space-y-3 rounded-md p-3">
  <h1 class="mb-6 block w-full select-none text-center text-sm font-medium text-gray-200 mobile:text-lg">{@html title}</h1>
  <div class=" flex flex-col items-center gap-3">
    <div class="flex gap-3">
      <input
        bind:this={authInput1}
        on:input={(e) => {
          if (e.inputType == "insertFromPaste") {
            pasteValue(e.target.value)
          }
          if (authInput1.value.length >= 1) {
            authInput1.value = e.target.value.slice(0, 1)
            if (code.length < 6) code = authInput1.value + authInput2.value + authInput3.value + authInput4.value + authInput5.value + authInput6.value
            if (e.inputType == "insertFromPaste") authInput6.focus()
            else authInput2.focus()
          }
        }}
        on:keypress={(e) => {
          if (e.key == "e" || e.key == "E" || e.key == "-" || e.key == "+" || e.key == ".") e.preventDefault()
        }}
        required
        type="number"
        name="authInput1"
        maxlength="1"
        class="h-9 w-9 rounded-md border border-[#a0a1a580] bg-transparent px-3 font-mono text-lg font-semibold text-gray-800 outline-none placeholder:font-normal placeholder:text-gray-200 invalid:border-red-500 invalid:placeholder-red-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 dark:text-white"
      />
      <input
        bind:this={authInput2}
        on:input={(e) => {
          if (e.inputType == "insertFromPaste") {
            pasteValue(e.target.value)
          }

          if (authInput2.value.length >= 1) {
            authInput2.value = e.target.value.slice(0, 1)
            if (code.length < 6) code = authInput1.value + authInput2.value + authInput3.value + authInput4.value + authInput5.value + authInput6.value
            if (e.inputType == "insertFromPaste") authInput6.focus()
            else authInput3.focus()
          }
        }}
        on:keypress={(e) => {
          if (e.key == "e" || e.key == "E" || e.key == "-" || e.key == "+" || e.key == ".") e.preventDefault()
        }}
        on:keydown={(e) => {
          if (e.key == "Backspace") {
            e.preventDefault()
            code = code.slice(0, code.length - 1)
            e.target.value = ""
            authInput1.focus()
          }
        }}
        required
        type="number"
        maxlength="1"
        class="h-9 w-9 rounded-md border border-[#a0a1a580] bg-transparent px-3 font-mono text-lg font-semibold text-gray-800 outline-none placeholder:font-normal placeholder:text-gray-200 invalid:border-red-500 invalid:placeholder-red-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 dark:text-white"
      />
      <input
        bind:this={authInput3}
        on:input={(e) => {
          if (e.inputType == "insertFromPaste") {
            pasteValue(e.target.value)
          }

          if (authInput3.value.length >= 1) {
            authInput3.value = e.target.value.slice(0, 1)
            if (code.length < 6) code = authInput1.value + authInput2.value + authInput3.value + authInput4.value + authInput5.value + authInput6.value
            if (e.inputType == "insertFromPaste") authInput6.focus()
            else authInput4.focus()
          }
        }}
        on:keypress={(e) => {
          if (e.key == "e" || e.key == "E" || e.key == "-" || e.key == "+" || e.key == ".") e.preventDefault()
        }}
        on:keydown={(e) => {
          if (e.key == "Backspace") {
            e.preventDefault()
            code = code.slice(0, code.length - 1)
            e.target.value = ""
            authInput2.focus()
          }
        }}
        required
        type="number"
        maxlength="1"
        class="h-9 w-9 rounded-md border border-[#a0a1a580] bg-transparent px-3 font-mono text-lg font-semibold text-gray-800 outline-none placeholder:font-normal placeholder:text-gray-200 invalid:border-red-500 invalid:placeholder-red-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 dark:text-white"
      />
      <input
        bind:this={authInput4}
        on:input={(e) => {
          if (e.inputType == "insertFromPaste") {
            pasteValue(e.target.value)
          }
          if (authInput4.value.length >= 1) {
            authInput4.value = e.target.value.slice(0, 1)
            if (code.length < 6) code = authInput1.value + authInput2.value + authInput3.value + authInput4.value + authInput5.value + authInput6.value
            if (e.inputType == "insertFromPaste") authInput6.focus()
            else authInput5.focus()
          }
        }}
        on:keypress={(e) => {
          if (e.key == "e" || e.key == "E" || e.key == "-" || e.key == "+" || e.key == ".") e.preventDefault()
        }}
        on:keydown={(e) => {
          if (e.key == "Backspace") {
            e.preventDefault()
            code = code.slice(0, code.length - 1)
            e.target.value = ""
            authInput3.focus()
          }
        }}
        required
        type="number"
        maxlength="1"
        class="h-9 w-9 rounded-md border border-[#a0a1a580] bg-transparent px-3 font-mono text-lg font-semibold text-gray-800 outline-none placeholder:font-normal placeholder:text-gray-200 invalid:border-red-500 invalid:placeholder-red-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 dark:text-white"
      />
      <input
        bind:this={authInput5}
        on:input={(e) => {
          if (e.inputType == "insertFromPaste") {
            pasteValue(e.target.value)
          }
          if (authInput5.value.length >= 1) {
            authInput5.value = e.target.value.slice(0, 1)
            if (code.length < 6) code = authInput1.value + authInput2.value + authInput3.value + authInput4.value + authInput5.value + authInput6.value
            if (e.inputType == "insertFromPaste") authInput6.focus()
            else authInput6.focus()
          }
        }}
        on:keypress={(e) => {
          if (e.key == "e" || e.key == "E" || e.key == "-" || e.key == "+" || e.key == ".") e.preventDefault()
        }}
        on:keydown={(e) => {
          if (e.key == "Backspace") {
            e.preventDefault()
            code = code.slice(0, code.length - 1)
            e.target.value = ""
            authInput4.focus()
          }
        }}
        required
        type="number"
        maxlength="1"
        class="h-9 w-9 rounded-md border border-[#a0a1a580] bg-transparent px-3 font-mono text-lg font-semibold text-gray-800 outline-none placeholder:font-normal placeholder:text-gray-200 invalid:border-red-500 invalid:placeholder-red-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 dark:text-white"
      />
      <input
        bind:this={authInput6}
        on:input={(e) => {
          if (e.inputType == "insertFromPaste") {
            pasteValue(e.target.value)
          }
          if (authInput6.value.length >= 1) {
            authInput6.value = e.target.value.slice(0, 1)
            if (code.length < 6) code = authInput1.value + authInput2.value + authInput3.value + authInput4.value + authInput5.value + authInput6.value
            if (e.inputType == "insertFromPaste") authInput6.focus()
            else authInput6.focus()
          }
        }}
        on:keypress={(e) => {
          if (e.key == "e" || e.key == "E" || e.key == "-" || e.key == "+" || e.key == ".") e.preventDefault()
        }}
        on:keydown={(e) => {
          if (e.key == "Backspace") {
            e.preventDefault()
            code = code.slice(0, code.length - 1)
            authInput5.focus()
            authInput6.value = ""
          }
        }}
        required
        type="number"
        maxlength="1"
        class="h-9 w-9 rounded-md border border-[#a0a1a580] bg-transparent px-3 font-mono text-lg font-semibold text-gray-800 outline-none placeholder:font-normal placeholder:text-gray-200 invalid:border-red-500 invalid:placeholder-red-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 dark:text-white"
      />
    </div>
    <div class="flex select-none gap-3">
      {#if cancelBtn}
        <button on:click type="button" class="mt-6 flex h-9 min-w-[36px] items-center justify-center rounded-md border border-[#a0a1a580] bg-red-500 px-2 text-sm font-medium text-white hover:bg-red-600 hover:text-white focus:outline-none active:bg-red-500 disabled:cursor-not-allowed lg:px-4">
          <i class="fa-solid fa-circle-xmark" />
          &nbsp;&nbsp;Cancel&nbsp;
        </button>
      {/if}
      <button disabled={code.length < 6} type="submit" class="mt-6 {code.length < 6 ? 'bg-green-300 hover:bg-green-400 active:bg-green-200' : 'bg-green-500 hover:bg-green-600 active:bg-green-500'} flex h-9 min-w-[36px] items-center justify-center rounded-md border border-[#a0a1a580] px-2 text-sm font-medium text-white hover:text-white focus:outline-none disabled:cursor-not-allowed lg:px-4">
        <i class="fa-solid fa-circle-check" />
        &nbsp;&nbsp;{btnName}&nbsp;
      </button>
    </div>
    {#if resentBtn}
      <button
        disabled={resentDisbale}
        on:click={() => {
          resentDisbale = true
          setTimeout(() => (resentDisbale = false), 10000)
          dispatch("resendOTP")
        }}
        type="button"
        class="mx-auto mt-1.5 flex items-center justify-center border-b border-blue-500 text-sm font-medium text-blue-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none active:border-blue-500 active:text-blue-500 disabled:cursor-not-allowed"
      >
        <i class="fa-solid fa-rotate-left" />
        &nbsp;&nbsp;resend&nbsp;
      </button>
    {/if}
  </div>
</form>
