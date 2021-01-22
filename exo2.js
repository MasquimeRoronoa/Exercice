var btn = document.getElementById("afficher");
var btn1 = document.getElementById("cacher");
var survol = document.getElementById("survol");
var timer = document.getElementById("timer");

btn.addEventListener("click", function () {

    var postit = document.getElementById("postIt").style.visibility = "visible";

    console.log(postIt);

    document.getElementById("postIt").innerHTML = "Vous avez cliqué sur le bouton 'Afficher' !";
    console.log(postIt);

})

btn1.addEventListener("click", function () {

    var postit = document.getElementById("postIt").style.visibility = "hidden";
    console.log(postIt);

})

survol.addEventListener("mouseover", function () {

    survol = document.getElementById("postIt").stylevisibility = "visible";
    console.log("postIt");
    survol = document.getElementById("postIt").innerHTML = " C’est gentil de me survoler..."

})

survol.addEventListener("mouseout", function () {

    var postit = document.getElementById("postIt")
    survol = document.getElementById("postIt").style.visibility = "hidden";
    console.log("postIt");

})
