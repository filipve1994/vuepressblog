const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'FVE BLOG VUEPRESS',
	description: "Developer in Belgium",
	theme: '@vuepress/theme-default',
	dest: './public',
	themeConfig: {
		repo: 'https://github.com/filipve1994/vuepressblog',
		repoLabel: 'Repo',
		editLinks: true,
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
			{ text: 'Home', link: '/' }, 
			{ text: 'Blog', link: '/blog/' },
			{ text: 'About', link: '/about/' },
			{ text: 'Archive', link: '/archive/' },
			{ text: 'RSS Feed', link: '/rss.xml' }
		],
		logo: '/vuepress-blog-logo.png',
		docsDir: 'docs',
		pageSize: 5,
		startPage: 0,
		//
		smoothScroll: true,
		
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblogfilip.netlify.com/',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor',
		'vuepress-plugin-smooth-scroll',
		'vuepress-plugin-table-of-contents',
		[
			'vuepress-plugin-zooming',
			{
			  selector: '.my-wrapper2 .my-img2',
			  delay: 1000,
			  options: {
				bgColor: 'black',
				zIndex: 10000,
			  },
			},
		  ],
		  [
			'vuepress-plugin-medium-zoom',
			{
			  selector: '.my-wrapper .my-img',
			  delay: 1000,
			  options: {
				margin: 24,
				background: '#BADA55',
				scrollOffset: 0,
			  },
			},
		  ],
		  '@vuepress/active-header-links', {
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		  }
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
