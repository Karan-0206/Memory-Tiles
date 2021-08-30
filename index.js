const cards=document.querySelectorAll('.flex-box-card');
const stopwatch=document.getElementById('timer');
let flipped=false;
let firstcard,secondcard;
let stop=false;
let c=0;
let sec=00;
let tens=00;
var appendtens=document.getElementById("tens");
var appendsec=document.getElementById("seconds");
let interval;

function flip(){
clearInterval(interval);
interval=setInterval(time,1000);
  if (stop){return ;}
  if(this===firstcard){return;}
  this.classList.add('flip');
  console.log(this);
  if(!flipped){
    flipped=true;
    firstcard=this;

  }
 else{
    flipped=false;
    secondcard=this;

timelapse();}
}
function timelapse(){
  if(firstcard.dataset.flex === secondcard.dataset.flex){
    firstcard.removeEventListener('click',flip);
    secondcard.removeEventListener('click',flip);
    c++;
    if(c===5){clearInterval(interval);


    }

  }
  else{
stop=true;
    setTimeout(() =>{
    firstcard.classList.remove('flip');
    secondcard.classList.remove('flip');
    reset();
  }, 1500);

}

}
function time(){
    tens++;
    if(tens<10){
      appendtens.innerHTML="0"+tens;
    }
    if(tens>=10){
      appendtens.innerHTML=tens;
    }
    if(tens==60){
      tens=0;
      sec++;
      if(sec<10){
        appendsec.innerHTML="0"+sec;}
      else{
        appendsec.innerHTML=sec;
      }
      }
    }



function reset(){
  [flipped,stop]=[false,false];
  [firstcard,secondcard]=[null,null];
}
(
  function shuffle(){
    cards.forEach(char => {let random=Math.floor(Math.random()*10) ;
    char.style.order=random;

    });

  }
)();


cards.forEach(char =>char .addEventListener('click',flip));
