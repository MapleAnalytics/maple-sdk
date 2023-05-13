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
					title: 'NextJS (App)',
					href: '/docs/starter/nextjs/app',
					items: [],
				},
				{
					title: 'NextJS (Pages)',
					href: '/docs/starter/nextjs/pages',
					items: [],
				},
				{
					title: 'Remix',
					href: '/docs/starter/remix',
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
		twitter: 'https://twitter.com/makisuo__',
		github: 'https://github.com/MapleAnalytics/maple-sdk',
		docs: '/docs',
	},
}

export type SiteConfig = typeof siteConfig
