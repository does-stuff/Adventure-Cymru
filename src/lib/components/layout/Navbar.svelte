<script lang="ts">
  import { page } from "$app/stores";

  const active = "/" + ($page.url.pathname.split("/")[0] || "");

  interface Page {
    name: string;
    path:
      | `/${string}`
      | `http${"" | "s"}://${string}.${string}${"" | `/${string}`}`;
  }

  export let pages: Page[] = [
    { name: "Home", path: "/" },
    { name: "Activities", path: "/activities" },
    { name: "Development", path: "/development" },
  ];

  $: navOpen = false;
  const toggleNav = () => (navOpen = !navOpen);
</script>

<nav class="nav" class:open={navOpen}>
  <img src="/logos/character.svg" alt="Adventure Cymru logo" class="logo" />
  <ul class="list">
    {#each pages as page}
      <li class="linkWrapper">
        <a href={page.path} class="link" class:active={active === page.path}
          >{page.name}</a
        >
      </li>
    {/each}
    <a
      href="https://github.com/morganjones-dev/Adventure-Cymru"
      class="readmore">Read More</a
    >
  </ul>
  <button on:click={toggleNav} class="mobile burger">
    <span class="line" />
    <span class="line" />
    <span class="line" />
  </button>
</nav>

<style lang="scss">
  .nav {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 96px;

    &.open {
      grid-template-columns: 1fr auto 1fr;
      grid-template-rows: 96px auto auto;

      & .list {
        display: block;
      }

      & .burger {
        $trans-y: 13px;
        & :nth-child(1) {
          transform: translateY($trans-y) rotate(-45deg);
        }

        & :nth-child(2) {
          transform: translateX(18px);
          opacity: 0;
        }

        & :nth-child(3) {
          transform: translateY(-$trans-y) rotate(45deg);
        }
      }
    }

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $black;
    padding-bottom: 25px;
    border-radius: 10px 0 0 10px;
  }

  .burger {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 37px;

    background: none;
    border: none;

    grid-row: 1;
    grid-column: 3;
    justify-self: end;
    align-self: center;

    & .line {
      display: block;
      width: 35px;
      height: 3px;
      border-radius: 1.5px;
      background-color: white;

      transition-property: transform, opacity;
      transition: 0.25s ease-in-out;
    }
  }

  .logo {
    grid-column: 1;
    grid-row: 1;
    height: 48px;
    justify-self: start;
    align-self: center;
    margin-left: 24px;
  }

  .list {
    display: none;
    grid-column: 1/4;
    grid-row: 2;
    justify-self: center;
    align-self: center;
    list-style: none;
  }

  .readmore {
    grid-column: 2;
    grid-row: 3;
    justify-self: center;
    align-self: center;
  }

  .link,
  .readmore {
    display: block;
    text-align: center;
    color: $white;
    text-decoration: none;
    padding: 10px 15px;
    font-size: 1.25rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    border-radius: 8px;
  }

  .link {
    transition-property: background-color, color;
    transition: 0.25s ease-in-out;
    &.active,
    &:hover {
      background-color: $accent;
      color: $black;
    }
  }

  .readmore {
    box-sizing: border-box;
    border: 4px solid $accent;
    transition-property: background-color, color;
    transition: 0.25s ease-in-out;

    margin-top: 10px;

    &:hover {
      background-color: $accent;
      color: $black;
    }
  }
</style>
