$(document).ready(function(){
  console.log("Coucou")

  var clic = $("#clic").click(function(){
    console.log("Mon Clic")
  })

  var envoyer = $("#envoyer").submit(function(event){
    event.preventDefault()
    alert("Impossible d'envoyer le formulaire")

  })

  var keylog = $("#formu")

  keylog.focus(function(){
    var str = ""

    keylog.keydown(function(event){
      mdp = str += event.key
      console.log(mdp)
    })

  })
})
