const PROJECTS_NAMES = {
	w11: "w11",
	iql: "iql",
	teslo: "teslo",
	ttt: "ttt",
	jira: "jira",
	pkdx: "pkdx",
	casual: "casual",
} as const

export const PROJECTS_IMAGE = {
	[PROJECTS_NAMES.casual]:
		"https://res.cloudinary.com/docq8rbdu/image/upload/v1730423971/vkadulb2okthutiyl1vn.png",
	[PROJECTS_NAMES.w11]:
		"https://res.cloudinary.com/docq8rbdu/image/upload/v1662945824/portfolio-next/d6p32yuzvjsjdtx9tm6p.png",
	[PROJECTS_NAMES.iql]:
		"https://res.cloudinary.com/docq8rbdu/image/upload/v1662945824/portfolio-next/m4wz3uzqf1yb5e1vz3jv.png",
	[PROJECTS_NAMES.teslo]:
		"https://res.cloudinary.com/docq8rbdu/image/upload/v1662945824/portfolio-next/betszv7uyswhforzu1iz.png",
	[PROJECTS_NAMES.ttt]:
		"https://res.cloudinary.com/docq8rbdu/image/upload/v1663476239/portfolio-next/me0cm7c949lx5vlcgecj.png",
	[PROJECTS_NAMES.jira]:
		"https://res.cloudinary.com/docq8rbdu/image/upload/v1663476410/portfolio-next/pqfgrruk3z8lvkla0yaz.png",
	[PROJECTS_NAMES.pkdx]:
		"https://res.cloudinary.com/docq8rbdu/image/upload/v1663476664/portfolio-next/q6zsyz8ytz7n00gyg8ox.png",
} as const

export const PROJECTS_GIF = {
	[PROJECTS_NAMES.teslo]: "https://media.giphy.com/media/juZhYgkBIrHNe19kn3/giphy.gif",
	[PROJECTS_NAMES.iql]: "https://media.giphy.com/media/tbywzWmAHMa8DJJfHV/giphy.gif",
	[PROJECTS_NAMES.w11]: "https://media.giphy.com/media/PluZmEedwcclbGFnid/giphy.gif",
}

export const PROJECTS_URL = {
	[PROJECTS_NAMES.casual]: "https://casualapp.online",
	[PROJECTS_NAMES.w11]: "https://matiasferraro.netlify.app/",
	[PROJECTS_NAMES.iql]: "https://www.inchequeable.com.ar/",
	[PROJECTS_NAMES.teslo]: "https://teslo-matata.herokuapp.com/",
	[PROJECTS_NAMES.ttt]: "https://tateti-nine.vercel.app/",
	[PROJECTS_NAMES.jira]: "https://jira-ferra.vercel.app/",
	[PROJECTS_NAMES.pkdx]: "https://pokedex-v1-0.vercel.app/",
} as const

export const PROJECTS_IMAGES_DESCRIPTION = [
	{
		src: PROJECTS_IMAGE.casual,
		text: "This is the most complete app that I have ever built. Developed in *NextJS*, *Prisma*, *Turso*. The goal with this app was help the casual workers to keep tracked their own payments.",
		title: "Casual app",
		link: PROJECTS_URL.casual,
	},
	{
		src: PROJECTS_IMAGE.w11,
		text: "Project build with *React*, Styled Components, *Redux* for the state management of the site, and MongoDB. This project is a clone of the popular SO Windows 11. It allows you to use apps like the ToDo app and Spotify.",
		title: "Windows 11 Clone",
		link: PROJECTS_URL.w11,
	},

	{
		src: PROJECTS_IMAGE.iql,
		text: "It is a blog site, to write articles. The user can read the articles and give likes. The application has a login system and a dashboard for the administrator. Admin can create, edit and delete articles. The admin can also see the users who like the articles. The app was built with *NextJS*, Context API for site state management, SASS modules, and MongoDB.",
		title: "Inchequeable Blog Site",
		link: PROJECTS_URL.iql,
	},

	{
		src: PROJECTS_IMAGE.teslo,
		text: "E-Commerce site build with NextJS and *TypeScript*, it has Admin site with a dashboard. The app also has many features like: Store Locator with maps, Stock control, Cart, Checkout, PayPal payment, Favourites Products, and more.",
		title: "E-Commerce Site",
		link: PROJECTS_URL.teslo,
	},

	{
		src: PROJECTS_IMAGE.ttt,
		text: "Classic game of Tic Tac Toe, build with React and TypeScript, use *Vite* as a bundler.",
		title: "Tic Tac Toe Game",
		link: PROJECTS_URL.ttt,
	},

	{
		src: PROJECTS_IMAGE.jira,
		text: "Jira clone, build with NextJS, TypeScript, MongoDB and *NextUI* as a React UI Library. You can drag and drop tasks between columns, create new tasks, and delete tasks.",
		title: "Jira clone",
		link: PROJECTS_URL.jira,
	},

	{
		src: PROJECTS_IMAGE.pkdx,
		text: "For practice I build the Pokedex only using *CSS*. Meanwhile I build the app with NextJS, NextUI and I use the PokeAPI to get the data of the Pokemons.",
		title: "Pokedex",
		link: PROJECTS_URL.pkdx,
	},
]
