import adapter from "@sveltejs/adapter-auto";
import { dirname } from "path";
import preprocess from "svelte-preprocess";
import { fileURLToPath } from "url";

const filePath = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@use "${filePath}/src/styles/vars" as *;`,
    },
  }),

  kit: {
    adapter: adapter(),
  },
};

export default config;
