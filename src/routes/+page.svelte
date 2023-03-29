<script>
  import Banner from "$lib/Banner.svelte";

  const d = new Date();
  const hour = d.getHours();
  const greetingText = (() => {
    if (hour >= 21) return "Nos da";
    else if (hour >= 17) return "Noswaith dda";
    else if (hour >= 12) return "Prynhawn da";
    else return "Bore da";
  })();
</script>

<svelte:head>
  <title>Adventure Cymru</title>
</svelte:head>

<Banner>
  <h1>{greetingText}! We're Adventure Cymru.</h1>
</Banner>

<main>
  <h2>Who are we?</h2>
  <p>
    <b>Adventure Cymru</b> is Wales' favourite outdoor centre. We offer a wide range
    of activities, kite-surfing, kayaking and more.
  </p>
  <p>
    Recently, Adventure Cymru won a grant! This has allowed us to run
    residential courses and allow our visitors to experience an <b
      >even <i>wider</i></b
    >
    range of activities over <b>several-day-long visits!</b> These multi-day visits
    help build confidence and get people moving!
  </p>
  <p>
    By far, our customer-favourite activity is <a href="/activities/kitesurfing"
      >Kitesurfing</a
    >. But, if that doesn't tickle your fancy, how about taking a look at
    <a href="/activities">our other activities</a>?
  </p>
</main>
