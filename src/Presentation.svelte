<script>
  export let slides;
  $: numSlides = parseInt(slides);

  import { activeSlide } from "./stores.js";
  function handleKeydown(event) {
    if (event.key === "ArrowRight") {
      activeSlide.update(n => Math.min(n + 1, numSlides));
    } else if (event.key === "ArrowLeft") {
      activeSlide.update(n => Math.max(1, n - 1));
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<slot />
