export const $ = (selector: `.${string}` | `#${string}`): HTMLElement | null =>
	document.querySelector(selector)
export const $$ = (selector: string): NodeListOf<HTMLElement> | null =>
	document.querySelectorAll(selector)
