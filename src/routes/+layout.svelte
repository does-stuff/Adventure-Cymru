<script lang="ts">
  import "../styles/app.scss";
  import Navbar from "$components/layout/Navbar.svelte";
  import Footer from "$components/layout/Footer.svelte";
</script>

<div class="wrapper">
  <div class="navWrapper">
    <Navbar />
  </div>
  <div class="content">
    <slot />
  </div>
  <div class="footerWrapper">
    <Footer />
  </div>
</div>
