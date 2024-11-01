import { useContext } from "solid-js"
import { TellContext } from "@components/About/Provider"

export function useTellStore() {
	const context = useContext(TellContext)
	if (!context) {
		throw new Error("useTellStore: cannot find a TellContext")
	}
	return context
}
