import { ButtonGroup } from "@components/About/ButtonGroup"
import { Text } from "@components/About/Text"
import styles from "@components/About/tell.module.css"
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
			<div className={styles.history}>
				<h2 className={styles.h2}>Choose the length of my history</h2>

				<div className={styles.buttons}>
					<ButtonGroup numberOfButtons={5} />
				</div>

				<div className={styles.buttonLabel}>
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
