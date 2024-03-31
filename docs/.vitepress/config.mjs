import { defineConfig } from 'vitepress'

// https:/vitepress.dev/reference/site-config

export default defineConfig({
  //title: 'FDM Basiskurs',
  markdown: {
    languageAlias: {
      'svg': 'html'
    }
  },
  title: 'Technische Hochschule Köln',
  lang: 'de-DE',
  description: 'Vorlesungskripte, Lerzielmatrizen, Kursmaterialien',

  base: '/modul-fdII-thkoeln/',

  themeConfig: {
    // https:/vitepress.dev/reference/default-theme-config
    logo: '/assets/logo_TH_Koeln.png',
    nav: [
      {
        text: 'FDM@Studium.nrw',
        items: [
          { text: 'FDM@Studium.nrw', link: 'https://www.dh.nrw/kooperationen/FDM@Studium.nrw-97' },
          { text: 'Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen', link: 'https://www.mkw.nrw/hochschule-und-forschung/digitalisierung-hochschule-und-wissenschaft/forschungsdatenmanagement-fdm' }
        ]
      },
      {
        text: 'Über das Projekt',
        items: [
        { text: 'Landesinitiative_NRW', link: '/about/Landesinitative_NRW.md' },
        { text: 'UDE', link: "/about/UDE" },
        { text: 'BUW', link: "/about/BUW" },
        { text: 'TH Koeln', link: "https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/fdmstudiumnrw_98785.php" }
        ]
      }],
  
    sidebar: [
      {
    text: 'Lernzielmatrizen',
    collapsible: true,
    items: [
      { text: 'VL 01 Forschungsdaten', link: '/lz/VL_01_Forschungsdaten_LZ.md' },
      { text: 'VL 02 Forschungsdatenmanagement', link: '/lz/VL_02_Forschungsdatenmanagement_LZ.md' },
      { text: 'VL 03 Datenlebenszyklus', link: '/lz/VL_03_Datenlebenszyklus_LZ.md' },
      { text: 'VL 04 FAIR', link: '/lz/VL_04_FAIR_LZ.md' },        
      //{ text: 'VL 05 DMP', link: '/lz/VL_05_DMP_LZ.md' },
      //{ text: 'VL 06 Metadaten', link: '/lz/VL_06_Metadaten_LZ.md' },
      //{ text: 'VL 07 Dateisystem', link: '/lz/VL_07_Dateisystem_LZ.md' },
      //{ text: 'VL 08 Speichern', link: '/lz/VL_08_Speichern_LZ.md' },
      //{ text: 'VL 09 Finden', link: '/lz/VL_09_Finden_LZ.md' },
      //{ text: 'VL 10 Recht', link: '/lz/VL_10_Recht_LZ.md' },
      //{ text: 'VL 11 Ethik', link: '/lz/VL_11_Ethik_LZ.md' },
      //{ text: 'VL 12 Team', link: '/lz/VL_12_Team_LZ.md' },
      ]
    },
    {
      text: 'Vorlesungsskripte',
      collapsible: true,
      items: [
        { text: 'VL 01 Forschungsdaten', link: '/texte/VL_01_Forschungsdaten.md' },
        { text: 'VL 02 Forschungsdatenmanagement', link: '/texte/VL_02_Forschungsdatenmanagement.md' },
        { text: 'VL 03 Datenlebenszyklus', link: '/texte/VL_03_Datenlebenszyklus.md' },       
        { text: 'VL 04 FAIR', link: '/texte/VL_04_FAIR.md' },
        { text: 'VL 05 DMP', link: '/texte/VL_05_DMP.md' },
        { text: 'VL 06 Metadaten', link: '/texte/VL_06_Metadaten.md' },
        //{ text: 'VL 07 Dateisystem', link: '/texte/VL_07_Dateisystem.md' },
        //{ text: 'VL 08 Speichern', link: '/texte/VL_08_Speichern.md' },
        //{ text: 'VL 09 Finden', link: '/texte/VL_09_Finden.md' },
        //{ text: 'VL 10 Recht', link: '/texte/VL_10_Recht.md' },
        //{ text: 'VL 11 Ethik', link: '/texte/VL_11_Ethik.md' },
        //{ text: 'VL 12 Team', link: '/texte/VL_12_Team.md' },
        ]
      }
    ],

    aside: {
    },
    socialLinks: [
      { icon: 'github',
        link: 'https://github.com/mbluemm/modul-fdII-thkoeln' },
    ],

    footer: {
      message: '<b>Released</b> under the MIT License.',
      copyright: 'Copyright © 2024 <a href="https://www.dh.nrw/kooperationen/FDM@Studium.nrw-97" target="_blank">FDM@Studium.NRW</a>'
    },

    lastUpdated: {
      text: 'Zuletzt aktualisiert am:',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    
  }
}
)


