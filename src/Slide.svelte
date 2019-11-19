<script>
  export let n;
  import { activeSlide } from "./stores.js";
  $: num = parseInt(n);
  let innerHeight;
</script>

<style>
  div.container {
    width: 100vw;
    background-color: #ddd;
  }

  div.container.hidden {
    display: none;
  }
</style>

<svelte:window bind:innerHeight />
<div
  class="container"
  class:hidden={$activeSlide !== num}
  style="height: {innerHeight}px">
  <div class="slide">
    <slot />
    <div />
  </div>
</div>
