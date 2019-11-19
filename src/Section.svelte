<style>
  div.d1 {
    width: 100%;
    height: 100%;
    background-color: grey;
    /* background-color: colors[color].background; */
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
    top: 60%;
    transform: translateY(-50%);
  }

  h1 {
    font-family: "Roboto Slab";
    word-spacing: -10%;
    font-weight: bold;
    /* color: colors[color].text; */
    font-size: 3em;
    margin-top: 0;
    line-height: 100%;
  }
</style>

<div class="d1">

  <div class="d2">
    <div class="d3">
      <h1>
        <slot />
      </h1>
    </div>
  </div>
</div>
