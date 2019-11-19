<script>
  export let n;
  import { activeSlide, overview } from "./stores.js";
  let num;
  let translateX;
  let translateY;
  let transform;
  $: {
    num = parseInt(n);
    translateX = [-110, 0, 110][(num - 1) % 3];
    translateY = -110 + 110 * Math.floor((num - 1) / 3) - 330 * (num - 1);
    transform = `scale(0.3) translate(${translateX}%, ${translateY}%)`;
  }

  function click() {
    activeSlide.update(() => parseInt(num));
    overview.update(() => false);
  }
</script>

<style>
  div.container {
    width: 100vw;
    height: 100vh;
    background-color: #ddd;
    display: none;
  }

  div.container.visible {
    display: block;
  }

  div.container.overview {
    box-shadow: 20px 15px 8px #888;
    border: 4px solid #888;
    cursor: pointer;
  }
</style>

<div
  class="container"
  class:visible={$overview || $activeSlide === num}
  class:overview={$overview}
  style={$overview ? `transform: ${transform}` : ''}
  on:click={click}>
  <div class="slide">
    <slot />
    <div />
  </div>
</div>
