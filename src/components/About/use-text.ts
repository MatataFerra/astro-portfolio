import { useMemo } from "react"

export const useText = (text: string, maxLength: () => number) => {
	const textMemorized = useMemo(() => {
		const limit = maxLength()
		const checkLimit = text.split(".").length > limit ? limit : text.split(".").length
		const textToshow = text
			?.split(".")
			.map((t, i) => {
				if (i <= checkLimit) {
					return t.trim()
				}
				return null
			})
			.reduce((prev, curr) => {
				if (curr) {
					return `${prev} ${curr}.`
				}

				return prev
			}, "")

		return textToshow
	}, [text?.split, maxLength])

	return textMemorized
}
