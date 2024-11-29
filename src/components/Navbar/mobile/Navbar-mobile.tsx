import { Logo } from "@components/Navbar/assets/Logo"
import { Drawer } from "@components/Navbar/mobile/Drawer"
import styles from "@components/Navbar/mobile/styles.module.css"
import { Ham } from "@components/Navbar/assets/Ham"

export function NavbarMobile() {
	return (
		<nav class={styles["navbar-mobile"]}>
			<div class={styles.logo}>
				<Logo />
			</div>
			<Drawer>
				<Ham />
			</Drawer>
		</nav>
	)
}
