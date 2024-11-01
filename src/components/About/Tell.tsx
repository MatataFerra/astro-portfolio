import { ButtonGroup } from "@components/About/ButtonGroup"
import { Text } from "@components/About/Text"
import type { JSX } from "solid-js"
import styles from "./tell.module.css"
import { TellProvider } from "./Provider"

export interface StateButtonClickProps {
	[key: string | number]: boolean
}

export interface HistoriesProps {
	[key: string | number]: {
		title: string
		content: JSX.Element
	}
}

export const Tell = () => {
	return (
		<TellProvider>
			<div class={styles.history}>
				<h2 class={styles.h2}>Choose the length of my history</h2>

				<div class={styles.buttons}>
					<ButtonGroup numberOfButtons={5} />
				</div>

				<div class={styles.buttonLabel}>
					<span>Short</span>
					<span>Longest</span>
				</div>

				<div style={{ transition: "all .3s ease-in-out" }}>
					<Text />
				</div>
			</div>
		</TellProvider>
	)
}
