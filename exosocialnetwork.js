$(document).ready(function(){

  var connexion = $("#connect")
  var inscription = $("#firsttry")
  var email = $("#email").val()
  var mdp = $("#mdp").val()
  var pasla = $("#pasla")

  connexion.click(function(event){
    event.preventDefault()

    if (localStorage.getItem("email") === email && localStorage.getItem("mdp") === mdp)
    {}
    else {alert("Connexion impossible, veuillez vérifier les champs ou vous inscrire")}
    })

    inscription.click(function(){

      pasla.toggle()

      if (localStorage.getItem("email") != email.val() && localStorage.getItem("mdp") != mdp.val())
      {pasla.toggle()}
    })
})
