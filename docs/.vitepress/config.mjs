import { defineConfig } from 'vitepress'

/* ■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■
    Konfigurationsdatei
  □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■ */


// https:/vitepress.dev/reference/site-config
export default defineConfig({

  title: 'Technische Hochschule Köln',
  lang: 'de-DE',
  description: 'Vorlesungskripte, Lerzielmatrizen, Kursmaterialien',
  base: '/modul-fdII-thkoeln/',

  // https:/vitepress.dev/reference/default-theme-config
  themeConfig: {

    logo: 'docs/medien/assets/logo_TH_Koeln.png',

    // ︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Navigation
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
  
    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Sidebar
    sidebar: [
      {
    text: 'Lerneinheiten für Studierende',
    collapsed: true,
    items: [
      { text: '1. Forschungsdaten', link: '/lz/VL_01_Forschungsdaten_LZ.md' },
      { text: '2. FDM', link: '/lz/VL_02_Forschungsdatenmanagement_LZ.md' },
      { text: '3. DLZ', link: '/lz/VL_03_Datenlebenszyklus_LZ.md' },
      { text: '4. FAIR', link: '/lz/VL_04_FAIR_LZ.md' },        
      { text: '5. DMP', link: '/lz/VL_05_DMP_LZ.md' },
      { text: '6. Metadaten', link: '/lz/VL_06_Metadaten_LZ.md' },
      //{ text: '7. Dateisystem', link: '/lz/VL_07_Dateisystem_LZ.md' },
      //{ text: '8. Speichern', link: '/lz/VL_08_Speichern_LZ.md' },
      //{ text: '9. Finden', link: '/lz/VL_09_Finden_LZ.md' },
      //{ text: '10. Recht', link: '/lz/VL_10_Recht_LZ.md' },
      //{ text: '11. Ethik', link: '/lz/VL_11_Ethik_LZ.md' },
      //{ text: '12. Team', link: '/lz/VL_12_Team_LZ.md' },
      ]
    },
    {
      text: 'Lehrkonzepte für Dozierende',
      collapsed: true,
      items: [
        { text: '1. Forschungsdaten', link: '/texte/VL_01_Forschungsdaten.md' },
        { text: '2. FDM', link: '/texte/VL_02_Forschungsdatenmanagement.md' },
        { text: '3. Datenlebenszyklus', link: '/texte/VL_03_Datenlebenszyklus.md' },       
        { text: '4. FAIR', link: '/texte/VL_04_FAIR.md' },
        { text: '5. DMP', link: '/texte/VL_05_DMP.md' },
        { text: '6. Metadaten', link: '/texte/VL_06_Metadaten.md' },
        //{ text: '7. Dateisystem', link: '/texte/VL_07_Dateisystem.md' },
        //{ text: '8. Speichern', link: '/texte/VL_08_Speichern.md' },
        //{ text: '9. Finden', link: '/texte/VL_09_Finden.md' },
        //{ text: '10. Recht', link: '/texte/VL_10_Recht.md' },
        //{ text: '11. Ethik', link: '/texte/VL_11_Ethik.md' },
        //{ text: '12. Team', link: '/texte/VL_12_Team.md' },
        ]
      }
    ],
    
    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Aside
    aside: {
    },
    socialLinks: [
      { icon: 'github',
        link: 'https://github.com/mbluemm/modul-fdII-thkoeln' },
    ],

    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Footer 
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 <a href="https://www.dh.nrw/kooperationen/FDM@Studium.nrw-97" target="_blank">FDM@Studium.NRW</a>'
    },

    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Timestamp
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


