---
title: VL 07 - Dateisystem
lang: de-DE
output: 
    html_document: 
        toc: true
        toc_float: true
aside: true
---

# Ordnerstruktur und Dateibenennungen

:::info Zitation:
Blümm, M., Fritsch, K., Bock, S., Prof. Dr. Arning, U., & Prof. Dr. Förstner, K. U. (2024). VL_07_Dateisystem. 
Blended-Learning-Basiskurs „Forschungsdatenmanagement“ (Version 0.1). https://mbluemm.github.io/modul-fdII-thkoeln/texte/VL_07_Dateisystem.html
:::

<img src="../medien/icons/0027_THK_Ordnerstruktur.svg?autoSizes=true"
     alt="Icon_Ordnerstruktur"
     style="float: right; margin-left: 20px; width: 15%;" />

<img src="../medien/icons/0029_THK_Dateibenennung.svg?autoSizes=true"
     alt="Icon_Dateibenennung"
     style="float: right; margin-left: 20px; width: 15%;" />

[[toc]]

## Lernziele

::: info Lernziele
In diesem Themenblock lernen Sie die Relevanz einer Ordnerstruktur, Dokumentation,
Speicherung und Benennung von Daten und Dateien im Forschungsprozess kennen und welche Aspekte
dabei zu beachten sind.
:::

<!-- Video von Medienagentur einfügen -->

## Daten und Dateien bei der Speicherung strukturieren und ordnen
<!--
<img src="../medien/icons/0051_THK_Datenchaos.svg?autoSizes=true"
     alt="Icon_Datenchaos"
     style="float: left; margin-right: 20px; width: 15%;" />
-->
‚
Bei Arbeit mit Daten und Dateien ist bei der Speicherung (Ablage) der Daten/Dateien eine
gute Struktur und Benennung empfehlenswert.

<img src="../medien/icons/0006_THK_Organisieren.svg?autoSizes=true"
     alt="Icon_Organisieren"
     style="float: left; margin-right: 20px; width: 15%;" />

Als Erinnerung aus VL1, beschreibt das DWDS Daten
als „durch Aufzeichnungen, Beobachtungen, Messungen, statistische Verfahren o. Ä. gewonnene Informationen“ und eine Datei als „unter einem gemeinsamen Namen auf einem Datenträger
gespeicherte und zugreifbare Menge von Daten“[^1]. <!-- das anders vom Layout her einbinden? -->

Auch im FDM sollte aus den folgenden Gründen darauf geachtet werden:

- Es ist eine Grundvoraussetzung der Guten wissenschaftlichen Praxis.

<!-- 0008_THK_GWP neben Text einfügen -->
<img src="../medien/icons/0008_THK_GWP.svg?autoSizes=true"
     alt="Icon_GWP"
     style="float: left; margin-right: 20px; width: 15%;" />

- Je größer die Datenmenge ist, umso wichtiger ist ein gutes Datenmanagement.
- Der aktuellste Forschungsstand ist schnell identifizierbar.
- Die Nachnutzung der Daten und die Interpretierbarkeit der Daten wird vereinfacht und langfristig sichergestellt.
    - Daten bleiben zugänglich und leicht auffindbar, was eine längere Suche vermeidet,
    - Bei Änderungen besteht Klarheit und Struktur zwischen unterschiedlichen Versionen.
    - Daten werden somit auch für Dritte nachvollziehbar.
    ▪ Vereinfacht die Zusammenarbeit.
    ▪ Ermöglicht die Reproduzierbarkeit der Forschungsergebnisse.
          
- Das Risiko eines Datenverlusts wird minimiert. Die Daten sind sicher gespeichert und auffindbar.
    o Vorbeugungsmaßnahme von versehentlichem Löschen oder Überschreiben von
       Daten/Dateien.

<img src="../medien/icons/G-0020_BUW_Icon_Nachnutzung.svg?autoSizes=true"
     alt="Icon_Nachnutzung"
     style="float: left; margin-right: 20px; width: 15%;" />

(Weiner et al. 2020; VerbundFDB 2018)

