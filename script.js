var isStop =true;
var s=0;
var min=0;
var har=0;
var boy = document.querySelector("#boy")

function start(){
    if(isStop == true){
        isStop = false;
        third();
    }
}

function third(){
    if(isStop == false){

        s=parseInt(s)
        min=parseInt(min)
        har=parseInt(har)

        s++;
         if(s == 60){
            s =0;
            min++;
         }
         if(min == 60){
            min = 0;
            har++;
         }
         if(s<10){
            s= "0" + s;
         }
         if(min<10){
            min= "0" + min
         }
        
        boy.innerHTML = har + " : " + min + " : "  +  s ; 
        setTimeout(third,1000);
    }
}
function stop(){
    if(isStop == false){
        isStop = true
    }
}
function restart(){
    if(isStop == false){
        isStop=true
        s=0;
        min=0;
        har=0;

        boy.innerHTML = " 00 : 00 : 00 "
    }
}