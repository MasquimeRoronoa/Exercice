var nombre = document.getElemenById("nombre"),
    texte = document.getElementById("texte"),
    nombrerep = document.getElementById("nombrerep"),
    texterep = document.getElementById("texterep"),
    submit = document.getElementById("submitbtn"),
    formu = document.getElementsByName("formulaire")[0];


envoyer function (){
  window.location.replace("exo5page2.html")
}

submit.addEventListener("submit", function (event){
 var monurl = "exo5page2.html?nombre="nombre.value+"&texte="texte.value
 window.lacoation.href = encodeURI(monurl)
})