[^1] in: DWDS _–_ Digitales Wörterbuch der deutschen Sprache, hrsg. v. d. Berlin-Brandenburgischen Akademie der
Wissenschaften, [https://www.dwds.de/wb/Daten](https://www.dwds.de/wb/Daten) und [https://www.dwds.de/wb/Datei](https://www.dwds.de/wb/Datei), abgerufen am 23.10.2023.

## Gute Ordnerstruktur

<img src="../medien/icons/0027_THK_Ordnerstruktur.svg?autoSizes=true"
     alt="Icon_Ordnerstruktur"
     style="float: left; margin-right: 20px; width: 15%;" />

Für eine übersichtliche Ordnerstruktur bei der Speicherung von Daten und Dateien sollten folgende

Aspekte beachtet sein:

- Die Ordner sind nach Themen geordnet.
- Die Ordnernamen verweisen auf Ordnerinhalte.
- Rohdaten (unverarbeitete Originaldaten) sind in einem separaten Ordner abgelegt.
- Laufende und abgeschlossene Arbeiten sind getrennt voneinander, d.h. in unterschiedlichen
    Ordnern, abgelegt.
- Die Ordnerstruktur ist:
    o in einer Verzeichnisstruktur (auch Baumstruktur oder Verzeichnisbaum genannt),
       hierarchisch gegliedert und beinhaltet somit übergeordnete (allgemeinere) und eine
       überschaubare Anzahl an untergeordneten (konkretere) Elemente,
    o auf lokalen und externen Speichermedien identisch,
    o konsequent,
    o und klar ersichtlich und für Dritte nachvollziehbar.

- Für eine gute Übersicht sollten Verzeichnisstrukturen auf Servern identisch zu denen auf den lokalen
Rechnern sein.

::: tip

<img src="../medien/icons/0020_THK_Idee.svg?autoSizes=true"
     alt="Icon_Idee"
     style="float: left; margin-right: 20px; width: 15%;" />

Eine Dokumentation der Ordnerstruktur und Dateibenennungen in einer separaten (.txt) Datei auf
oberster (Baum-)Ebene aufbewahren. Zur Nachvollziehbarkeit zu einem späteren Zeitpunkt oder von anderen.
:::

## Dateien benennen
<!--
[https://liascript.github.io/course/?https://raw.githubusercontent.com/BrittaP/LiaTestmodule_offen/main/Ordnung_und_Stuktur/22_OrdnungStruktur_de.md#](https://liascript.github.io/course/?https://raw.githubusercontent.com/BrittaP/LiaTestmodule_offen/main/Ordnung_und_Stuktur/22_OrdnungStruktur_de.md#)
-->

Neben einer sinnvoll gegliederten und konsequenten Ordnerstruktur ist auch eine klare Benennung
von Dateien essentiell, denn diese führt zu

- einer strukturierten Speicherung,
- Übersichtlichkeit und einer logischen Sortierung,
- Nachvollziehbarkeit und Auffindbarkeit,
und ermöglicht die Unterscheidung einzelner Dateien.

### Aspekte für eine Dateibenennung

<img src="../medien/icons/0029_THK_Dateibenennung.svg?autoSizes=true"
     alt="Icon_Dateibenennung"
     style="float: right; margin-left: 20px; width: 15%;" />

Dateien können nach unterschiedlichen Konventionen benannt werden. Damit Dateien strukturiert,
übersichtlich, nachvollziehbar und auffindbar sind, sollten Dateibenennungen

- das jeweilige Erstellungsdatum enthalten
     - Datumsformat: JJJJ-MM-TT[^2]
     - Datumsangabe: Am Anfang des Dateinamens; chronologische Sortierung
       z.B. „2023-05-17_Projekt_Erdnussbutter“
- Rückschlüsse auf den Inhalt der Dateien ermöglichen
     - deskriptive Informationen ordnen die Datei ihrem Kontext zu
- auch von Außenstehenden nachvollziehbar sein
     - wo Abkürzungen notwendig sind, sollte ein Abkürzungsverzeichnis in einer
       separaten Datei angelegt werden
- möglichst einheitlich/konsistent gewählt werden

::: tip Konventionen

Exemplarische Konventionen bei Dateibenennungen

- Großbuchstabe markiert den Anfang eines neuen Wortes: „projektErdnussbutter“
- Unterstrich markiert den Anfang eines neuen Wortes „Projekt_Erdnussbutter“
- Unterscheidung zwischen Groß- und Kleinbuchstaben (case-sensitiv) „projekt_erdnussbutter“ vs. „_projekt_Erdnussbutter“

[^2]: Das Format MM/TT/JJ ist für US-Amerikaner eindeutig. In Europa wird hauptsächlich das Format TT/MM/JJ verwendet. Japan
verwendet JJ/MM/TT. Als Separatoren können Slashs, Striche oder Punkte verwendet werden. In einigen Ländern werden
kleine Zahlen mit einer vorstehenden Null ergänzt, andere lassen diese weg. (vgl. World Wide Web Consortium (W3C), 2007)

- so kurz wie möglich, so lang wie nötig sein (Empfehlung:wenn möglich setzen sich
    Dateibenennungen maximal aus 255 Zeichen zusammen <!-- mit Mouse-over einbinden --> )
- auf Umlaute (ä, ö, ü) verzichten bzw. diese auflösen (ae, ue, oe)
- Keine Leerzeichen, Punkte und Sonderzeichen enthalten. (Leer- und Sonderzeichen haben eine besondere Bedeutung innerhalb eines Betriebssystems. Slash / (Linux) und Backslash \ (Windows) werden beispielsweise bei Pfadangaben verwendet <!-- Mouse-over--> ) Lediglich Unterstrich und Bindestrich sind erlaubt.
- eine Versionierung beinhalten (v01 etc.), die nach jeder Dateiänderung aktualisiert wird**
    2023 - 05 - 17_Projekt_Erdnussbutter_v01 statt "2023- 05 - 17_Projekt_Erdnussbutter_neu"
    2023 - 05 - 17_Projekt_Erdnussbutter_ v10 statt _2023- 05 - 17_Projekt_Erdnussbutter_final
    2023 - 05 - 17_Projekt_Erdnussbutter_v01 wird nach einer (umfangreichen) Änderung zu
    2023 - 05 - 17_Projekt_Erdnussbutter_v02
:::

::: warning Hinweis: Das Erstellungs- und das Änderungsdatum können beim Kopieren auf externe Backupdatenträger überschrieben
werden.
:::

::: info Abkürzungen

<img src="../medien/icons/0020_THK_Idee.svg?autoSizes=true"
     alt="Icon_Idee"
     style="float: left; margin-right: 20px; width: 15%;" />

Abkürzungen von Datei-Benennungen in einer separaten Datei festhalten
Auch eine generelle Dokumentation der Dateibenennungen aufbewahren (zur Nachvollziehbarkeit
zu einem späteren Zeitpunkt oder von anderen)
:::

::: info Versionierung

<img src="../medien/icons/0020_THK_Idee.svg?autoSizes=true"
     alt="Icon_Idee"
     style="float: left; margin-right: 20px; width: 15%;" />

Bei neuer Dateiversion oder Kopie einer bestehenden Datei wird im selben Schritt die vorherige Version in den
Archivordner („Archiv“) im Hauptordner verschoben. Das vermeidet das Duplizieren und Splitten von Dateiversionen mit
unterschiedlichen Bearbeitungsständen.
:::

::: warning Sonderzeichen

Die folgenden Zeichen dürfen in Dateinamen nicht verwendet werden, da sie in Betriebssystemen für interne Verwaltung reserviert sind:

\
{ }
< >
( )
*
%
#
‚‘
„ “
?
!
@
&
:::

## Beispiel: Dateibenennung
<!-- 0001_THK_Beispiel einfügen -->
<img src="../medien/icons/0001_THK_Beispiel.svg?autoSizes=true"
     alt="Icon_Beispiel"
     style="float: left; margin-right: 20px; width: 15%;" />

::: info Datierung
Datum_[Status]-Dokumententyp-[Autor:in]-Inhalt[_Version]
:::

::: info Felder

- Datum: JJJJ-MM-TT
- Status: z.B. ENTWURF
- Dokumententyp: z.B. Anschreiben, Interviewleitfaden, Konzept, Liste, ...
- Autor:in: Urheber:in des Dokumentes
- Inhalt: Thema / Inhalt des Dokuments
- Version: Bei versionierten Dokumenten wird die Version bei jeder Änderung hochgezählt z.B.
    _v1, _v2, ...
:::

Zur gleichzeitigen Umbenennung mehrerer Dateien, können unterschiedliche Softwaretools verwendet
werden.

(Krähwinkel, 2022)

## Leitfragen und Aufgaben

### Leitfragen

<img src="../medien/icons/0025_THK_Fragezeichen.svg?autoSizes=true"
     alt="Icon_Fragezeichen"
     style="float: left; margin-right: 10px; width: 15%;" />

1. Welche Merkmale sind bei einer strukturierten und nachhaltigen Datenablage (Ordnerstruktur
    und Dateibenennung) im besten Fall zu beachten?
2. Was ist die Relevanz von einer nachhaltigen Datenablage (Ordnerstruktur und
    Dateibenennung) im FDM?
3. Wissensübertragung: Welche Rolle spielt eine nachhaltige Datenablage im Studium? Worauf
    ist hier zu achten? Welche Probleme können entstehen?

### Aufgabe

<img src="../medien/icons/0034_THK_Aufgabe.svg?autoSizes=true"
     alt="Icon_Aufgabe"
     style="float: left; margin-right: 10px; width: 15%;" />

Arbeiten Sie die angegebenen Materialien durch und beantworten Sie für sich die Fragen.
Dokumentieren und reflektieren Sie Ihre Ergebnisse in Ihrem Lernportfolio.

<!-- Quiz von 07_Arbeitsblatt_Ordnung_Struktur von sciebo-Ordner einfügen -->
Welche dieser Beispiele folgen einer guten Bennenungskonvention?

- a) Olga_170413_probe17k </br>
- b) Naturepaper karl britta james fertig! Vm4520132Schmidt.pdf </br>
- c) 647749157.pdf </br>
- d) 170413_probe17k_olga Naturepaper+karl+britta+james &nal Olga170413probe17k </br>
- e) Krst_765_spkt_1203 Naturepaper+karl+britta+james fertig! überarbeitet </br>
- f) Kristall_765_spektr_20161203 Nature_karlbrittajames_endendversion 28q8QGlHKwrRw.pdf </br>
- g) Tagung_Digitale_Wissenschaft.pdf </br>

