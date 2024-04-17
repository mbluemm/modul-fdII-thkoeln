---
title: VL 01 - Was sind Forschungsdaten?
lang: de-DE
output: 
    html_document: 
        toc: true
        toc_float: true
aside: true
layout: doc
---

# Was sind Forschungsdaten?

:::info Zitation:
Blümm, M., Fritsch, K., Bock, S., Prof. Dr. Arning, U., & Prof. Dr. Förstner, K. U. (2024). VL_01_Forschungsdaten. Blended-Learning-Basiskurs „Forschungsdatenmanagement“ (Version 0.1). https://mbluemm.github.io/modul-fdII-thkoeln/texte/VL_01_Forschungsdaten.html
:::

[[toc]]

<!-- mögliche Abbildungen für die VL: 0041_THK_Forschungsarbeit ; G-0063_BUW_Gruppe_Wissenschaft ; 0042_THK_Daten ; 0043_THK_Digitalisierung -->

## Lernziele

::: info Lernziele
In diesem Themenblock geht es darum, den Begriff „Forschungsdaten“ zu definieren und zu klären, welche Rolle FD im Forschungsprozess spielen.
:::

## Was sind Forschungsdaten?

Forschungsdaten sind (digitale) Daten, die im Rahmen wissenschaftlicher Untersuchungen beispielsweise durch Digitalisierung, Quellenforschungen, Experimente oder Messungen gesammelt, generiert oder analysiert werden. Diese Daten spielen eine essenzielle Rolle bei der Erstellung von
Erkenntnissen, der Prüfung von Hypothesen und der Stützung von wissenschaftlichen Argumentationen.

> Dokumente in digitaler Form, bei denen es sich nicht um wissenschaftliche Veröffentlichungen handelt und die im Laufe von wissenschaftlichen Forschungstätigkeiten erfasst oder erzeugt und als Nachweise im Rahmen des Forschungsprozesses verwendet werden oder die in der Forschungsgemeinschaft allgemein für die Validierung von Forschungsfeststellungen und -ergebnissen als notwendig erachtet werden.
> -- Richtlinie (EU) 2019/1024 Des Europäischen Parlaments und des Rates, vom 20. Juni 2019 über offene Daten und die Weiterverwendung von Informationen des öffentlichen Sektors, Art. 2, Abs. 9

Forschungsdaten liegen in allen wissenschaftlichen Disziplinen vor, die mit Daten arbeiten, wie den
Naturwissenschaften und den Sozial- und Wirtschaftswissenschaften, bis hin zu spezifischen
Datentypen wie linguistischen Sprachdaten oder Bildbeschreibungen in den Kunstwissenschaften.
Das Verständnis von Forschungsdaten kann je nach Fachbereich, Forschungsprojekt und Kontext
variieren. In den Naturwissenschaften können Forschungsdaten Messwerte, Laborergebnisse oder
Sensorausgaben umfassen. Sozial- und Wirtschaftswissenschaften verwenden oft Umfragedaten,
Textanalysen oder historische Aufzeichnungen. Auch in den Geisteswissenschaften spielen
Forschungsdaten eine wichtige Rolle, sei es in Form von literarischen Texten, Kunstwerken,
Archivmaterial oder linguistischen Daten. In den Geistes- und Kulturwissenschaften werden solche
Daten als Forschungsdaten verstanden, die maschinenlesbar und zum Zwecke der Archivierung,
Zitierbarkeit und zur weiteren Verarbeitung aufbewahrt werden können. Forschungsdaten sind nicht
nur isolierte Informationen, sondern vielmehr Bausteine, die zur Entwicklung von neuem Wissen und
zur Unterstützung von Forschungsarbeiten beitragen.

<!-- hier Icons Datentypen ergänzen: G-0049_BUW_Icon_Datentypen_Messung ; G-0016_BUW_Icon_Erhebung; G-0050_BUW_Icon_Datentypen_Sensor ; G-0017_BUW_Icon_Analyse ; G-0057_BUW_Icon_Datentyp_Survey ; G-0055_BUW_Icon_Datentyp_Text ; 0004_THK_Datentyp_Objekte --> 

Digitale Forschungsdaten präsentieren sich in verschiedenen Formen, darunter Texte, Bilder,
Audiodateien, Videoclips und interaktive Visualisierungen. Diese Vielfalt an Formaten und Disziplinen
zeigt, dass Forschungsdaten weit über herkömmliche Vorstellungen von Datensammlungen
hinausgehen.

