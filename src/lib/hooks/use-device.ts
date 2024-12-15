import { useEffect, useState } from "react"

export type Device = "desktop" | "mobile" | null

export const useDevice = () => {
	const [device, setDevice] = useState<Device>(null)

	function handleResize() {
		setDevice(window.innerWidth <= 767 ? "mobile" : "desktop")
	}

	useEffect(() => {
		handleResize()
		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	})

	return device
}
