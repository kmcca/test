// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Veracode Docs',
  tagline: 'RSS feed please work!',
  url: 'https://docs.veracode.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'veracode', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr',],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         /* editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        blog: {
        feedOptions: {
                    type: 'all',
                    copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
                  },
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Veracode Docs',
          src: 'img/veracode-black-hires.svg',
          srcDark: 'https://www.veracode.com/themes/veracode_new/library/img/veracode-black-hires.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial-basics/create-a-document',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Release Notes', position: 'left'},
          {
            type: 'doc',
            docId: 'tutorial-basics/create-a-blog-post',
            position: 'left',
            label: 'APIs',
          },
          {
            href: 'https://community.veracode.com/s/',
            label: 'Community',
            position: 'right',
          },
          {
            href: 'https://github.com/veracode',
            label: 'GitHub',
            position: 'right',
          },
          {
           type: 'localeDropdown',
           position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Community',
            items: [
              {
                label: 'Community',
                href: 'https://community.veracode.com/s/',
              },
            ],
          },
          {
           title: 'Social',
            items: [
            {
               label: 'Veracode for Developers',
               href: 'https://veracode.github.io/',
                },
                        {
                          label: 'Facebook',
                          href: 'https://www.facebook.com/VeracodeInc/',
                        },
                         {
                          label: 'Instagram',
                          href: 'https://www.instagram.com/veracode/',
                          },
                        {
                          label: 'Twitter',
                          href: 'https://twitter.com/veracode',
                        },
                      ],
                    },
          {
            title: 'Support',
            items: [
              {
                label: 'Contact Support',
                to: 'https://community.veracode.com/s/contact-support',
              },
              {
                label: 'Secure Code Training',
                href: 'https://www.veracode.com/developers/training',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Veracode`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
