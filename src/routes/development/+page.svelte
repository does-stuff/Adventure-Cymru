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
      This is a document explaining how I have analysed some data from a
      Microsoft Excel document.
    </p>
    <a href="/evidence/analysis_log.pdf" class="btn" download>Download</a>
  </article>
  <article class="section dark">
    <h2>Survey</h2>
    <p>This is the analysed and modified survey data mentioned above.</p>
    <a href="/evidence/survey_data.xlsx" class="btn" download>Download</a>
  </article>
  <article class="section light">
    <h2>Development Log</h2>
    <p>
      This documents my entire process of branding Adventure Cymru, making the
      animation on the <a href="/activities/kitesurfing">Kitesurfing page</a> and
      making this website.
    </p>
    <a href="/evidence/development_log.pdf" class="btn" download>Download</a>
  </article>
  <article class="section dark">
    <h2>Assets Log</h2>
    <p>
      This is a table of all of the assets (images, etc.) used for this website.
    </p>
    <a href="/evidence/assets_log.pdf" class="btn" download>Download</a>
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
