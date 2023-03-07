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
    {
      name: "Source Code",
      path: "https://github.com/morganjones-dev/Adventure-Cymru/",
    },
  ];
</script>

<nav class="nav">
  <ul class="list">
    {#each pages as page}
      <li class="linkWrapper">
        <a class="link" class:active={active === page.path} href={page.path}
          >{page.name}</a
        >
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 100%;
    height: $footer-nav-height;
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 20px;
  }

  .link {
    color: white;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    transition: color 0.25s ease-in-out;

    &.active,
    &:hover {
      color: $accent;
    }
  }
</style>
