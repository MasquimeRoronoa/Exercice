$(document).ready(function () {

    var envoyer = $("#envoyer")
    var lesutilisateurs
    var mdp = $("#mdp").val()
    var mail = $("#mail").val()
    var inscrit = $("#inscrit")

    inscrit.hide()

    if (!localStorage.getItem("Utilisateurs")) {
        lesutilisateurs = {"users": []}
    } else {
        lesutilisateurs = JSON.parse(localStorage.getItem("Utilisateurs"))
    }

    $("form").submit(function (event) {
        event.preventDefault()
        let x
        for (x in lesutilisateurs.users) {
            let actualUser = lesutilisateurs.users[x]
            if (actuelUser.mail === mail) {
                if (actuelUser.mdp === mdp) {

                }
            } else if (inscrit.show()) {

            }
        }


    })

})
