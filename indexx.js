var timeleft = 0
var flag = true 
var time = 10
document.querySelector(".button2").addEventListener("click" , function (event) {
            
        if(timeleft >0) {
            timeleft--;
        if(timeleft >= 0) {
        // console.log(timeleft)
        document.querySelector("h2").innerHTML = timeleft;

            }
        }
        
})

document.querySelector(".button1").addEventListener("click" , function() {
           
        if(timeleft < time) {
            timeleft++;
        if(timeleft <= time) {
        // console.log(timeleft);
        document.querySelector("h2").innerHTML = timeleft;
        }
        }
})

document.querySelector(".button3").addEventListener("click", function(){
    if(timeleft === 0 || timeleft === 1) {
        
        for(var i=1; i <= 10; i++){
           
            setTimeout(function () {
            timeleft++;
            document.querySelector("h2").innerHTML = timeleft;
            },i* 200);
        }
    }
})