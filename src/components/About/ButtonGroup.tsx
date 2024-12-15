import styles from "@components/About/tell.module.css"
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
			className={buttonActive === value ? styles["button-active"] : styles["button-inactive"]}
			onClick={() => {
				setButtonActive(value)
			}}
		/>
	)
}

export const ButtonGroup = ({ numberOfButtons = 5 }: ButtonGroupProps) => {
	return (
		<div className={styles.buttons}>
			{Array.from({ length: numberOfButtons }, (_, i) => i).map((value) => (
				<Button value={value} key={value} />
			))}
		</div>
	)
}
