// @ts-check
import { defineConfig } from "astro/config"
import icon from "astro-icon"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon({
			include: {
				devicon: ["*"],
				logos: ["*"],
				ci: ["*"],
			},
		}),
		tailwind(),
		react(),
	],
})
