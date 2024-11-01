import { createMemo } from "solid-js"

export const useText = (text: string, maxLength: () => number) => {
	const textMemorized = createMemo(() => {
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
	})

	return textMemorized
}
