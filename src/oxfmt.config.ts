import { defineConfig } from "oxfmt";

export const config = defineConfig({
	quoteProps: "consistent",
	useTabs: true,
	sortImports: {
		customGroups: [
			{
				groupName: "react",
				elementNamePattern: ["react", "react-dom"],
			},
		],
		groups: [
			// Side effects up at top
			["side_effect"],
			// Lift react when present
			["react", "builtin"],
			// Third party deps
			["external"],
			// Local imports
			["internal", "subpath"],
			// Style side effect imports at bottom
			["side_effect_style"],
		],
	},
});
