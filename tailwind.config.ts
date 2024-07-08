import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";
import { animations, components, palette, rounded, shade } from "@tailus/themer";
import containerQueries from '@tailwindcss/container-queries'
import { withTV } from 'tailwind-variants/transformer';

module.exports = withTV({
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		 "./node_modules/@tailus/themer/dist/components/**/*.{js,ts}",
	],
	darkMode: "selector",
	safelist : ["dark:from-gray-950"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
				mono: ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
			}
		}
	},
	plugins: [
		components,
		rounded,
		shade,
		animations,
		palette,
		containerQueries,
	],
}) satisfies Config;
