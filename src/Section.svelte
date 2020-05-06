<script>
  let className;

  export { className as class };
</script>

<div class="section {className}">
  <div class="d2">
    <div class="d3">
      <h2>
        <slot />
      </h2>
    </div>
  </div>
</div>
