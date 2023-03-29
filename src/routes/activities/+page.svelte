<script>
  import Banner from "$lib/Banner.svelte";
</script>

<Banner>
  <h1>Activities</h1>
</Banner>

<p>
  Here at Adventure Cymru, we offer a wide-range of activities. You can find
  them below!
</p>

<ul>
  <li><a class="blocked" href="#/">Sailing</a></li>
  <li><a class="blocked" href="#/">Swimming</a></li>
  <li><a href="/activities/kitesurfing">Kitesurfing</a></li>
  <li><a class="blocked" href="#/">Canoeing</a></li>
  <li><a class="blocked" href="#/">Kayaking</a></li>
  <li>
    <a class="blocked" href="#/">Paddle Boarding</a>
  </li>
</ul>

<style lang="scss">
  .blocked {
    text-decoration: line-through;
    cursor: not-allowed;
    color: red;
  }
</style>
