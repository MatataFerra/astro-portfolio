import styles from "@components/About/tell.module.css"
import { useTellStore } from "@components/About/use-limit-store"
import { useText } from "@components/About/use-text"
import { Show } from "solid-js"
import { ButtonActive } from "./Provider"

const TEXT_HISTORY = `I was born in 1989 in Buenos Aires. Since 2012 I have been intersted in Design with Photoshop & Illustrator. I
studied at the University of Palermo. Later I worked as a frontend developer in a company
called CoreBiz. I'm currently working as a frontend developer in a company called
Steplix. Around 2018 I started to learn about React and I'm still learning. I'm also
learning about NextJS and TypeScript. In 2022 I'm started to develop my own projects,
like Inchequeable, a blog site about everything. I also whrite about my
experiences as a frontend developer, you can find them in my Linkedin profile. If you are
reading the longest version of this text, you are probably a recruiter or a hiring manager.
I'm looking for a job as a frontend developer or hire me for build your website.`

interface BioProps {
	cssClass?: string
}
/**
 * @description TEXT_BOUNDARIES means when is zero (0) user has selected the short version,
 * means need to cut up to 1 line
 *
 * Tell  Limits: 1, 4, 6, 8, 12
 * 1 -> 4 lines
 * 2 -> 6 lines
 * 3 -> 8 lines
 * 4 -> 12 lines
 */

const TEXT_BOUNDARIES: Record<ButtonActive, number> = {
	0: 1,
	1: 4,
	2: 6,
	3: 8,
	4: 12,
} as const

export const Text = ({ cssClass }: BioProps) => {
	const { buttonActive } = useTellStore()
	const textToRender = useText(TEXT_HISTORY, () => TEXT_BOUNDARIES[buttonActive()])

	return (
		<section class={`${cssClass ? styles[cssClass] : ""} ${styles.brief}`}>
			<p class={`${styles.p}}`}>{textToRender()}</p>
			<Show when={buttonActive() === ButtonActive.five}>
				<strong class={styles.strong}>
					<a href="mailto:matias.agf@gmail.com">Contact me at: matias.agf@gmail.com</a>
				</strong>
			</Show>
		</section>
	)
}
