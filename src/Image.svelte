<script>
  export let href;
</script>

<style>
  div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    flex-grow: 10;
    margin-top: 0.5em;
  }

  div:last-child {
    margin-bottom: 0.5em;
  }
</style>

<div style="background-image: url('{href}')" />
