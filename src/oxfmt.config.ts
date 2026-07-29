import type { OxfmtConfig } from "oxfmt";
import { defineConfig } from "oxfmt";

export const config: OxfmtConfig = defineConfig({
	quoteProps: "consistent",
	useTabs: true,
	sortImports: {
		customGroups: [
			{
				groupName: "react",
				elementNamePattern: ["react", "react-dom"],
			},
			{
				groupName: "vitest",
				elementNamePattern: ["vite-plus", "vitest", "vite-plus/test"],
			},
			{
				groupName: "next",
				elementNamePattern: ["next"],
			},
		],
		groups: [
			// Side effects up at top
			["side_effect"],
			// Lift react when present
			["next", "vitest", "react", "builtin"],
			// Third party deps
			["external"],
			// Local imports
			["internal", "subpath"],
			// Style side effect imports at bottom
			["side_effect_style"],
		],
		newlinesBetween: false,
	},
});
