<footer class="footer">
  <div class="content">
    Designed and Developed by
    <a href="https://github.com/does-stuff/Adventure-Cymru">Morgan Jones</a>
    using <a href="https://kit.svelte.dev">SvelteKit</a> and
    <a href="https://figma.com">Figma</a>.
  </div>
</footer>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    background-color: $black;
  }

  .content {
    font-family: "Poppins", sans-serif;
    color: white;
    text-align: center;

    & a {
      color: $accent;
      text-decoration: none;
      font-weight: 600;
    }
  }
</style>