<!--
Entwerfen Sie eine Benennungskonvention für Ihre Dateien und geben ein paar Beispiele:
Entwerfen Sie eine Struktur für Ihre Ablage als Verzeichnisbaum:
-->
## Weiterführende Materialen und Quellen

### Literatur

<!-- G-0044_BUW_Icon_Findability
<img src="../medien/icons/00G-0044_BUW_Icon_Findability.svg?autoSizes=true"
     alt="Icon_Findability"
     style="float: left; margin-right: 20px; width: 15%;" />
 -->

Böker, E. (2023, 24. Juli). Formate erhalten. Forschungsdaten.info. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/formate-erhalten/](https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/formate-erhalten/)

Forschungsdaten.info. (2023, 5. Mai). Datenorganisation. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/organisieren-und-aufbereiten/datenorganisation/](https://forschungsdaten.info/themen/organisieren-und-aufbereiten/datenorganisation/)

Weiner, B., Wünsche, S., Kühne, S. et al. (2020, April 30). Crashkurs Forschungsdatenmanagement.
Zenodo. [https://doi.org/10.5281/zenodo.3778431](https://doi.org/10.5281/zenodo.3778431)

### Quellen

Biernacka, K., Buchholz, P., Danker, S. A. et al. (2021). Train-the-Trainer-Konzept zum Thema Forschungsdatenmanagement (Version 4). Zenodo. [https://doi.org/10.5281/zenodo.5773203](https://doi.org/10.5281/zenodo.5773203)

Krähwinkel, E., Langner, P., Lipp, R., et al. (2022). HeFDI Data Learning Materials:
Forschungsdatenmanagement _–_ eine Online-Einführung (Version 1.0). Zenodo. [https://zenodo.org/records/6373596#.Y9Jfo4fMJPZ](https://zenodo.org/records/6373596#.Y9Jfo4fMJPZ)

VerbundFDB. (2018, 20. Juli). Daten benennen und organisieren. Zugriff am 18.10.2023, von
[https://www.forschungsdaten-bildung.de/dateien-benennen](https://www.forschungsdaten-bildung.de/dateien-benennen)

Weiner, Barbara, Wünsche, Stephan, Kühne, Stefan, Voigt, Pia, Frericks, Sebastian, Hoffmann,
Clemens, Elze, Romy, & Gey, Ronny. (2020, April 30). Crashkurs Forschungsdatenmanagement. Zenodo. [https://doi.org/10.5281/zenodo](https://doi.org/10.5281/zenodo)

World Wide Web Consortium (W3C). (2007, 4. Juli). Datumsformate (S. Herkert, Übers.). W3C.org. Abgerufen am 21. Oktober 2023, von [https://www.w3.org/International/questions/qa-date-format.de](https://www.w3.org/International/questions/qa-date-format.de)
