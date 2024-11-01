// @ts-check
import { defineConfig } from "astro/config"

import solidJs from "@astrojs/solid-js"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	integrations: [
		solidJs(),
		icon({
			include: {
				devicon: ["*"],
				logos: ["*"],
			},
		}),
	],
})
