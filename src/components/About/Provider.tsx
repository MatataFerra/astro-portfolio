import { createContext, createSignal, type Accessor, type JSX } from "solid-js"

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
	buttonActive: Accessor<ButtonActive>
}

interface Context extends State {
	setButtonActive: (newState: ButtonActive) => void
}
export const TellContext = createContext<Context>()

export function TellProvider(props: Props) {
	const [buttonActive, setButtonActive] = createSignal(ButtonActive.one)

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
