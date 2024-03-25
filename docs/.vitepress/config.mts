import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FDII - Basiskurs",
  description: "FDII-Basiskurs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vorlesungsskripte', link: '/skripte' },
      { text: 'Lernziele', link: '/lz' }
    ],

    sidebar: [
      {
        text: 'Materialien',
        items: [
          { text: 'Zeug 1', link: '' },
          { text: 'Zeug 2', link: '' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://git.uni-due.de/fdm_studium_lehre/thkoeln/oer_thkoeln.git' }
    ],

    footer: {
      message: '<b>Released</b> under the MIT License.',
      copyright: '© 2024 FDM@Studium.nrw</a>'
    },
  }
})

