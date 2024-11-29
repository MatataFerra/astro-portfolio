export type Routes = "/" | "/projects" | `http://${string}`

export type Items = {
	title: string
	url: Routes
}
