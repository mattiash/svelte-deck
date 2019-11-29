<script>
  export let n;
  import { activeSlide, overview } from "./stores.js";
  let num;
  let translateX;
  let translateY;
  let transform;
  $: {
    num = parseInt(n);
    const f = 111.111
    translateX = [-f, 0, f][(num - 1) % 3];
    translateY = -f + f * Math.floor((num - 1) / 3) - 3*f * (num - 1);
    transform = `scale(0.3) translate(${translateX}%, ${translateY}%)`;
  }

  function click() {
    activeSlide.update(() => parseInt(num));
    overview.update(() => false);
  }
</script>

<style>

  div.container.overview {
    position: relative;
    box-shadow: 20px 15px 8px #888;
    border: 4px solid #888;
    cursor: pointer;
  }

  @media screen {
    div.container {
      width: 100vw;
      height: 100vh;
    }

    div.container {
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.4s;
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
  }

  @page {
    margin: 1cm;
    size: landscape;
  }

  @page :footer {
    display: none;
  }

  @page :header {
    display: none;
  }

  @media print {
    div.container {
      width: 100vw;
      height: 100vh;
      page-break-after: always;
    }

    div.container:last-child {
      page-break-after: avoid;
    }
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
