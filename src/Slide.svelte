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
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: transform 0.4s;
  }

  div.container.overview {
    position: relative;
    box-shadow: 20px 15px 8px #888;
    border: 4px solid #888;
    cursor: pointer;
  }

  .left {
    transform: translateX(-100%);
  }
  .right {
    transform: translateX(100%);
  }
  .visible {
    transform: translateX(0);
  }
</style>

<div
  class="container"
  class:left={!$overview && $activeSlide > num}
  class:right={!$overview && $activeSlide < num}
  class:visible={!$overview && $activeSlide === num}
  class:overview={$overview}
  style={$overview ? `transform: ${transform}` : ''}
  on:click={click}>
  <div class="slide">
    <slot />
    <div />
  </div>
</div>
