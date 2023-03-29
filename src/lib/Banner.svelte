<header class="banner">
  <div class="content">
    <slot />
  </div>
</header>

<style lang="scss">
  .banner {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: $black;
    color: $white;
    border-radius: 0 0 10px 10px;
    margin-top: -10px;

    min-height: 250px;

    justify-content: center;
    align-items: end;

    box-shadow: 0 0 0 100vmax $black;
    clip-path: inset(0 -100vmax);
    z-index: -100;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 256px;
    width: 100%;
    padding-inline: 20px;
  }
</style>
