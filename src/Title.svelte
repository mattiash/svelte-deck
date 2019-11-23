<script>
  export let date = "";
  export let author = "";
</script>

<style>
  div.title {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    padding-left: 1em;
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
    margin-top: 0;
    line-height: 100%;
  }

  div.author {
    position: absolute;
    bottom: 0.4em;
    font-size: 0.7em;
  }
</style>

<div class="title">
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
