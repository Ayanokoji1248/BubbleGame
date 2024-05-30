var hit=0;
var score=0;
// var btm=document.getElementById("bottom");
var ran_num=Math.floor(Math.random()*10);

document.getElementById("hitCount").textContent=ran_num;

function makeBubble(){
    var bubbles="";
    for(var i=1; i<=180; i++){
        var rn=Math.floor(Math.random()*9)+1;
        bubbles+=`<div class="bubble">${rn}</div>`
    }
    
    document.getElementById("bottom").innerHTML=bubbles;
}

var timer=60;
function runTimer(){
    var timeint=setInterval(function(){
        if(timer>0){
            timer--;
            document.getElementById("time").textContent=timer;
        }
        else{
            clearInterval(timeint);
            document.getElementById("bottom").innerHTML="";
            let heading=document.createElement("h1");
            heading.style.color="blue";
            heading.style.fontSize="50px";
            heading.innerHTML=`Game Over!<br>Your Score ${score}`
            document.getElementById("bottom").appendChild(heading);
        }
    },1000)
}

function makeHit(){
    document.getElementById("bottom").addEventListener("click", (e)=>{
        // console.log(e.target.innerText);
        // console.log(ran_num);
        if(e.target.classList.contains("bubble")){

            if(ran_num === Number(e.target.innerText)){
                console.log("correct");
                score+=10;
                document.getElementById("score").innerText=score;
            }
            ran_num=Math.floor(Math.random()*9)+1
            
            document.getElementById("hitCount").innerText=ran_num;
            
            document.getElementById("bottom").innerHTML="";
            makeBubble();
        }
    });
}





makeBubble()
runTimer()
makeHit()