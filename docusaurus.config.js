const path = require('path')

const organizationName = 'Abhi6722' // Usually your GitHub org/user name.
const projectName = 'hackers-hub' // Usually your repo name.
const branch = 'main'
const repoUrl = `https://github.com/${organizationName}/${projectName}`
const wdioLogo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+TG9nbyBSZWd1bGFyPC90aXRsZT4KICAgIDxnIGlkPSJMb2dvLVJlZ3VsYXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNFQTU5MDYiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcng9IjUiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNOCwxNiBMOCw0OCBMNiw0OCBMNiwxNiBMOCwxNiBaIE00MywxNiBDNTEuODM2NTU2LDE2IDU5LDIzLjE2MzQ0NCA1OSwzMiBDNTksNDAuODM2NTU2IDUxLjgzNjU1Niw0OCA0Myw0OCBDMzQuMTYzNDQ0LDQ4IDI3LDQwLjgzNjU1NiAyNywzMiBDMjcsMjMuMTYzNDQ0IDM0LjE2MzQ0NCwxNiA0MywxNiBaIE0yNywxNiBMMTQuMTA2LDQ3Ljk5OTIwNzggTDExLjk5OSw0Ny45OTkyMDc4IEwyNC44OTQsMTYgTDI3LDE2IFogTTQzLDE4IEMzNS4yNjgwMTM1LDE4IDI5LDI0LjI2ODAxMzUgMjksMzIgQzI5LDM5LjczMTk4NjUgMzUuMjY4MDEzNSw0NiA0Myw0NiBDNTAuNzMxOTg2NSw0NiA1NywzOS43MzE5ODY1IDU3LDMyIEM1NywyNC4yNjgwMTM1IDUwLjczMTk4NjUsMTggNDMsMTggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=='

