import styles from "@components/Navbar/desktop/styles.module.css"
import { For } from "solid-js"
import type { Routes } from "@components/Navbar/types"

interface Props {
	currentUrl: Routes
	items: {
		url: Routes
		title: string
	}[]
}

export function List({ currentUrl, items }: Props) {
	return (
		<ul class={styles.ul}>
			<For each={items}>
				{(item) => (
					<li
						class={`${currentUrl === item.url ? "relative cursor-default after:my-0 after:mx-auto after:right-0 after:left-0 after:w-[calc(100%_-_1rem)] after:absolute after:bottom-0 after:border-b-2 after:border-b-color-red" : "transform-on-hover cursor-pointer"}`}
					>
						{item.url.toString().includes("http") ? (
							<a
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
								class={`${currentUrl === item.url ? "pointer-events-none" : ""}`}
							>
								{item.title}
							</a>
						) : (
							<a href={item.url} class={`${currentUrl === item.url ? "pointer-events-none" : ""}`}>
								{item.title}
							</a>
						)}
					</li>
				)}
			</For>
		</ul>
	)
}
