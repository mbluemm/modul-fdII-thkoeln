import { defineConfig } from 'vitepress'

// https:/vitepress.dev/reference/site-config

export default defineConfig({
  title: 'FDM Basiskurs',
  lang: 'de-DE',
  description: 'Vorlesungskripte, Lerzielmatrizen, Kursmaterialien',

  base: '/',

  themeConfig: {
    // https:/vitepress.dev/reference/default-theme-config

    nav: [
      {
        text: 'FDM@Studium.nrw',
        items: [
          { text: 'Projekt', link: '/about/Projekt.md' },
          { text: 'Förderer', link: '/about/Foerderer.md' }
        ]
      },
      {
        text: 'Kooperationsprojekte',
        items: [
        { text: 'Landesinitiative_NRW', link: '/about/Landesinitative_NRW.md' },
        { text: 'UDE', link: "/about/UDE" },
        { text: 'BUW', link: "/about/BUW" },
        { text: 'TH Koeln', link: "/about/TH_Koeln" }
        ]
      }],
  
    sidebar: [
      {
    text: 'Lernzielmatrizen',
    collapsible: true,
    items: [
      { text: 'VL 01 Forschungsdaten LZ', link: '/lz/VL_01_Forschungsdaten_LZ.md' },
      { text: 'VL 01 VL 01 Forschungsdaten Text', link: "/texte/VL_01_Forschungsdaten_Text.md" },
      { text: 'VL 01 Forschungsdaten LZ', link: '/texte/VL_01_Forschungsdaten_LZ.md' },
      { text: 'VL 01 Forschungsdaten Text', link: '/texte/VL_01_Forschungsdaten_Text.md' },
      { text: 'VL 02 Forschungsdatenmanagement LZ', link: '/texte/VL_02_Forschungsdatenmanagement_LZ.md' },
      { text: 'VL 02 Forschungsdatenmanagement Text', link: '/texte/VL_02_Forschungsdatenmanagement_Text.md' },
      { text: 'VL 03 Datenlebenszyklus LZ', link: '/texte/VL_03_Datenlebenszyklus_LZ.md' },
      { text: 'VL 03 Datenlebenszyklus Text', link: '/texte/VL_03_Datenlebenszyklus_Text.md' },
      { text: 'VL 04 FAIR LZ]', link: '/texte/VL_04_FAIR_LZ.md' },        
      { text: 'VL 04 FAIR Text]', link: '/texte/VL_04_FAIR_Text.md' },
      { text: 'VL 05 DMP LZ', link: '/texte/VL_05_DMP_LZ.md' },
      { text: 'VL 05 DMP Text', link: '/texte/VL_05_DMP_Text.md' },
      { text: 'VL 06 Metadaten LZ', link: '/texte/VL_06_Metadaten_LZ.md' },
      { text: 'VL 06 Metadaten Text', link: '/texte/VL_06_Metadaten_Text.md' },
      { text: 'VL 07 Dateisystem LZ', link: '/texte/VL_07_Dateisystem_LZ.md' },
      { text: 'VL 07 Dateisystem Text', link: '/texte/VL_07_Dateisystem_Text.md' },
      { text: 'VL 08 Speichern LZ', link: '/texte/VL_08_Speichern_LZ.md' },
      { text: 'VL 08 Speichern Text', link: '/texte/VL_08_Speichern_Text.md' },
      { text: 'VL 09 Finden LZ', link: '/texte/VL_09_Finden_LZ.md' },
      { text: 'VL 09 Finden Text', link: '/texte/VL_09_Finden_Text.md' },
      { text: 'VL 10 Recht LZ', link: '/texte/VL_10_Recht_LZ.md' },
      { text: 'VL 10 Recht Text', link: '/texte/VL_10_Recht_Text.md' },
      { text: 'VL 11 Ethik LZ', link: '/texte/VL_11_Ethik_LZ.md' },
      { text: 'VL 11 Ethik Text', link: '/texte/VL_11_Ethik_Text.md' },
      { text: 'VL 12 Team LZ', link: '/texte/VL_12_Team_LZ.md' },
      { text: 'VL 12 Team Text', link: '/texte/VL_12_Team_Text.md' },
      ]
    }
    ],
  }
}
)


