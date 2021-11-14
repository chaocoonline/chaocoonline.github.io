var buttonchaoco = document.getElementById("buttonchaoco");
buttonchaoco.addEventListener("click", function() {
    document.getElementById("flag").style.marginTop = "55px";
    var trong = document.getElementById("trong");
    quocca.pause()
    trong.play();
    
      
}
 
)

var buttonquocca = document.getElementById("buttonquocca");
buttonquocca.addEventListener("click", function(){
    var quocca = document.getElementById("quocca");
    var trong = document.getElementById("trong");
    trong.pause()
    quocca.play();
})

var buttonstop = document.getElementById("buttonstop");
buttonquocca.addEventListener("click", function(){
    var quocca = document.getElementById("quocca");
    var trong = document.getElementById("trong");
    trong.stop()
    quocca.stop();
})