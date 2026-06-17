# @0x57/oxfmt-config

An opinionated shared [oxfmt](https://github.com/oxc-project/oxc) config.

## Usage

```sh
bun add -D @0x57/oxfmt-config
```

```ts
import { config } from "@0x57/oxfmt-config";
export default config;
```

## Tailwind Stylesheet

If you're using Tailwind v4, you can specify the path to your stylesheet in the config:

```ts
import { defineConfig } from "oxfmt";
import { config } from "@0x57/oxfmt-config";

export default defineConfig({
	...config,
	sortTailwindcss: {
		stylesheet: "./app/tailwind/styles.css",
	},
});
```
