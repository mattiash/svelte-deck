<script>
  export let title = "";
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

  .spacer {
    flex-grow: 1;
  }

  :global(p) {
    margin-left: 0;
  }

  /* First spacer */
  .title div.spacer:nth-child(1) {
    order: 1
  }

  /* First p in slot */
  :global(p:nth-child(3)) {
    order: 2;
  }

  h1 {
    order: 3;
    margin-top: 0;
    line-height: 80%;
  }

  /* Last spacer */
  .title div.spacer {
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
