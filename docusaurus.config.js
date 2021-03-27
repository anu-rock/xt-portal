const path = require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'XT Portal',
  tagline: 'The best of experience technology for you',
  url: 'https://nextengg.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pagesource', // Usually your GitHub org/user name.
  projectName: 'dev-portal', // Usually your repo name.
  plugins: [
    [
      'docusaurus2-dotenv',
      {
        systemvars: true,
      },
    ],
    path.resolve(__dirname, 'plugins', 'podcast-data'),
  ],
  themeConfig: {
    navbar: {
      title: 'XT Portal',
      logo: {
        alt: 'XT Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'learn/',
          activeBasePath: 'learn',
          label: 'Learn',
          position: 'left',
        },
        { to: 'podcast', label: 'Podcast', position: 'left' },
        { to: 'tips', label: 'Pro Tips', position: 'left' },
        {
          href: 'https://github.com/pagesource/dev-portal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Getting Started',
              to: 'learn/',
            },
            {
              label: 'Accessibility',
              to: 'learn/accessibility/',
            },
            {
              label: 'Performance',
              to: 'learn/performance/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/xt_india',
            },
            {
              label: 'Podcast',
              href: 'https://anchor.fm/x-change',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Pro Tips',
              to: 'tips',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pagesource/dev-portal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} eXperience Technologists`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'learn',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pagesource/dev-portal/edit/master/',
        },
        blog: {
          path: 'protips',
          routeBasePath: 'tips',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
