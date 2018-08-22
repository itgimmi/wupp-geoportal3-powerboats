import React from "react";
import { Link } from "react-scroll";
import { Icon } from "react-fa";
import {
  Modal,
  Button,
  Accordion,
  Panel,
  FormGroup,
  Checkbox,
  Radio,
  ControlLabel,
  Label
} from "react-bootstrap";

// Since this component is simple and static, there's no parent container for it.
const KitasHelpTextPanel = () => {
  return (
    <div>
      <div>
        <Link
          to="Datengrundlage"
          containerId="myMenu"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Label bsStyle="warning">Datengrundlage</Label>{" "}
        </Link>
        <Link
          to="KartendarstellungPOI"
          containerId="myMenu"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Label bsStyle="warning">Kartendarstellung der POI</Label>{" "}
        </Link>
        <Link
          to="POIauswahluabfragen"
          containerId="myMenu"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Label bsStyle="default">POI auswählen und abfragen</Label>{" "}
        </Link>
        <Link
          to="InKartePositionieren"
          containerId="myMenu"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Label bsStyle="default">In Karte positionieren</Label>{" "}
        </Link>
        <Link
          to="MeinStandort"
          containerId="myMenu"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Label bsStyle="default">Mein Standort</Label>{" "}
        </Link>
        <Link
          to="MeinThemenstadtplan"
          containerId="myMenu"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Label bsStyle="primary">Mein Themenstadtplan</Label>{" "}
        </Link>
        <Link
          to="Einstellungen"
          containerId="myMenu"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Label bsStyle="success">Einstellungen</Label>{" "}
        </Link>
        <Link
          to="Personalisierung"
          containerId="myMenu"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Label bsStyle="success">Personalisierung</Label>{" "}
        </Link>
      </div>

      <div name="Datengrundlage">
        <br />
      </div>
      <h4>
        Datengrundlage{" "}
        <Link to="help" containerId="myMenu" style={{ color: "#00000044" }}>
          <Icon name="arrow-circle-up" />
        </Link>
      </h4>
      <p>
        Der Online-Stadtplan der Stadt Wuppertal basiert auf dem Stadtplanwerk
        2.0 des Regionalverbandes Ruhrgebiet. Dieses innovative Kartenwerk
        kombiniert das Straßennetz der OpenStreetMap mit den Gebäuden und
        Flächennutzungen aus dem Fachverfahren ALKIS des Liegenschaftskatasters.
        Das Stadtplanwerk 2.0 wird wöchentlich in einem automatischen Prozess
        aktualisiert. Zusätzlich nutzt der Online-Stadtplan den Datensatz{" "}
        <a
          href="https://offenedaten-wuppertal.de/dataset/interessante-orte-wuppertal-poi"
          target="_opendata"
        >
          Interessante Orte Wuppertal (POI)
        </a>{" "}
        aus dem Open-Data-Angebot der Stadt Wuppertal.
      </p>

      <div name="KartendarstellungPOI">
        <br />
      </div>
      <h4>
        Kartendarstellung der POI{" "}
        <Link to="help" containerId="myMenu" style={{ color: "#00000044" }}>
          <Icon name="arrow-circle-up" />
        </Link>
      </h4>
      <p>
        Jeder POI (Point of Interest, „Interessanter Ort“) ist einem oder
        mehreren übergeordneten Themenfeldern wie z. B. „<em>Freizeit</em>“ oder
        „<em>Erholung</em>“ zugeordnet. Die Hintergrundfarben der POI-Symbole
        stehen jeweils für eine eindeutige Kombination dieser Themenfelder, z.
        B. Hellgrün für „<em>Freizeit, Erholung</em>
        “.
      </p>
      <p>
        Räumlich nah beieinander liegende Angebote werden standardmäßig
        maßstabsabhängig zu größeren Punkten zusammengefasst, mit der Anzahl der
        repräsentierten POI im Zentrum{" "}
        <img alt="Cluster" src="images/poi_zusammen.png" />. Vergrößern Sie ein
        paar Mal durch direktes Anklicken eines solchen Punktes oder mit{" "}
        <Icon name="plus" /> die Darstellung, so werden die zusammengefassten
        POI Schritt für Schritt in die kleineren Symbole für die konkreten
        Einzel-POI zerlegt. Ab einer bestimmten Maßstabsstufe (Zoomstufe 12)
        führt ein weiterer Klick dazu, dass eine Explosionsgraphik der
        zusammengefassten POI angezeigt wird.
      </p>

      <div name="POIauswahluabfragen">
        <br />
      </div>
      <h4>
        POI auswählen und abfragen{" "}
        <Link to="help" containerId="myMenu" style={{ color: "#00000044" }}>
          <Icon name="arrow-circle-up" />
        </Link>
      </h4>
      <p>
        Bewegen Sie den Mauszeiger im Kartenfenster auf einen konkreten
        Einzel-POI, um sich seine Bezeichnung anzeigen zu lassen. Ein Klick auf
        das zugehörige POI-Symbol setzt den Fokus auf diesen POI. Er wird dann
        blau hinterlegt und die zugehörigen Informationen (Bezeichnung,
        Info-Text und ggf. Adresse) werden in der Info-Box (unten rechts)
        angezeigt. (Auf einem Tablet-PC wird der Fokus durch das erste Antippen
        des Angebots gesetzt, das zweite Antippen blendet die Bezeichnung ein.)
        Außerdem werden Ihnen in der Info-Box weiterführende (Kommunikations-)
        Links zum POI angezeigt: <Icon name="link" /> Internet,{" "}
        <Icon name="envelope-square" /> E-Mail und <Icon name="phone" />{" "}
        Telefon.
      </p>
      <p>
        Wenn Sie noch nicht aktiv einen bestimmten POI im aktuellen
        Kartenausschnitt selektiert haben, wird der Fokus automatisch auf den
        nördlichsten POI gesetzt. Mit den Funktionen{" "}
        <img alt="Cluster" src="images/vorher_treffer.png" /> vorheriger Treffer
        und <img alt="Cluster" src="images/nachher_treffer.png" /> nächster
        Treffer können Sie in nördlicher bzw. südlicher Richtung alle aktuell im
        Kartenfenster angezeigten POI durchmustern.
      </p>
      <p>
        Zu einigen POI bieten wir Ihnen Fotos oder Fotoserien des bekannten
        Wuppertaler Fotographen Peter Krämer an. Sie finden dann ein
        Vorschaubild direkt über der Info-Box. Klicken Sie auf das Vorschaubild,
        um einen Bildbetrachter ("Leuchtkasten") mit dem Foto&nbsp;/&nbsp;der
        Fotoserie zu öffnen. Aus dem Bildbetrachter gelangen Sie über einen Link
        im Fußbereich auch zur Foto-Anwendung von Peter Krämer.
      </p>

      <div name="InKartePositionieren">
        <br />
      </div>
      <h4>
        In Karte positionieren{" "}
        <Link to="help" containerId="myMenu" style={{ color: "#00000044" }}>
          <Icon name="arrow-circle-up" />
        </Link>
      </h4>
      <p>
        Um eine bestimmte Stelle des Stadtgebietes zu erkunden, geben Sie den
        Anfang eines Stadtteils (Stadtbezirk oder Quartier), einer Adresse,
        eines Straßennamens oder eines POI im Eingabefeld links unten ein
        (mindestens 2 Zeichen). In der inkrementellen Auswahlliste werden Ihnen
        passende Treffer angeboten. (Wenn Sie weitere Zeichen eingeben, wird der
        Inhalt der Auswahlliste angepasst.) Durch das vorangestellte Symbol
        erkennen Sie, ob es sich dabei um einen <Icon name="circle" />{" "}
        Stadtbezirk, ein <Icon name="pie-chart" /> Quartier, eine{" "}
        <Icon name="home" /> Adresse, eine <Icon name="road" /> Straße ohne
        zugeordnete Hausnummern, einen <Icon name="tag" /> POI oder die{" "}
        <Icon name="tags" /> alternative Bezeichnung eines POI handelt.
      </p>
      <p>
        Nach der Auswahl eines Treffers aus der Liste wird die Karte auf die
        zugehörige Position zentriert. Bei Suchbegriffen mit Punktgeometrie
        (Adresse, Straße, POI) wird außerdem ein großer Maßstab (Zoomstufe 14)
        eingestellt und ein Marker{" "}
        <img alt="Cluster" src="images/AdressMarker.jpg" /> auf der Zielposition
        platziert. Bei Suchbegriffen mit Flächengeometrie (Stadtbezirk,
        Quartier) wird der Maßstab so eingestellt, dass die Fläche vollständig
        dargestellt werden kann. Zusätzlich wird der Bereich außerhalb dieser
        Fläche abgedunkelt (Spotlight-Effekt).
      </p>
      <p>
        Durch Anklicken des Werkzeugs <Icon name="times" /> links neben dem
        Eingabefeld können Sie die Suche zurücksetzen (Entfernung von Marker
        bzw. Abdunklung, Löschen des Textes im Eingabefeld).
      </p>

      <div name="MeinStandort">
        <br />
      </div>
      <h4>
        Mein Standort{" "}
        <Link to="help" containerId="myMenu" style={{ color: "#00000044" }}>
          <Icon name="arrow-circle-up" />
        </Link>
      </h4>
      <p>
        Mit der Funktion „<em>Mein Standort</em>“ <Icon name="map-marker" />{" "}
        können Sie ihren aktuellen Standort mit einem blauen Kreissymbol{" "}
        <img alt="Cluster" src="images/MeinStandpunktMarker.jpg" /> in der Karte
        anzeigen. Das Standortsymbol ist umgeben von einem zweiten Kreis mit
        transparenter, blauer Füllung, dessen Radius die Unsicherheit der
        Positionsbestimmung angibt{" "}
        <img alt="Cluster" src="images/MeinStandpunktMarkerDoppel.jpg" />. Die
        Richtigkeit der Positionsanzeige ist dabei nicht garantiert, ihre
        Genauigkeit hängt davon ab, mit welcher Methode Ihr Endgerät und der von
        Ihnen verwendete Browser die Position bestimmen. Smartphones und
        Tablet-PC's sind i. d. R. mit einer GPS-Antenne ausgestattet, so dass
        Sie bei diesen Geräten eine Positionsgenauigkeit in der Größenordnung
        von 10 Metern erwarten können. Die Markierung Ihrer Position wird
        laufend automatisch aktualisiert. Ein weiterer Klick auf „
        <em>Mein Standort</em>“ schaltet die Anzeige Ihrer Position wieder ab.
      </p>

      <div name="MeinThemenstadtplan">
        <br />
      </div>
      <h4>
        Mein Themenstadtplan{" "}
        <Link to="help" containerId="myMenu" style={{ color: "#00000044" }}>
          <Icon name="arrow-circle-up" />
        </Link>
      </h4>
      <p>
        Unter „<em>Mein Themenstadtplan</em>“ können Sie im Anwendungsmenü{" "}
        <Icon name="bars" /> auswählen, welche POI-Kategorien in der Karte
        dargestellt werden. Über die Schaltfläche{" "}
        <img alt="Cluster" src="images/sf_keinethemenausw.png" /> können Sie die
        POI vollständig ausblenden - auch die Info-Box wird dann nicht mehr
        angezeigt.
      </p>
      <p>
        Zur Filterung der POI-Kategorien bieten wir Ihnen die oben beschriebenen
        Themenfelder an. Wählen Sie z. B. mit <Icon name="thumbs-up" />{" "}
        ausschließlich das Thema „Kultur“ aus. Als Vorschau wird Ihnen ein
        Tortendiagramm angezeigt, das die Anzahl der zugehörigen POI und deren
        Verteilung auf die Themen-Kombinationen (hier „
        <em>Kultur, Gesellschaft</em>“ und „<em>Kultur, Freizeit</em>
        “) anzeigt. Bewegen Sie dazu den Mauszeiger auf eines der farbigen
        Segmente des Tortendiagramms. (Bei einem Gerät mit Touchscreen tippen
        Sie auf eines der farbigen Segmente.)
      </p>
      <p>
        Mit <Icon name="thumbs-down" /> können Sie die POI, die dem
        entsprechenden Thema zugeordnet sind, ausblenden und dadurch die
        Treffermenge reduzieren. Schließen Sie jetzt z. B. das Thema „
        <em>Gesellschaft</em>“ aus. Im Tortendiagramm werden Ihnen dann nur noch
        die POI mit der Themen-Kombination „<em>Kultur, Freizeit</em>“ angezeigt
        (Theater, Museen etc.). Die POI mit der Kombination „
        <em>Kultur, Gesellschaft</em>“ (Standorte von Verlagen und anderen
        Medienunternehmungen) wurden dagegen entfernt.
      </p>

      <div name="Einstellungen">
        <br />
      </div>
      <h4>
        Einstellungen{" "}
        <Link to="help" containerId="myMenu" style={{ color: "#00000044" }}>
          <Icon name="arrow-circle-up" />
        </Link>
      </h4>
      <p>
        Unter Einstellungen können Sie im Anwendungsmenü <Icon name="bars" />{" "}
        festlegen, wie die POI und die Hintergrundkarte angezeigt werden sollen.
        Zu den POI können Sie auswählen, ob Ihre unter „
        <em>Mein Themenstadtplan</em>“ festgelegte Lebenslagen-Filterung in
        einer Titelzeile ausgeprägt wird oder nicht. Weiter können Sie
        festlegen, ob räumlich nah beieinander liegende POI maßstabsabhängig zu
        einem Punktsymbol zusammengefasst werden oder nicht. Unter Symbolgröße
        können Sie in Abhängigkeit von Ihrer Bildschirmauflösung und Ihrem
        Sehvermögen auswählen, ob die POI mit kleinen (25 Pixel), mittleren (35
        Pixel) oder großen (45 Pixel) Symbolen angezeigt werden.
      </p>
      <p>
        Unter Kartendarstellung können Sie auswählen, ob Sie die standardmäßig
        aktivierte farbige Hintergrundkarte verwenden möchten („Tag“) oder
        lieber eine invertierte Graustufenkarte („Nacht“), zu der uns die von
        vielen PKW-Navis bei Dunkelheit eingesetzte Darstellungsweise inspiriert
        hat.
      </p>
      <p>
        Die Nacht-Karte erzeugt einen deutlicheren Kontrast mit den farbigen
        POI-Symbolen, die unterschiedlichen Flächennutzungen lassen sich aber
        nicht so gut unterscheiden wie in der Tag-Karte.
      </p>
      <p>
        Im Vorschaubild sehen Sie (mit Ausnahme der Symbolgröße) direkt die
        prinzipielle Wirkung ihrer Einstellungen.
      </p>

      <div name="Personalisierung">
        <br />
      </div>
      <h4>
        Personalisierung{" "}
        <Link to="help" containerId="myMenu" style={{ color: "#00000044" }}>
          <Icon name="arrow-circle-up" />
        </Link>
      </h4>
      <p>
        Ihre Themenauswahl und Einstellungen bleiben auch nach einem Neustart
        der Anwendung erhalten. (Es sei denn, Sie löschen den Browser-Verlauf
        einschließlich der gehosteten App-Daten.) Damit können Sie mit wenigen
        Klicks aus unserem Online-Stadtplan einen dauerhaft für Sie optimierten
        Themenstadtplan machen.
      </p>
    </div>
  );
};

export default KitasHelpTextPanel;