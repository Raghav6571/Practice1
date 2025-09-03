var timeleft = 0
var flag = true 
document.querySelector(".button2").addEventListener("click" , function (event) {
            
        if(timeleft > 0) {
        // console.log(timeleft)
        timeleft--;
        document.querySelector("h2").innerHTML = timeleft;  
        }
        
        
})

document.querySelector(".button1").addEventListener("click" , function() {
           
        if(flag) {
        // console.log(timeleft);
        timeleft++;
        document.querySelector("h2").innerHTML = timeleft;
        }
})

document.querySelector(".button3").addEventListener("click", function(){
        
        for(var i=timeleft; i > 0; i--){
           
            setTimeout(function () {
            if(timeleft > 0)
        {
                timeleft--;       }
            document.querySelector("h2").innerHTML = timeleft;
            },i* 200);
        }
    
})
function arr () {

}