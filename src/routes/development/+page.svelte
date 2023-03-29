<script>
  import Banner from "$lib/Banner.svelte";
</script>

<Banner>
  <h1>Development</h1>
</Banner>

<main class="sectContainer">
  <article class="section light">
    <h2>Analysis Log</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non
      quam odio voluptate inventore molestiae id nihil, reprehenderit animi
      deleniti ducimus fugit rerum velit quaerat eius necessitatibus, blanditiis
      minima dignissimos?
    </p>
    <a href="/development/analysis_log" class="btn">Download</a>
  </article>
  <article class="section dark">
    <h2>Development Log</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non
      quam odio voluptate inventore molestiae id nihil, reprehenderit animi
      deleniti ducimus fugit rerum velit quaerat eius necessitatibus, blanditiis
      minima dignissimos?
    </p>
    <a href="/development/development_log" class="btn">Download</a>
  </article>
  <article class="section light">
    <h2>Survey</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non
      quam odio voluptate inventore molestiae id nihil, reprehenderit animi
      deleniti ducimus fugit rerum velit quaerat eius necessitatibus, blanditiis
      minima dignissimos?
    </p>
    <a href="/development/survey" class="btn">Download</a>
  </article>
  <article class="section dark">
    <h2>Assets Table</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non
      quam odio voluptate inventore molestiae id nihil, reprehenderit animi
      deleniti ducimus fugit rerum velit quaerat eius necessitatibus, blanditiis
      minima dignissimos?
    </p>
    <a href="/development/assets_table" class="btn">Download</a>
  </article>
</main>

<style lang="scss">
  .sectContainer :last-child {
    margin-bottom: -25px;
  }

  .section {
    padding-block: 25px;
  }

  .dark {
    background-color: $black;
    box-shadow: 0 0 0 100vmax $black;
    clip-path: inset(0 -100vmax);
    color: $white;
  }

  .light {
    background-color: $white;
    box-shadow: 0 0 0 100vmax $white;
    clip-path: inset(0 -100vmax);
    color: $black;
  }

  .btn {
    display: inline-block;
    width: fit-content;
    background-color: $accent;
    padding: 10px 15px;
    font-family: "Manrope", sans-serif;
    text-decoration: none;
    color: $black;
    border-radius: 4px;
    margin-top: 15px;
  }
</style>
