$(document).ready(function(){

    var on = $("#allume")
    var offe = $("#eteins")
    {offe.hide()}


    on.click(function(){
      if (on = on.show())
      {on.hide()
      offe.show()
      localStorage.setItem("ampoule", "allumer")}
      })


      offe.click(function(){
        if (offe = offe.show())
          offe.hide()
          on.show()
          localStorage.setItem("ampoule", "eteins")
      })
})
