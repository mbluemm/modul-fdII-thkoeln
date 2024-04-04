---
title: VL 04 - FAIR-Prinzipien
lang: de-DE
output: 
    html_document: 
        toc: true
        toc_float: true
aside: true
---

# FAIR-Prinzipien

[[toc]]

## Lernziele

::: info
In diesem Themenblock lernen Sie, was das Akronym FAIR bedeutet, wie die FAIR-Prinzipien
praktisch umgesetzt werden können und welche Vor- und Nachteile die Anwendung der FAIR-
Prinzipien mit sich bringen können.
:::

<!-- Video von Medienagentur -->

## FAIR-Prinzipien

Forschungsdaten sollen FAIR sein. FAIR steht für Findable (Auffindbar), Accessible (Zugänglich), Interoperable (Interoperabel) und Reusable (Nachnutzbar).
Die FAIR-Prinzipien formulieren internationale Grundsätze für nachhaltig nachnutzbare Forschungsdaten. Hauptziel ist eine optimale Aufbereitung der Forschungsdaten.

<!-- SB: sobald Grafiken da sind, Absatz umformulieren -> ... Forschungsdaten,damit diese + Grafik + sind. -->
<!-- G-0044_BUW_Icon_Findability, G-0019_BUW_Icon_Zugang, G-0046_BUW_Icon_Interoperability, G-0020_BUW_Icon_Nachnutzung ; FAIR ggff. Übersetzung von "reusable" im Text anpassen-->

sind.
Quelle: Forschungsdaten.info, 2023

An der TH Köln sollen Studierende und Forschende ihre Daten FAIR aufbereiten. Ein Ziel ist, dass Forschungsdaten von Menschen und Maschinen ausgewertet werden können. Damit soll die Auffindbarkeit von Datensätzen und deren Wiederverwendbarkeit gewährleistet werden (Sauther-Patrascu und Dmitrieva, 2021).

<!-- 0007_THK_Leitlinien -->

### Findable (Auffindbar):

<!-- G-0044_BUW_Icon_Findability -->

Forschungsdaten sollten leicht auffindbar sein. Dies wird erreicht durch:

- Vergeben von persistenten Identifikatoren: Daten erhalten eine globale und eindeutige
    Kennung, auch als persistente Identifikatoren (oder Persistent Identifier) bekannt, um ihre
    dauerhafte Identifizierung sicherzustellen. Beispiele dafür sind DOI (Digital Object Identifier).
  <!-- 0021_THK_PID neben Absatz ergänzen -->
- Umfangreiche Metadaten: Daten werden umfassend mit Metadaten beschrieben. Diese
    Metadaten enthalten klar und explizit die Kennung der beschriebenen Daten.
    <!-- 0005_THK_Metadaten neben Absatz ergänzen -->
- Strukturierte Speicherung: Daten werden sinnvoll benannt und strukturiert gespeichert, um
    ihre Organisation und Auffindbarkeit zu verbessern.
  <!-- G-0038_BUW_Icon_Diskette neben Absatz ergänzen -->

### Accessible (Zugänglich):

<!-- G-0019_BUW_Icon_Zugang -->

Forschungsdaten sollten für alle Interessierten zugänglich sein. Dies erfordert:
- klare Zugangsregeln und offene Lizenzen, die die Wiederverwendung ermöglichen.
  Forschungsdaten können in Forschungsdaten-Journalen oder Forschungsdatenzentren veröffentlicht werden.
<!-- 0019_THK_Zugriffsrechte neben Absatz ergänzen -->
- persistente Metadaten, auch wenn die Daten später zurückgenommen werden müssen.
<!-- 0005_THK_Metadaten neben Absatz ergänzen -->

Es ist jedoch zu beachten, dass nicht alle Forschungsdaten für eine freie Veröffentlichung geeignet
sind, insbesondere wenn es sich um sensible, personenbezogene Daten handelt oder wenn Rechte
Dritter involviert sind. FAIR bedeutet nicht automatisch Open Access, da es auch Fälle gibt, in denen
Daten aufgrund von Einschränkungen nicht frei zugänglich gemacht werden können. In solchen Fällen
können Hinweise in den Metadaten angegeben werden, um Interessierte an den entsprechenden
Ansprechpartner zu verweisen.

<!-- G-0153_BUW_Icon_personenbezogene_Daten und 0016_THK_gesetzliche Vorschriften neben Absatz ergänzen -->

### Interoperable (Interoperabel):

<!--  G-0046_BUW_Icon_Interoperability -->

Interoperabilität wird durch verschiedene Maßnahmen erreicht:

- Verwendung standardisierter Metadaten: Daten und Metadaten sollten eine formale,
    allgemein anwendbare Sprache verwenden. Dies erleichtert das Verständnis und die
    Interpretation der Daten sowohl für Menschen als auch für Maschinen.
- Verwendung von FAIR-konformen Vokabularen: Metadaten sollten Vokabulare verwenden,
    die den FAIR-Prinzipien entsprechen. Diese Vokabulare erleichtern die Einordnung der Daten
    und die Kombination mit anderen Datensätzen.
