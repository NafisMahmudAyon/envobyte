import { AspectUITheme, colors } from "aspect-ui/AspectUITheme";

const colorsPalette = {
	...colors,
	// primary: {
	// 	50: "#fff",
	// 	100: "#fff",
	// 	200: "#fff",
	// 	300: "#fff",
	// 	400: "#fff",
	// 	500: "#fff",
	// 	600: "#fff",
	// 	700: "#fff",
	// 	800: "#fff",
	// 	900: "#fff",
	// 	950: "#fff",
	// },
};

const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
};

export default AspectUITheme(config, colorsPalette);



