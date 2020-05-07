<script>
  export let title = "";
  document.title = title;
</script>

<div class="title">
  <div class="spacer" />
  <h1>{title}</h1>
  <slot />
  <div class="spacer" />
</div>
