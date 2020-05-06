<script>
  export let title = "";
  document.title = title;
</script>

<style>
  div.title {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    padding-left: 0.5em;
  }

  /* First spacer */
  .title div.spacer:nth-child(1) {
    flex-grow: 2;
    order: 1;
  }

  /* First p in slot */
  :global(p:nth-child(3)) {
    order: 2;
  }

  h1 {
    order: 3;
    margin: 0;
  }

  /* Last spacer */
  .title div.spacer {
    flex-grow: 1;
    order: 4;
  }

  /* Second p in slot */
  :global(p:nth-child(4)) {
    order: 5;
    font-size: 0.7em;
  }


</style>

<div class="title">
  <div class="spacer" />
  <h1>{title}</h1>
  <slot />
  <div class="spacer" />
</div>
