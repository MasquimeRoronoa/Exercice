var eclair = document.getElementById('atk1pika'),
    tonerre = document.getElementById('atk2pika'),
    surf = document.getElementById('atk3pika'),
    seisme = document.getElementById('atk4pika'),
    charge = document.getElementById('atk1rata'),
    rugissement = document.getElementById('atk2rata'),
    healthpika = document.getElementById("healthp"),
    healthrata = document.getElementById("healthr"),
    defeat = document.getElementById("rata"),
    boxdialrata = document.getElementById("boxdialoguerata"),
    boxdialpika = document.getElementById("boxdialoguepika");


var monpokemon = {
  nom : "pikachu",
  niveau: 12,
  pvMax: 100,
  pvActuel: 100,
  sesAttaques: ["Eclair", "Tonerre", "Surf", "Seisme"],
  attaques : [
    {
        nom:"Eclair" ,
        puissance : 40,
        type : "eclair",
        ppMax : 10,
        ppActuel : 10
    },
    {
      nom:"Tonerre" ,
      puissance : 60,
      type : "eclair",
      ppMax : 15,
      ppActuel : 15
    },
    {
      nom:"Surf" ,
      puissance : 50,
      type : "eau",
      ppMax : 10,
      ppActuel : 10
    },
    {
      nom :"Seisme" ,
      puissance : 70,
      type : "sol",
      ppMax : 10,
      ppActuel : 10
    },
  ],

  statut : "aucun",
  Dresseur : "Maskime",
  Ko : "false",
  type : "electrique",


}

var autrepokemon = {
  nom : "rattata",
  niveau: 10,
  pvMax: 100,
  pvActuel: 100,
  sesAttaques: ["Charge", "Rugissement"],
  attaques : [
    {
        nom:"Charge" ,
        puissance : 30,
        type : "normal",
        ppMax : 10,
        ppActuel : 10
    },
    {
      nom:"Rugissement" ,
      puissance : 10,
      type : "normal",
      ppMax : 15,
      ppActuel : 15
    },
  ],

  statut : "aucun",
  Dresseur : "Sauvage",
  Ko : "false",
  type : "normal",


}


function ilattaque (i, monpokemon, autrepokemon, healthp){
  monpokemon.pvActuel = Math.max(monpokemon.pvActuel - autrepokemon.attaques[i].puissance,0)

  if (monpokemon.pvActuel == 0)
    {pika.style.visibility = "hidden"
    eclair.style.visibility = "hidden"
    tonerre.style.visibility = "hidden"
    surf.style.visibility = "hidden"
    seisme.style.visibility = "hidden"
    boxdialpika.style.visibility = "visible"
    boxdialpika.innerHTML = "Oups, Pikachu est mort !"}
    healthp.style.width = monpokemon.pvActuel + "%"}

function jattaque (i, monpokemon, autrepokemon, healthp){
  autrepokemon.pvActuel = Math.max(autrepokemon.pvActuel - monpokemon.attaques[i].puissance,0)

  if (autrepokemon.pvActuel == 0)
    {rata.style.visibility = "hidden"
    charge.style.visibility = "hidden"
    rugissement.style.visibility = "hidden"
    boxdialrata.style.visibility = "visible"
    boxdialrata.innerHTML = "Félicitation, Rattata est K.O"}
    healthr.style.width = autrepokemon.pvActuel + "%"}


charge.addEventListener("click", function(){
  ilattaque(0, monpokemon, autrepokemon, healthpika)
})

rugissement.addEventListener("click", function(){
  ilattaque(1, monpokemon, autrepokemon, healthpika)
})

eclair.addEventListener("click", function(){
  jattaque(0, autrepokemon, monpokemon, healthrata)
})

tonerre.addEventListener("click", function(){
  jattaque(1, autrepokemon, monpokemon,  healthrata)
})

surf.addEventListener("click", function(){
  jattaque(2, autrepokemon, monpokemon,  healthrata)
})

seisme.addEventListener("click", function(){
  jattaque(3, autrepokemon, monpokemon,  healthrata)
})
