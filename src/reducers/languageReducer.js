const english = {
  finnish: false,
  cyclist: "Hey, its nice to be a cyclist",
  fall: "Please, heal me with your gentle touch",
  cyclist2: "Hey, thanks a lot. You showed me that repairing is easy. Just use Liiteri",
  header: "Hassle-free repair @Liiteri. Liiteri.net provides repais services and houshold tools for rent.",
  info: "I am a magic box where broken bikes become fixed. Access me whenever you need. Just register with your email address and you will receive a unique code on your mobile. This magic password will let you inside. Your bike will be safe in gentle hands and we will repair it as soon as possible. We will reach out to you when the wounds of your beloved bike have been healed. BTW! I also contain a great selection of household tools that are in your service around the clock with 9,99€ monthly. Sounds cool? Go check more information on our website liiteri.net.",
  circle1: "Repair service that never closes",
  circle2: "Repair service easily accessible on your mobile",
  circle3: "Leaves us your worries and contact information and we will take care of the rest",
  move:  "With us you never stop moving. Continue your journey with an electric bike that youn cant rent from us.",
  congrats: "Congratulation you found the nearest repair shop. It's right in front of you!",
  help: "Help me!",
  drag: "Drag me to the closest LIITERI!"
}

const finnish = {
  finnish: true,
  cyclist: "Hei, pyöräily on mukavaa",
  fall: "Paranna minut ystävällisellä kosketuksellaS!",
  cyclist2: "Kiitos, kun näytit minulle, kuinka helppoa korjaaminen voi olla. Käytä vain Liiteriä!",
  header: "Helppoa huoltoa ja korjaamista. Liiteri.net tarjoaa korjaukset ja kodin työkalut palveluna.",
  info: "Hauska tavata! Olen korjauskontti, jonne voit tuoda esimerkiksi kunnostusta kaipaavan pyöräsi. Olen aina auki. Rekisteröidy vain sähköpostiosoitteellasi ja saat puhelimeesi koodin. Tällä taikasanalla avaan oveni ja voit jättää pyöräsi minun hellään huomaan. Korjaamme rakkaan pyöräsi mahdollisimman nopeasti ja lähetämme sinulle ilmoituksen kun pyöräsi haavat on parannettu. PSST! Sisältäni löytyy myös laaja valikoima kodin työkaluja, jotka voit saada käyttöösi vain 9,99 eurolla kuussa. Janoatko lisätietoa? Surffaa osoitteeseen liiteri.net?",
  circle1: " Autamme aina hädän hetkellä. Pääsy konttiin onnistuu kellon ympäri.",
  circle2: "Uuden sukupolven korjauspalvelu helposti ja nopeasti käsillä myös mobiilisti.",
  circle3: "Jätä sähköpostisi ja huolesi meille rekisteröityäksesi palveluun!",
  move: "Meidän kanssamme pysyt aina liikkeessä. Voit lainata kontista sähköpyörän!",
  congrats: "Jihuu löysit Liiterin!",
  help: "Voisitko auttaa!",
  drag: "Vedä minut lähimpään Liiteriin!"
}


const languageReducer = (store, action) => {
    if (action.type==='ENGLISH') {
      return english
    }if (action.type==='AFTER') {
      if(action.language){
        return finnish
      }
      return english
    }
    return finnish
  }
  
  export default languageReducer