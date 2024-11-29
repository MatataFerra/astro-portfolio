import { NavbarDesktop } from "@components/Navbar/desktop/Navbar-Desktop"

type Routes = "/" | "/projects"

interface Props {
	url: Routes
}

export function Navbar({ url }: Props) {
	return <NavbarDesktop url={url} />
}