module.exports = {
    title: 'Hackers Hub',
    tagline: 'Learn Ethical Hacking from Scratch',
    url: 'https://hackers-hub.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.png',
    organizationName: 'Abhi6722',
    projectName: 'hackers-hub',
    customFields: {
        repoUrl
    },
    themeConfig: {
        image: 'img/logo-webdriver-io.png',
        metadatas: [{ name: 'twitter:card', content: 'summary' }],
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
            switchConfig: {
                darkIcon: '🌜',
                lightIcon: '☀️',
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '2px',
                },
                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula')
        },
        googleAnalytics: {
            trackingID: 'UA-47063382-1'
        },
        algolia: {
            apiKey: 'd67ddab8f03c4dc36f34c69af43c3853',
            indexName: 'hackers-hub',
            appId: 'WTQFDDWEGY'
        },
        announcementBar: {
            id: 'supportus',
            content:
              `⭐️  &nbsp; If you like Hackers Hub, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/${organizationName}/${projectName}">GitHub</a>! ⭐️`,
        },
        navbar: {
            // title: 'I/O',
            logo: {
                alt: 'Hackers Hub',
                src: wdioLogo,
                srcDark: wdioLogo,
            },
            items: [{
                type: 'doc',
                label: 'Docs',
                position: 'left',
                docId: 'gettingstarted',
            }, {
                type: 'doc',
                label: 'Courses',
                position: 'left',
                docId: 'api',
            }, {
                to: 'blog', label: 'Blog', position: 'left'
            }, {
                type: 'doc',
                label: 'Contribute',
                position: 'left',
                docId: 'contribute',
            }, {
                to: '/community/support',
                label: 'Community',
                position: 'left',
                activeBaseRegex: '/community/'
            }, {
                label: 'v1',
                position: 'right',
                to: '/versions'
            }, {
                href: repoUrl,
                position: 'right',
                className: 'header-github-link',
                'aria-label': 'GitHub repository',
            }],
        },
        footer: {
            style: 'dark',
            links: [{
                title: 'Docs',
                items: [{
                    label: 'Getting Started',
                    to: 'docs/gettingstarted',
                }, {
                    label: 'API Reference',
                    to: 'docs/api',
                }, {
                    label: 'Contribute',
                    to: 'docs/contribute/',
                }, {
                    label: 'Help',
                    to: 'community/support',
                }],
            }, {
                title: 'Community',
                items: [{
                    label: 'Stack Overflow',
                    href: 'https://stackoverflow.com/c/hackers-hub/questions',
                }, {
                    label: 'Support Chat',
                    href: `https://gitter.im/official-hackers-hub/community`,
                }, {
                    label: 'Discord',
                    href: 'https://discord.gg/DXUFvjCR'
                }, {
                    label: 'Twitter',
                    href: 'https://twitter.com/hackers_hub',
                }],
            }, {
                title: 'More',
                items: [{
                    label: 'Courses',
                    to: 'https://hackers-hub.com/courses/',
                }, 
                {
                    label: 'Books',
                    href: 'https://hackers-hub.com/shop/',
                }, 
                // {
                //     label: 'Swag Store',
                //     href: 'http://shop.webdriver.io',
                // }, 
                {
                    label: 'Blog',
                    to: 'blog',
                }, {
                    label: 'GitHub',
                    href: repoUrl,
                }],
            }],
            logo: {
                alt: 'Hackers Hub Logo',
                src: '/img/footerlogo.png',
                href: 'https://hackers-hub.com/'
            },
            copyright: `Copyright © ${new Date().getFullYear()} Hackers Hub`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic', {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:`${repoUrl}/edit/${branch}`,
                    remarkPlugins: [
                        [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
                    ],
                    include: ['**/*.{md,mdx}', '**/_*.{md,mdx}'],
                    exclude: [
                        '**/_*/**',
                        '**/*.test.{js,jsx,ts,tsx}',
                        '**/__tests__/**'
                    ]
                },
                blog: {
                    showReadingTime: true,
                    postsPerPage: 3,
                    // Please change this to your repo.
                    editUrl: `${repoUrl}/edit/${branch}/blog/`,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                pages: {
                    remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-client-redirects',
            {
                fromExtensions: ['html'],
            }
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                path: 'community',
                editUrl: `https://github.com/${organizationName}/${projectName}/edit/${branch}/`,
                routeBasePath: 'community',
                sidebarPath: require.resolve('./sidebarsCommunity.js')
            },
        ],
        '@docusaurus/plugin-ideal-image',
        [
            '@docusaurus/plugin-pwa',
            {
                debug: false,
                offlineModeActivationStrategies: ['appInstalled', 'queryString'],
                // swRegister: false,
                swCustom: path.resolve(__dirname, 'src/sw.js'),
                pwaHead: [
                    {
                        tagName: 'link',
                        rel: 'icon',
                        href: 'img/logo-webdriver-io.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: '/manifest.json',
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: 'rgb(234, 90, 7)',
                    },
                    {
                        tagName: 'meta',
                        name: 'apple-mobile-web-app-capable',
                        content: 'yes',
                    },
                    {
                        tagName: 'meta',
                        name: 'apple-mobile-web-app-status-bar-style',
                        content: '#000',
                    },
                    {
                        tagName: 'link',
                        rel: 'apple-touch-icon',
                        href: 'img/logo-webdriver-io.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'mask-icon',
                        href: 'img/logo-webdriver-io.svg',
                        color: 'rgb(234, 90, 7)',
                    },
                    {
                        tagName: 'meta',
                        name: 'msapplication-TileImage',
                        content: 'img/logo-webdriver-io.png',
                    },
                    {
                        tagName: 'meta',
                        name: 'msapplication-TileColor',
                        content: '#000',
                    },
                ],
            },
        ],
    ],
    themes: ['@saucelabs/theme-github-codeblock'],
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=block',
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=block'
    ],
    scripts: [
        'https://buttons.github.io/buttons.js'
    ]
}
