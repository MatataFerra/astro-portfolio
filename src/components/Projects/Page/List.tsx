import { For } from "solid-js"
import { Card } from "./Card"
import { PROJECTS_IMAGES_DESCRIPTION } from "@lib/constants"

export function List() {
	return (
		<For each={PROJECTS_IMAGES_DESCRIPTION}>
			{(item) => <Card imgSrc={item.src} text={item.text} linkToProject={item.link} />}
		</For>
	)
}
