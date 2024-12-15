import { Card } from "./Card"
import { PROJECTS_IMAGES_DESCRIPTION } from "@lib/constants"

export function List() {
	return (
		<>
			{PROJECTS_IMAGES_DESCRIPTION.map((item) => (
				<Card imgSrc={item.src} text={item.text} linkToProject={item.link} key={item.title} />
			))}
		</>
	)
}
