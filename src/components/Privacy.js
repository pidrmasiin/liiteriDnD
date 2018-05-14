import React from 'react'
 
export default class Privacy extends React.Component {
 
    componentDidMount = () => {
        setTimeout(() => {
            window.location.assign('/info')
           }, 50000);
    }
 
    render() {
 
        return (
            <div>
	<h3><b>Tietosuojaseloste</b><b><br/>
</b><b><br/>
</b><b>Rekisterinpitäjä</b></h3>
<p>Liiteri verkkopalvelu: CoReorient Oy<br/>
www.coreorient.com<br/>
info@coreorient.com</p>
<h3><b>Yhteyshenkilö rekisteriä koskevissa asioissa</b></h3>
<p>Harri paloheimo<br/>
Heinjoenpolku 3 A 7<br/>
02140 Espoo<br/>
harri.paloheimo@coreorient.com</p>
<h3><b>Rekisterin nimi</b></h3>
<p>Liiteri-palvelun käyttäjärekisteri</p>
<h3><b>Henkilötietojen käsittelyn tarkoitus</b></h3>
<p>Tietoja kerätään, jotta palvelun käyttö ja yhteydenpito käyttäjien kanssa on mahdollista. Yhteydenpitoa voi tapahtua sekä palvelun ylläpitäjien ja käyttäjän välillä että suoraan käyttäjien välillä. Osa käyttäjän tiedoista on näkyvissä myös hänen profiilisivullaan palvelussa, mutta nimeä lukuunottamatta näiden tietojen antaminen palvelulle on vapaaehtoista.</p>
<p>Henkilötietojen käsittelyä ei ole ulkoistettu, mutta niiden tallentaminen tapahtuu ulkopuoliselta yritykseltä vuokratuille palvelimille.</p>
<h3><b>Rekisterin tietosisälto</b></h3>
<p>Rekisteriin voidaan tallentaa:</p>
<ul>
<li>Yksilöintitiedot: Nimi, sähköpostiosoite, puhelinnumero, katuosoite</li>
<li>Kirjautumistiedot: käyttäjätunnus, salasana (tallennetaan salattuna)</li>
<li>Käyttäjän itse kirjoittama kuvaus itsestään</li>
<li>Käyttäjän palveluun jättämät pyynnöt ja tarjoukset</li>
<li>Käyttäjän saamat ja antamat palautteet sekä ansiomerkit</li>
<li>Tilastotietoa palvelun käytöstä, esimerkiksi kirjautumisten lukumäärä</li>
</ul>
<h3><b>Säännönmukaiset tietolähteet</b></h3>
<p>Henkilötiedot ovat käyttäjän itsensä ilmoittamia, joko rekisteröitymisen yhteydessä tai palvelua myöhemmin käyttäessä.</p>
<h3><b>Tietojen säännönmukaiset luovutukset</b></h3>
<p>Tietoja voidaan luovuttaa tutkimuskäyttöön palvelun käyttöehdoissa kuvatulla tavalla. Käyttäjä antaa hyväksynnän tälle luovutukselle hyväksymällä <a href="https://palvelut.liiteri.net/fi/infos/terms">Käyttöehdot</a> aloittaessaan palvelun käytön. Tutkijoilla ei ole kuitenkaan lupaa julkaista tutkimustuloksissaan yksilöiviä henkilötietoja, joista yksittäiset käyttäjät olisi mahdollista tunnistaa.</p>
<p>Tietoja voidaan luovuttaa Liiterin yhteistyöorganisaatioiden edustajille palvelun kehitys- ja yhteistyömallien kehitystarkoituksiin. Tietojen luovutus saattaa sisältää yksilöityjen käyttäjien tietojen käsittelyä.</p>
<h3><b>Tietojen siirto EU:n tai ETA:n ulkopuolelle</b></h3>
<p>Tiedot voidaan tallentaa palvelimelle, joka voi sijaita EU:n ja ETA:n ulko- tai sisäpuolella.</p>
<h3><b>Rekisterin suojauksen periaatteet</b></h3>
<p>Tiedot tallennetaan tietokoneille. Ohjelmallinen pääsy niihin on rajattu salasanoilla ja fyysinen pääsy laitetilaan on rajattu palvelimet tarjoavan yrityksen toimesta.</p>
<h1> <a href='/info'>Takasin info -sivulle</a></h1>
<h1> <a href='/info'>Back to info -page</a></h1>
</div>

        )
    }
}