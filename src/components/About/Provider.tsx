import { createContext, useState } from "react"

interface Props {
	children: JSX.Element
}

export enum ButtonActive {
	one = 0,
	two = 1,
	three = 2,
	four = 3,
	five = 4,
}

interface State {
	buttonActive: ButtonActive
}

interface Context extends State {
	setButtonActive: (newState: ButtonActive) => void
}
export const TellContext = createContext<Context | null>(null)

export function TellProvider(props: Props) {
	const [buttonActive, setButtonActive] = useState(ButtonActive.one)

	function updateButtonActive(newState: ButtonActive) {
		setButtonActive(newState)
	}

	return (
		<TellContext.Provider
			value={{
				buttonActive,

				setButtonActive: updateButtonActive,
			}}
		>
			{props.children}
		</TellContext.Provider>
	)
}
