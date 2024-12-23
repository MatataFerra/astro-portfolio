import { useDevice } from "@lib/hooks/use-device"
import styles from "@components/Projects/Page/styles.module.css"
import { useCallback } from "react"

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
	const boldCallback = useCallback(() => {
		const strongWords = text.match(/\*(.*?)\*/g)

		if (!strongWords) return text

		return text.split(/\*(.*?)\*/g).map((segment) => {
			const isStrong = strongWords.includes(`*${segment}*`)
			if (isStrong) {
				return <strong className={`${styles.strong}`}>{segment.trimStart()}</strong>
			}
			return segment
		})
	}, [text])

	return <>{boldCallback()}</>
}

export function Card({ imgSrc, text, alternate, linkToProject }: Props) {
	const device = useDevice()

	return (
		<div className={styles["image-container"]}>
			<img src={imgSrc} width={500} height={300} alt="Projects" className={styles.image} />
			<article
				className={`${alternate && device !== "mobile" && styles["order-1"]} ${linkToProject && styles["text-container"]}`}
			>
				<p className={`${styles["project-text"] ?? ""}`}>
					<BoldText text={text} />
				</p>
				{linkToProject && (
					<a
						href={linkToProject}
						target="_blank"
						rel="noopener noreferrer"
						className={styles["project-link"]}
					>
						Visit Project
					</a>
				)}
			</article>
		</div>
	)
}
