import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@components/shadcn/sheet"
import type { JSX } from "solid-js"

export function Drawer({ children }: { children: JSX.Element }) {
	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent position="left">
				<SheetHeader>
					<SheetTitle>Are you sure absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your account and remove your
						data from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