- Qualifizierte Verweise auf andere Metadaten: Metadaten sollten qualifizierte Verweise auf
    andere Metadaten enthalten. Dies unterstützt die Nachverfolgbarkeit und Verknüpfung von
    Informationen.

<!-- Abbildung 0044_THK_Metadaten einfügen -->

### Reusable (Wiederverwendbar):

<!-- G-0020_BUW_Icon_Nachnutzung -->

Wiederverwendbarkeit stellt sicher, dass Forschungsdaten und die zugehörigen Metadaten so
umfassend beschrieben sind, dass sie für zukünftige Forschungsvorhaben von Mensch und Maschine
wiederverwendet und weiterverarbeitet werden können. Dafür sind mehrere Aspekte von Bedeutung:

- Detaillierte Beschreibung von Metadaten: Daten und Metadaten sollten ausführlich
    beschrieben werden.
  - Informationen zur Entstehung: Metadaten sollten detaillierte Informationen über die
    Entstehung der Daten enthalten, einschließlich der verwendeten Methoden, Instrumente und
    Software.
- Klare Datennutzungslizenz: Die Daten müssen mit einer eindeutigen und zugänglichen
    Datennutzungslizenz veröffentlicht werden. Dies klärt, unter welchen Bedingungen die Daten
    genutzt werden dürfen.
- Anpassung an Community-Standards: Die Metadaten sollten den Standards und Praktiken
    der jeweiligen Forschungsgemeinschaft entsprechen, um eine reibungslose Zusammenarbeit
    und Nutzung zu ermöglichen.

<!-- SB: richtiges Bild? VL2 Z.157-->

<a title="Jørgen Stamp
, CC BY 2.5 DK &lt;https://creativecommons.org/licenses/by/2.5/dk/deed.en&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Forside_DigitalBevaring.png"><img width="256" alt="Forside DigitalBevaring" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Forside_DigitalBevaring.png/512px-Forside_DigitalBevaring.png"></a>
Quelle: Digitalbevaringdk Forside_DigitalBevaring

## Vor- und Nachteile der FAIR-Prinzipien im Forschungsdatenmanagement

<!-- Abbildung 052_THK_Wiederverwendbarkeit --> 

 ### Vorteile der FAIR-Prinzipien:

 <!-- 0022_THK_fröhliche_Person -->

- Erhöhte Sichtbarkeit und Zitierbarkeit: Durch die Einhaltung der FAIR-Prinzipien werden
    Forschungsdaten besser auffindbar und zitierbar. Dies trägt dazu bei, die Anerkennung und
    den Einfluss der Forschenden zu steigern.
- Förderung der Wiederverwendung: Forschungsdaten, die nach den FAIR-Prinzipien
    organisiert sind, können von anderen Forschenden leichter wiederverwendet werden, was zu
    effizienterer Forschung und schnellerem Fortschritt führt. Mehrfacharbeit oder
    Doppelerhebungen, die oftmals mit hohen Kosten verbunden sind, werden so bestenfalls
    vermieden.
- Bessere Kollaboration: Die Interoperabilität ermöglicht es, Daten aus verschiedenen Quellen
    zu kombinieren und zu analysieren, was die Zusammenarbeit zwischen Disziplinen und
    Forschungsteams fördert.
- Verbesserte Qualitätskontrolle: Durch klare Metadaten und Dokumentation wird die Qualität
    der Daten und Forschungsergebnisse verbessert und eine bessere Überprüfbarkeit
    ermöglicht. Zudem steigt die Qualität der Daten durch Rückmeldungen von Kolleg:innen in der
    Forschung.
- Nachhaltigkeit und Langzeitarchivierung: Daten werden so strukturiert, dass sie langfristig
    erhalten und verstanden werden können, was die Nachhaltigkeit von Forschung und Daten
    sicherstellt.

 ### Nachteile der FAIR-Prinzipien:

<!-- 0023_THK_nachdenkende_Person -->

- Zeitaufwand: Die Anwendung der FAIR-Prinzipien erfordert zusätzliche Zeit und Ressourcen
    für die Erstellung von Metadaten, die Datenorganisation und die Einhaltung von Standards.
- Komplexität: Die Umsetzung der Prinzipien erfordert ein Verständnis für
    Metadatenstandards, Datenformate und technische Infrastrukturen, was für einige Forschende
    eine steile Lernkurve bedeuten kann.
- Datenschutz: Bei der Offenlegung von Forschungsdaten müssen Datenschutzbestimmungen
    und ethische Richtlinien berücksichtigt werden, um sicherzustellen, dass sensible
    Informationen nicht gefährdet werden.
- Disziplinäre Unterschiede: Nicht alle Forschungsbereiche können die FAIR-Prinzipien
    gleichermaßen anwenden, da disziplinspezifische Anforderungen und Datenschutzbedenken
    variieren können.

