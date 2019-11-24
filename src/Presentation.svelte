<script>
  export let slides;
  import { activeSlide, overview } from "./stores.js";
  import { openFullscreen } from "./fullscreen.js";
  $: numSlides = parseInt(slides);

  function handleKeydown(event) {
    if (event.key === "ArrowRight") {
      activeSlide.update(n => Math.min(n + 1, numSlides));
    } else if (event.key === "ArrowLeft") {
      activeSlide.update(n => Math.max(1, n - 1));
    } else if (event.key === "o") {
      overview.update(v => !v);
    }
    else if (event.key === 'f' ) {
      openFullscreen()
    }
  }

  overview.subscribe(v => {
    if (v) {
      document.body.classList.add("overview");
    } else {
      document.body.classList.remove("overview");
    }
  });
</script>

<svelte:window on:keydown={handleKeydown} />
<slot />
