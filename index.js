let st=document.getElementById("start");
let ms=document.getElementById("ms");
let sec=document.getElementById("sec");
let min=document.getElementById("min");
let hr=document.getElementById("hr");
var minu=0;
var seco=0;
var hour=0;
var count=0;
var timer=false
function start(){
    timer=true
    stopwatch()
}
function stop(){
    timer=false
}
function reset(){
    timer=false
    count=0
    seco=0
    minu=0
    hour=0
    ms.innerHTML="00";
    sec.innerHTML="00";
    min.innerHTML="00";
    hr.innerHTML="00";

}
function stopwatch(){
    if(timer==true){
        count++;
        if(count<=9){
            ms.innerHTML="0"+count;
        }
        else 
             ms.innerHTML=count;
        
        
         if(count>=100){
            count=0
        }
        if(count%100==0){
            seco+=1;
            if(seco<=9){
                sec.innerHTML="0"+seco;
            }
            else{
                sec.innerHTML=seco;
            }
        }
        
        if(seco%60===0 && seco!=0){
            minu+=1;
            if(minu<=9){
                min.innerHTML="0"+minu;
            }else{
                min.innerHTML=minu;
            }
        }
        if(seco>=60){
            seco=0;
            sec.innerHTML="0"+seco;
        }
        if(minu%60==0 && minu!=0){
            hour+=1;
            hr.innerHTML++;
        }
        if(minu>=60){
            minu=0;
            min.innerHTML="0"+minu;
        }
        setTimeout("stopwatch()",10)
    }
}