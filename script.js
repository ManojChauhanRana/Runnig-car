var audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop = true;
var audio3 = document.createElement('audio');
audio3.setAttribute('src','BackgroundMusic.mp3');
audio3.loop = true;
audio3.pause();
var audio2 = document.createElement('audio');
audio2.setAttribute('src','policeSiren.mp3');
audio2.loop = true;
var audio4 = document.createElement('audio');
audio4.setAttribute('src','horn.wav');
audio4.loop = false;
var brake=document.getElementById('brake');
var car=document.getElementById('car');
var body=document.getElementById('body');
var wheel1=document.getElementById('wheel1');
var wheel2=document.getElementById('wheel2');
var race=document.getElementById('race');
var brid=document.getElementById("brid");
var car2=document.getElementById('car2');
var carp=document.getElementById('carp');
var carp2=document.getElementById('carp2');
var car3=document.getElementById('car3');
var wheel11=document.getElementById('wheel11');
var wheel12=document.getElementById('wheel12');
var wheelp1=document.getElementById('wheelp1');
var wheelp2=document.getElementById('wheelp2');
var wheelp21=document.getElementById('wheelp21');
var wheelp22=document.getElementById('wheelp22');
var wheel31=document.getElementById('wheel31');
var wheel32=document.getElementById('wheel32');
var gear1=document.getElementById("gear1");
var gear2=document.getElementById("gear2");
var gear3=document.getElementById("gear3");
var gear4=document.getElementById("gear4");
var gearB=document.getElementById("gearB");
var gearN=document.getElementById("gearN");
var intervel; 

