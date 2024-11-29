import { createEffect, createSignal, onCleanup, onMount } from "solid-js"

export type Device = "desktop" | "mobile" | null

export const useDevice = () => {
	const [device, setDevice] = createSignal<Device>(null)

	function handleResize() {
		setDevice(window.innerWidth <= 767 ? "mobile" : "desktop")
	}

	onMount(() => {
		handleResize()

		onCleanup(() => {
			window.removeEventListener("resize", handleResize)
		})
	})

	createEffect(() => {
		window.addEventListener("resize", handleResize)
	})

	return device
}
