<script>
  export let date = "";
  export let author = "";
</script>

<style>
  div.d1 {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #0055ff 50%, #0ae6be);
    background-size: 100% 100%;
    padding-left: 1em;
    color: white;
    position: absolute;
    top: 0;
  }

  div.d2 {
    height: 100%;
    position: relative;
  }

  div.d3 {
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  h1 {
    font-family: Roboto Slab;
    word-spacing: -10%;
    font-weight: bold;
    color: white;
    font-size: 3em;
    margin-top: 0;
    line-height: 100%;
  }

  div.author {
    position: absolute;
    bottom: 0.4em;
    font-size: 0.7em;
  }
</style>

<div class="d1">
  <div class="d2">
    <div class="d3">
      <div>{date}</div>
      <h1>
        <slot />
      </h1>
    </div>
    <div class="author">{author}</div>

  </div>
</div>
