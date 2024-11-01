import { For } from "solid-js"
import styles from "./tell.module.css"
import { useTellStore } from "./use-limit-store"

interface ButtonProps {
	value: number
}

interface ButtonGroupProps {
	numberOfButtons: number
}

export const Button = ({ value }: ButtonProps) => {
	const { buttonActive, setButtonActive } = useTellStore()

	return (
		<button
			type="button"
			value={String(value)}
			class={buttonActive() === value ? styles["button-active"] : styles["button-inactive"]}
			onClick={(e) => {
				setButtonActive(value)
			}}
		/>
	)
}

export const ButtonGroup = ({ numberOfButtons = 5 }: ButtonGroupProps) => {
	return (
		<div class={styles.buttons}>
			<For each={Array.from({ length: numberOfButtons }, (_, i) => i)}>
				{(i) => <Button value={i} />}
			</For>
		</div>
	)
}
