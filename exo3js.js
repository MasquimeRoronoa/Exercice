var debut = document.getElementById("start"),
pause = document.getElementById("pause"),
fin = document.getElementById("stop"),
timer = document.getElementById("timer");

var startTime = new Date();
decompte = setInterval(function() {
// 1- Convertir en secondes :
var seconds = Math.round(
(new Date().getTime() - startTime.getTime()) / 1000
+ e.target.paramTps); // e représente l'event déclencheur
// e.target représente l'objet déclencheur
// ici : bouton start ou bouton pause
// (cette prop a été ajoutée aux boutons)
// 2- Extraire les heures:
var hours = parseInt( seconds / 3600 );
seconds = seconds % 3600; // secondes restantes
// 3- Extraire les minutes:
var minutes = parseInt( seconds / 60 );
seconds = seconds % 60; // secondes restantes
// 4- afficher dans le span
timer.innerHTML = ajouteUnZero(hours)
+":"+ajouteUnZero(minutes)
+":"+ajouteUnZero(seconds);
// 5- incrémenter le nombre de secondes
tpsEcoule += 1;
paramTps;
}, 1000);



pause.style.display = "none"
fin.style.display = "none"

function seeit (element){
  element.style.display = "inline-block"
}

function stopit (element){
  element.style.display = "none"
}

function tryagain (element) {
  if (element.value == "Pause"){
    element.value = "Reprendre"}
  else {element.value = "Pause"}
}

window.addEventListener("load", function(){

  timer.innerHTML = "00.00.00"
})

debut.addEventListener("click", function(){
  seeit(pause)
    seeit(fin)
    debut.style.display = "none"
})

fin.addEventListener("click", function(){
  seeit(debut)
  stopit(pause)
  stopit(fin)
})

pause.addEventListener ("click", function(){
  tryagain(pause)

})