brake.addEventListener('click',()=>{
 car.style.animationPlayState="paused";
race.style.animationPlayState="paused";
brake.style.animationPlayState="paused";
body.style.animationPlayState="paused";
wheel1.style.animationPlayState="paused"; 
wheel2.style.animationPlayState="paused" ;
wheelp21.style.animationPlayState="paused"; 
wheelp22.style.animationPlayState="paused" ;
clearInterval(intervel);
audio.pause(); 
 })
 race.addEventListener('click',function(){
    gearN.style.backgroundColor="white";
    car.style.animationPlayState="running";
    race.style.animationPlayState="running";
    brake.style.animationPlayState="running";
    body.style.animationPlayState="running";
    wheel1.style.animationPlayState="running"; 
    wheel2.style.animationPlayState="running" ;
    carp.style.animationPlayState="running" ;
    wheelp1.style.animationPlayState="running" ;
    wheelp2.style.animationPlayState="running" ;
    car2.style.animationPlayState="running" ;
    wheel11.style.animationPlayState="running" ;
    wheel12.style.animationPlayState="running" ;
    wheelp21.style.animationPlayState="running"; 
    wheelp22.style.animationPlayState="running" ;
    race.style.fontSize="20px";
    var check = sound.style.color;
    if(check=="blue")
     audio.play();
     interval = setInterval(incrementScore, 1000);
    removefollowcar();
     })
  
   gear1.addEventListener('click',()=>{
    gear1.style.backgroundColor="rgba(158, 214, 27, 0.877)";
    gear2.style.backgroundColor="white";
    gear3.style.backgroundColor="white";
    gear4.style.backgroundColor="white";
    gearB.style.backgroundColor="white";
    gearN.style.backgroundColor="white";
    car.style.animationDuration="60s";
    body.style.animationDuration="60s";
    wheel1.style.animationDuration=".3s";
    wheel2.style.animationDuration=".3s";
    clearInterval(interval);
    interval = setInterval(incrementScore, 800);

   })
   gear2.addEventListener('click',()=>{
    gear2.style.backgroundColor="yellow";
    gear1.style.backgroundColor="white";
    gear3.style.backgroundColor="white";
    gear4.style.backgroundColor="white";
    gearB.style.backgroundColor="white";
    gearN.style.backgroundColor="white";
    car.style.animationDuration="50s";
    body.style.animationDuration="50s";
    wheel1.style.animationDuration=".3s";
    wheel2.style.animationDuration=".3s";
    clearInterval(interval);
    interval = setInterval(incrementScore, 400);

   })
   gear3.addEventListener('click',()=>{
    gear3.style.backgroundColor="orange";
    gear2.style.backgroundColor="white";
    gear1.style.backgroundColor="white";
    gear4.style.backgroundColor="white";
    gearB.style.backgroundColor="white";
    gearN.style.backgroundColor="white";
    car.style.animationDuration="30s";
    body.style.animationDuration="30s";
    wheel1.style.animationDuration=".2s";
    wheel2.style.animationDuration=".2s";
    clearInterval(interval);
    interval = setInterval(incrementScore, 100);

    
   })
   gear4.addEventListener('click',()=>{
    gear4.style.backgroundColor="red";
    gear2.style.backgroundColor="white";
    gear3.style.backgroundColor="white";
    gear1.style.backgroundColor="white";
    gearB.style.backgroundColor="white";
    gearN.style.backgroundColor="white";
    car.style.animationDuration="10s";
    body.style.animationDuration="10s";
    wheel1.style.animationDuration=".1s";
    wheel2.style.animationDuration=".1s";
    clearInterval(interval);
    interval = setInterval(incrementScore, 50);

   })
  gearB.addEventListener('click',()=>{
    gearB.style.backgroundColor="blue";
    gear4.style.backgroundColor="white";
    gearN.style.backgroundColor="white";
    gear2.style.backgroundColor="white";
    gear3.style.backgroundColor="white";
    gear1.style.backgroundColor="white";
   car.style.animationDirection="reverse"
    body.style.animationDirection="reverse";
    wheel1.style.animationDirection="reverse"
    wheel2.style.animationDirection="reverse";

   })
   gearN.addEventListener('click',()=>{
    gear4.style.backgroundColor="white";
    gear2.style.backgroundColor="white";
    gearB.style.backgroundColor="white";
    gearN.style.backgroundColor="blue";
    gear3.style.backgroundColor="white";
    gear1.style.backgroundColor="white";
    car.style.animationDirection="normal"
    body.style.animationDirection="normal";
    car.style.animationPlayState="paused"
    body.style.animationPlayState="paused"
    wheel1.style.animationPlayState="paused"; 
    wheel2.style.animationPlayState="paused" ;
    car.style.animationDuration="50s";
    body.style.animationDuration="50s";
    clearInterval(interval);
    
   })
 function green(){
     
       var green=document.getElementById("greenLight");
       green.style.backgroundColor="#00ff54";
       green.style.boxShadow = "0px 0px 10px #00ff54,0px 0px 10px #00ff54";
       var red=document.getElementById("redLight");
       red.style.backgroundColor="#000";
       red.style.boxShadow = "none";
       carp.style.animationPlayState="running";
       wheelp1.style.animationPlayState="running";
       wheelp2.style.animationPlayState="running";
       car2.style.animationPlayState="running";
       wheel11.style.animationPlayState="running";
       wheel12.style.animationPlayState="running";
       car3.style.animationPlayState="running";
       wheel31.style.animationPlayState="running";
       wheel32.style.animationPlayState="running";
       setTimeout(orange,5000); 
 } 
 function orange(){
  var green=document.getElementById("greenLight");
  green.style.backgroundColor="#000";
       green.style.boxShadow = "none";
  var orange=document.getElementById("orangeLight");
  orange.style.backgroundColor="orange";
  orange.style.boxShadow = "0px 0px 10px orange,0px 0px 10px orangered";
  setTimeout(red,5000);
} 
function red(){
  var orange=document.getElementById("orangeLight");
  orange.style.boxShadow = "none";
  orange.style.backgroundColor="#000";
  var red=document.getElementById("redLight");
  red.style.backgroundColor="red";
  red.style.boxShadow = "0px 0px 10px red,0px 0px 10px red";
  carp.style.animationPlayState="paused";
  wheelp1.style.animationPlayState="paused";
  wheelp2.style.animationPlayState="paused";
  car2.style.animationPlayState="paused";
  wheel11.style.animationPlayState="paused";
  wheel12.style.animationPlayState="paused";
  car3.style.animationPlayState="paused";
  wheel31.style.animationPlayState="paused";
  wheel32.style.animationPlayState="paused";
   setTimeout(green,5000)
} 
green();





function followCar(){
  var playState = car.style.animationPlayState;
  console.log(playState);
  if(playState=="running")
  {
  carp2.style.display="block";
  carp2.style.animationFillMode="forwards";
  document.getElementById("siren2")
 
  audio2.play();
 setTimeout(removefollowcar,10000);
  }
}

function removefollowcar(){
  carp2.style.display="none";
  carp2.style.animationFillMode="forwards";
  document.getElementById("siren2")
 
  audio2.pause();
  setTimeout(followCar,20000);
}

var music= document.getElementById("music");
music.addEventListener('click',()=>{
  if(audio3.paused||audio3.currentTime<=0){
      audio3.play();
      music.style.color="blue";
  }
  else 
  {
      audio3.pause();
      music.style.color="white";
  }
})

var sound= document.getElementById("sound");
sound.addEventListener('click',()=>{
  if(audio.paused||audio3.currentTime<=0){
      audio.play();
      sound.style.color="blue";
  }
  else 
  {
      audio.pause();
      sound.style.color="white";
  }
})

var horn= document.getElementById("horn");
horn.addEventListener('click',()=>{
  horn.style.backgroundColor="red"; 
 setTimeout(colorChange,100);
 audio4.play();
})
function colorChange(){
  horn.style.backgroundColor="white";
}

var score = 0;
var interval;


 

function incrementScore() {
  score++;
  document.getElementById('score').textContent = score;
  localStorage.setItem('scoreValue', score);
}


setTimeout(function() {
  window.location.href = 'end.html';
}, 80000);


