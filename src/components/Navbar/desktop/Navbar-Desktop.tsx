import { Email } from "@components/Navbar/assets/Email"
import { Logo } from "@components/Navbar/assets/Logo"
import styles from "@components/Navbar/desktop/styles.module.css"
import { useDevice } from "@lib/hooks/use-device"
import { List } from "@components/Navbar/assets/List"
import type { Routes, Items } from "@components/Navbar/types"

interface Props {
	url: Routes
}

const ITEMS: Items[] = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "Projects",
		url: "/projects",
	},
	{
		title: "Blog",
		url: "http://eldiariodemati.wordpress.com",
	},
]

export function NavbarDesktop({ url }: Props) {
	const device = useDevice()

	return (
		<nav className={styles["navbar-desktop"]}>
			<Logo />
			<section className={styles["section-2"]}>
				{device === "desktop" ? (
					<article className={styles.article}>
						<div className={`${styles.contact} transform-on-hover`}>
							<Email width={20} />
							<a className={styles.email} href="mailto:matias.agf@gmail.com">
								<span className="text">matias.agf@gmail.com</span>
							</a>
						</div>
					</article>
				) : null}

				<List currentUrl={url} items={ITEMS} />
			</section>
		</nav>
	)
}
