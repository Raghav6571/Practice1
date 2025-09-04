var timeleft = 0
var flag = true 
$(".button2").click (function (event) {
            
        if(timeleft > 0) {
        // console.log(timeleft)
        timeleft--;
        $("h2").text(timeleft);  
        }
        
        
})

$(".button1").click (function() {
           
        if(flag) {
        // console.log(timeleft);
        timeleft++;
        $("h2").text(timeleft);
        }
})

$(".button3").click (function(){
        
        for(var i=timeleft; i > 0; i--){
           
            setTimeout(function () {
            if(timeleft > 0)
        {
                timeleft--;       }
            $("h2").text(timeleft);
            },i* 200);
        }
    
})
