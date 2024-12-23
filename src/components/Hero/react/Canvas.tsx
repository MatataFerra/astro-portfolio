/** @jsxImportSource react */

import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import Badge from "@components/Hero/react/Badge"
import { useRef, type CSSProperties } from "react"

const styles: CSSProperties = {
	height: "80dvh",
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	display: "block",
	zIndex: 5,
}

function Cnvas({ letter = "M" }: { letter: string }) {
	return (
		<>
			<ambientLight intensity={Math.PI} />
			<group position={[0, 0, 0]}>
				<Physics timeStep={1 / 60}>
					{letter.split("").map((l, i) => (
						<Badge key={l + i.toString()} letter={l} position={i} />
					))}
				</Physics>
			</group>
		</>
	)
}

export default function CanvasComponent() {
	const canvasRef = useRef(null)

	return (
		<>
			<Canvas style={styles} ref={canvasRef} camera={{ position: [0, 0, 35], fov: 15 }}>
				<Cnvas letter={"ferraro"} />
			</Canvas>
		</>
	)
}
