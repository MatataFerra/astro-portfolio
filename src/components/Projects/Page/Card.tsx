import { useDevice } from "@lib/hooks/use-device"
import styles from "@components/Projects/Page/styles.module.css"

interface Props {
	imgSrc: string
	text: string
	alternate?: boolean
	linkToProject?: string
}

interface BoldProps {
	text: string
}

function BoldText({ text }: BoldProps) {
	const boldText = () => {
		const strongWords = text.match(/\*(.*?)\*/g)

		if (!strongWords) return text

		return text.split(/\*(.*?)\*/g).map((segment, index) => {
			const isStrong = strongWords.includes(`*${segment}*`)
			if (isStrong) {
				return <strong class={`${styles.strong}`}>{segment.trimStart()}</strong>
			}
			return segment
		})
	}

	return <>{boldText()}</>
}

export function Card({ imgSrc, text, alternate, linkToProject }: Props) {
	const device = useDevice()

	return (
		<div class={styles["image-container"]}>
			<img src={imgSrc} width={500} height={300} alt="Projects" class={styles.image} />
			<article
				class={`${alternate && device() !== "mobile" && styles["order-1"]} ${linkToProject && styles["text-container"]}`}
			>
				<p class={`${styles["project-text"] ?? ""}`}>
					<BoldText text={text} />
				</p>
				{linkToProject && (
					<a
						href={linkToProject}
						target="_blank"
						rel="noopener noreferrer"
						class={styles["project-link"]}
					>
						Visit Project
					</a>
				)}
			</article>
		</div>
	)
}