<!-- Quiz / Wahr oder Falsch: Aufgabe von Train-the-Trainer (S. 33): Wahrheit oder Lüge: Welchen der folgenden Aussagen bezogen auf die FAIR-Prinzipien stimmen Sie zu? 1. Nur offene Daten können auch FAIR sein. 2. Ein gutes Forschungsdatenmanagement ist eine Voraussetzung für Daten, die den FAIR-Prinzipien entsprechen. 3. Sind Daten offen und FAIR, ist auch eine gute Datenqualität garantiert. 4. Je FAIRer und offener Daten sind, desto größer ist das Nachnutzungspotential. -->


## Leitfragen und Aufgaben

### Leitfragen:

<!-- 0025_THK_Fragezeichen -->

1. Welche Aspekte der FAIR-Prinzipien sind in Ihrem Studium generell relevant?
2. Nennen Sie Beispiele, in welchem Kontext die FAIR-Prinzipien in Ihrem Studium angewendet wurden.

### Aufgabe:

 <!-- 0034_THK_Aufgabe -->

Arbeiten Sie die angegebenen Materialien durch und beantworten Sie für sich die Fragen.
Dokumentieren und reflektieren Sie Ihre Ergebnisse in Ihrem Lernportfolio.


## Weiterführende Materialen und Quellen

### Literatur

<!-- G-0044_BUW_Icon_Findability -->
<!-- hier noch 04_Poster_FAIRDATA einfügen aus sciebo-Ordner --> 
Poster_FAIRDATA. Erstellt im Rahmen des FDMentor-Projektes. Idee und Gestaltung: Katarzyna Biernacka, Dr. Dominika Dolzycka, Petra Buchholz, Kerstin Helbig. [Poster: FAIRDATA](/04_Poster_FAIRData_V4.pdf)

Buch, Susanne, Fliegner, Angelika, & Raatz, Philip. (2023, April 14). *#datendienstag: Datenmanagementpläne und 
Forschungsdatenmanagement in Forschungsanträgen*. Folien 10-15. Zenodo. [https://doi.org/10.5281/zenodo.7825751](https://doi.org/10.5281/zenodo.7825751)

Carroll, S.R., Herczog, E., Hudson, M. et al. (2021). Operationalizing the CARE and FAIR Principles
for Indigenous data futures. Sci Data 8, 108. [https://doi.org/10.1038/s41597-021-00892-0](https://doi.org/10.1038/s41597-021-00892-0).

Forschungsdaten.info. (2023, 21. Juli). FAIRe Daten. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/faire-daten/](https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/faire-daten/).

Friedrich, T. & Recker, J. (2021). 5.1 Auffindbarkeit und Nutzbarkeit von Daten. In M. Putnings, H.
Neuroth & J. Neumann (Ed.), Praxishandbuch Forschungsdatenmanagement (S. 405-426). Berlin,
Boston: De Gruyter Saur. [https://doi.org/10.1515/9783110657807-023](https://doi.org/10.1515/9783110657807-023).

GO FAIR. (o. D.). FAIR Principles. Zugriff am 18.10.2023, von [https://www.go-fair.org/fair-principles/](https://www.go-fair.org/fair-principles/).

GO FAIR – FAIR made easy (englisch, 4:06), [https://youtu.be/CEPsTiEgWR4](https://youtu.be/CEPsTiEgWR4)

Universität Wien. (o. D.). FAIR und CARE Prinzipien. Zugriff am 18.10.2023, von
[https://rdm.univie.ac.at/de/forschungsdatenmanagement/fair-und-care-prinzipien/](https://rdm.univie.ac.at/de/forschungsdatenmanagement/fair-und-care-prinzipien/).

Wilkinson, M., Dumontier, M., Aalbersberg, I. et al. (2016). The FAIR Guiding
Principles for scientific data management and stewardship. Sci Data 3, 160018.
[https://doi.org/10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18).

### Quellen:

Böker, E. (2023a, 5. Mai). Zitieren von Daten. Forschungsdaten.info. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/finden-und-nachnutzen/zitieren-von-daten/](https://forschungsdaten.info/themen/finden-und-nachnutzen/zitieren-von-daten/).

Forschungsdaten.info. (2023, 21. Juli). FAIRe Daten. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/faire-daten/](https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/faire-daten/).

GO FAIR. (o. D.). FAIR Principles. Zugriff am 18.10.2023, von [https://www.go-fair.org/fair-principles/](https://www.go-fair.org/fair-principles/).

Universität Wien. (o. D.). FAIR und CARE Prinzipien. Zugriff am 18.10.2023, von
[https://rdm.univie.ac.at/de/forschungsdatenmanagement/fair-und-care-prinzipien](https://rdm.univie.ac.at/de/forschungsdatenmanagement/fair-und-care-prinzipien).

Sauther-Patrascu, K., Dmitrieva, S. (2021). Leitlinie zum Umgang mit Forschungsdaten. Präsidium der
TH Köln. Zugriff am 20.10.2023, von [https://www.th-koeln.de/mam/downloads/deutsch/forschung/leitlinie_zum_umgang_mit_forschungsdaten.pdf](https://www.th-koeln.de/mam/downloads/deutsch/forschung/leitlinie_zum_umgang_mit_forschungsdaten.pdf).