<!-- G-0055_BUW_Icon_Datentyp_Text ; G-0053_BUW_Icon_Datentyp_Bild ; G-0054_BUW_Icon_Datentyp_AV -->
<img width="30%" alt="Audiosymbol" src="/medien/icons/0002_THK_Datentyp-Audiodateien.svg?autoSizes=true">

In diesem Kurs werden die Begriffe „Daten“ und „Dateien“ häufiger verwendet. Für den fortlaufenden Kurs sind sie wie folgt definiert:

::: tip Daten
Daten sind „durch Aufzeichnungen, Beobachtungen, Messungen, statistische Verfahren o.Ä. gewonnene Informationen“
:::

<img width="30%" alt="Audiosymbol" src="/medien/icons/0032_THK_Datensatz.svg?autoSizes=true">

::: tip Dateien
Eine Datei ist „unter einem gemeinsamen Namen auf einem Datenträger gespeicherte und zugreifbare Menge von Daten“. 
:::
<!-- 0028_THK_OrdnerPC -->

in: DWDS _–_ Digitales Wörterbuch der deutschen Sprache, hrsg. v. d. Berlin-Brandenburgischen Akademie der Wissenschaften, [Daten](https://www.dwds.de/wb/Daten) und [Datei](https://www.dwds.de/wb/Datei), abgerufen am 23.10.2023.

<!-- Dummy? -->
<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/FunctionalPreservation_DigitalPreservation.png/512px-FunctionalPreservation_DigitalPreservation.png"
         alt="FunctionalPreservation DigitalPreservation"
         width="512"
         height="30%">       
    <figcaption>Jørgen Stamp, CC BY 2.5 DK &lt;https://creativecommons.org/licenses/by/2.5/dk/deed.en&gt;, via Wikimedia Commons</figcaption>
</figure>

## Welche Datentypen gibt es?

Es gibt Primärdaten und Sekundärdaten[^1]

::: tip Primärdaten 
<!-- G-0094_BUW_a_Icon_Primaerdaten -->

- sind i.d.R. erhobene Rohdaten, die weder bearbeitet, geprüft noch kommentiert bzw. mit Metadaten versehen wurden.
- Sie stellen die Grundlage für die wissenschaftliche Beschäftigung mit einem Gegenstand dar.
:::

::: tip Sekundärdaten
<!-- G-0094_BUW_b_Icon_Sekundaerdaten -->

- sind Daten, die aus Primärdaten durch Verarbeitungsschritte hervorgehen.
- Es handelt sich um abgeleitete oder prozessierte Daten, die im Rahmen der Primärdatenverarbeitung als Ergebnis z. B. als Publikation anfallen.
:::

---
[^1]: Sauther-Patrascu und Dmitrieva (2021)

## Die Relevanz von Forschungsdaten

Die steigende Menge und Vielfalt an Forschungsdaten in unterschiedlichen Disziplinen erfordert eine
gezielte Herangehensweise, um diese Daten bestmöglich zu organisieren, zu sichern und für aktuelle
sowie zukünftige wissenschaftliche Erkenntnisse zu nutzen. Dieses Thema wird in der zweiten
Vorlesung in mehr Detail eingeführt und ist der Grundstein dieses Kurses.

<!-- Bei Datenbank noch 0001_THK_Beispiel einfügen. Aufgabe: 0034_THK_Aufgabe ; Leitfragen: 0025_THK_Fragezeichen ; Lektüre: 0038_THK_Buch ; Quellen- und Weiterführende Materialien: nochmal besprechen
SB: Gibt kein THK_Buch-Icon?
 -->

## Leitfragen und Aufgaben

### Leitfragen

- Wie kann der Begriff Forschungsdaten definiert werden?
- Welche Arten von Forschungsdaten haben Sie bislang kennengelernt bzw. vielleicht schon selbst genutzt?

### Aufgabe

<img width="30%" alt="Aufgabe" src="/medien/icons/0034_THK_Aufgabe.svg?autoSizes=true">

### Lektüre

 Forschungsdaten.org (2015, 8. Oktober). Forschungsdaten. Zugriff am 18.10.2023, von [https://www.forschungsdaten.org/index.php/Forschungsdaten](https://www.forschungsdaten.org/index.php/Forschungsdaten).

## Weiterführende Materialen und Quellen

Global Terrorism Database (GTD)

Die vom GTD Advisory Board initiierte Global Terrorism Database (GTD) wird vom National Consortium for the Study of Terrorism and Responses to Terrorism (START)[^2] kostenlos zur Verfügung gestellt[^3]. Die Datenbank enthält über 200.000 Datensätze zu Anschlägen, die weltweit zwischen 1970 und 2020 in Zeitungsartikeln und anderen Informationsquellen dokumentiert und nach einer kritischen Überprüfung der Quellen als nachweisbare terroristische Handlungen eingestuft wurden. Jeder aufgenommene Datensatz wird durch mindestens 45 Kriterien _–_ wie beispielsweise Datum, Ort, Ziele und eingesetzte Waffen _–_ systematisch klassifiziert.

Ausgenommen hiervon sind alle mutmaßlichen Anschläge, die im Jahr 1993[^4] verübt wurden. Nach einem Datenverlust konnten nur 15% des geschätzten Datenbestandes aus dem Jahr 1993
rekonstruiert werden. Um zu verhindern, dass dieser unvollständige Datensatz zu Verzerrungen bei der Analyse und Interpretation der Ergebnisse führt, ist der entsprechende Datensatz nicht mehr in der Datenbank gespeichert, sondern wird in einem separaten Datenblatt zur Verfügung gestellt.

Eine Visualisierung der zwischen 1970 und 2016 in unterschiedlichen Regionen verübten terroristischen Attentate veranschaulicht, welche Folgen der Verlust von Forschungsdaten langfristig haben kann.

![Abbildung 1:](/medien/abbildungen/GTD_Attentate_Region.svg)
Abbildung 1: Übersicht über die zwischen 1970 und 2016 in den unterschiedlichen Regionen verübten terroristischen Attentate. Sina Bock[^5]

Auf der GTD-Webseite werden weitere Visualisierungen angeboten, die sich als Grundlage für eine kritische Auseinandersetzung mit der Erhebung, Analyse, Interpretation und Visualisierung von Forschungsdaten eignen. Die 2020 GTD Heat Map[^6] zeigt beispielsweise die geographische Verteilung von weltweit verübten Anschlägen im Jahr 2020. Die Intensität der Attentate in diesem Jahr, wird mit Hilfe einer Farbskala visualisiert. Die Einfärbung repräsentiert die Anzahl der Menschen, die bei dem jeweiligen Attentat verletzt oder getötet wurden.

### Literatur

Böker, E. (2023, 5. Mai). Was sind Forschungsdaten. Forschungsdaten.info. Zugriff am 18.10.2023, von [https://forschungsdaten.info/themen/informieren-und-planen/was-sind-forschungsdaten/](https://forschungsdaten.info/themen/informieren-und-planen/was-sind-forschungsdaten/).

Deutsche Forschungsgemeinschaft. (2019). Leitlinien zur Sicherung guter wissenschaftlicher Praxis. Kodex. Zenodo. [http://doi.org/10.5281/zenodo.3923602](http://doi.org/10.5281/zenodo.3923602).

Putnings, M., Neuroth, H. & Neumann, J. (2021). Praxishandbuch Forschungsdatenmanagement. Berlin, Boston: De Gruyter Saur. [https://doi.org/10.1515/9783110657807](https://doi.org/10.1515/9783110657807).

### Quellen

Sauther-Patrascu, K. S. & Dmitrieva, S. (2021). Leitlinie zum Umgang mit Forschungsdaten. Abgerufen am 20. Oktober 2023, von [https://www.th-koeln.de/mam/downloads/deutsch/forschung/leitlinie_zum_umgang_mit_forschungsdaten.pdf](https://www.th-koeln.de/mam/downloads/deutsch/forschung/leitlinie_zum_umgang_mit_forschungsdaten.pdf).

START (National Consortium for the Study of Terrorism and Responses to Terrorism). (2022). Global Terrorism Database, 1970 - 2020 [data file](https://www.start.umd.edu/gtd).

START. (2020). GTD Heatmaps. Abgerufen am 20. Oktober 2023, von [https://www.start.umd.edu/gtd/features/GTD_Heatmaps.html](https://www.start.umd.edu/gtd/features/GTD_Heatmaps.html).

---
[^2]: START (2022).
[^3]: ebd.
[^4]: START (2021), S. 4.
[^5]: START (2022).
[^6]: START (2020).



[def]: /medien/icons/0002_THK_Datentyp-Audiodateien.svg