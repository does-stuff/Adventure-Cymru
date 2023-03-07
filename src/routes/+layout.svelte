<script lang="ts">
  import "../styles/app.scss";
  import Navbar from "$components/layout/Navbar.svelte";
</script>

<div class="wrapper">
  <div class="navWrapper">
    <Navbar />
  </div>
  <div class="content">
    <slot />
  </div>
</div>
