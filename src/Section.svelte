<script>
  let className;

  export { className as class };
</script>

<style>
  div.section {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    padding-left: 1em;
  }

  div.d2 {
    height: 100%;
    position: relative;
  }

  div.d3 {
    margin: 0;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
  }

  h1 {
    margin-top: 0;
  }
</style>

<div class="section {className}">
  <div class="d2">
    <div class="d3">
      <h1>
        <slot />
      </h1>
    </div>
  </div>
</div>
