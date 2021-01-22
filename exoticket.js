$(document).ready(function(){


  $("#form").submit(function(event){
    event.preventDefault()

var texte = $("#texte").val()
var price = $("#price").val()
var quanti = $("#quant").val()

  if (texte == "")
    {alert("Veuillez remplir le champ : Nom")}

  if (quanti == "")
      {alert("Veuillez remplir le champ : Quantité")}

  if(price == ""){
    alert("Veuillez remplir le champ : Prix")}

    console.log(texte)
    console.log(price)
    console.log(quanti)

  })

})
