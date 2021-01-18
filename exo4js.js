var nom = document.getElementById("name"),
    prenom = document.getElementById("prenom"),
    date = document.getElementById("date"),
    btn = document.getElementById("controle"),
    text = document.getElementsByName("texte")[0];


btn.addEventListener("click", function (){

  var mastring = text.value.length

  if (mastring < 2){window.alert("Veuillez entrez des informations valides")}
  else {document.location="https://id-formation.com/"}
})
