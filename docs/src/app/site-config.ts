export const siteConfig = {
	name: 'Maple',
	description: 'The simple to use web analytics tool. Providing gorgeous UI and simple to use sdks.',
	mainNav: [
		{
			title: 'Documentation',
			href: '/docs/introduction',
		},
	],
	sidebarNav: [
		{
			title: 'Maple Dev',
			items: [
				{
					title: 'Introduction',
					href: '/docs/introduction',
					items: [],
				},
			],
		},
		{
			title: 'Getting Started',
			items: [
				{
					title: 'NextJS',
					href: '/docs/starter/nextjs',
					items: [],
				},
				{
					title: 'React',
					href: '/docs/starter/react',
					items: [],
				},
				{
					title: 'Other',
					href: '/docs/starter/other',
					items: [],
				},
			],
		},
	],
	links: {
		twitter: 'https://twitter.com/jullerino',
		github: 'https://github.com/juliusmarminge/acme-corp-lib',
		docs: '/docs',
	},
}

export type SiteConfig = typeof siteConfig
