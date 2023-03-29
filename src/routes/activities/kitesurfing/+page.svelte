<script>
  import Banner from "$lib/Banner.svelte";
</script>

<Banner>
  <h1>Kitesurfing</h1>
</Banner>

<main>
  <h2>What is Kitesurfing?</h2>

  <div class="horizontalSplit">
    <div class="content">
      <p>
        Kitesurfing is a wind-powered water surface sport where you stand on a
        board and use a kite to move across the surface of the water. The kite
        uses the wind to propel you forward.
      </p>
      <p>
        If you would like to see an animated demonstration, you can check out
        this video!
      </p>
    </div>
    <video class="video" controls>
      <source src="/kitesurf_animation.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>
  </div>

  <h2>Skills & Attributes for Kitesurfing</h2>

  <ul>
    <li>Relatively good fitness (<b>especially</b> in the core)</li>
    <li>Swimming ability</li>
    <li>Good confidence in yourself & trying new things</li>
    <li>The ability to remain calm</li>
  </ul>

  <h2>Learning to Kitesurf</h2>

  <p>
    When learning to Kitesurf with Adventure Cymru, you will go through 3 steps
  </p>
  <ol>
    <li>
      Flying a kite <b>on land</b> (launching, landing & controlling a kite).
    </li>
    <li>
      Flying a kite <b>in water</b> (body dragging, control & re-launching)
    </li>
    <li>Standing on & riding a board in the water</li>
  </ol>

  <p>
    You can also take a quick look at <a
      href="https://www.wikihow.com/Kite-Surf">this WikiHow</a
    > article for some extra tips and advice when starting out.
  </p>

  <p><b>These steps will also give you experience in:</b></p>
  <ul>
    <li>Assessing an area to ensure it is safe to kite</li>
    <li>Understanding wind direction</li>
    <li>Understanding tides, currents & hazards</li>
    <li>Choosing the right equipment</li>
    <li>Setting-up, tuning & packing away equipment</li>
    <li>Safety procedures</li>
    <li>What to do in case on an emergency</li>
    <li>Board-starts (standing on the board)</li>
    <li>Continuous riding</li>
    <li>Speed control</li>
    <li>Rules & right-of-ways on the water</li>
  </ul>

  <h2>What Equipment do I Need to Kitesurf?</h2>
  <ul>
    <li>A kite</li>
    <li>A control bar</li>
    <li>A seat (beginners) or waist harness (more advanced)</li>
    <li>A safety leash</li>
    <li>A large kite board</li>
    <li>A helmet</li>
    <li>Water shoes</li>
    <li>A wetsuit</li>
  </ul>
</main>

<style lang="scss">
  .horizontalSplit {
    display: grid;
    justify-content: center;
    place-items: center;
  }

  .video {
    aspect-ratio: 16/9;
    width: 100%;
    border-radius: 8px;
  }

  @media (min-width: 876px) {
    .horizontalSplit {
      grid-template-columns: 2fr 3fr;
    }

    .video {
      width: 75%;
    }
  }
</style>
