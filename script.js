// =============================
// Background Slideshow
// =============================

const slideshow = document.querySelector(".slideshow");
const music = document.getElementById("music");

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];

let current = 0;

function changeBackground(){

    slideshow.style.backgroundImage =
    `url("${images[current]}")`;

    current++;

    if(current >= images.length){
        current = 0;
    }

}

changeBackground();

setInterval(changeBackground,5000);


// =============================
// Start Button
// =============================

startBtn.addEventListener("click", async () => {

    try{
        await music.play();
    }catch(e){
        console.log(e);
    }

    startScreen.style.display = "none";

});


// =============================
// Hearts
// =============================

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML = "💖";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(18+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,350);


// =============================
// Balloons
// =============================

const balloons=document.getElementById("balloons");

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.innerHTML = "🎈";

    balloon.style.left=Math.random()*100+"%";

    balloon.style.fontSize=(40+Math.random()*25)+"px";

    balloon.style.animationDuration=(8+Math.random()*4)+"s";

    balloons.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },12000);

}

setInterval(createBalloon,1200);


// =============================
// Sparkles
// =============================

const sparkles=document.getElementById("sparkles");

function createSparkle(){

    const star=document.createElement("div");

    star.className="sparkle";

    star.innerHTML = "✨";

    star.style.left=Math.random()*100+"%";

    star.style.fontSize=(15+Math.random()*15)+"px";

    star.style.animationDuration=(3+Math.random()*3)+"s";

    sparkles.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },6000);

}

setInterval(createSparkle,250);


// =============================
// Celebrate Button
// =============================

const celebrate=document.getElementById("celebrate");

celebrate.addEventListener("click",()=>{

    const list = ["🎊","🎉","💖","✨","🎈"];

    for(let i=0;i<150;i++){

        const item=document.createElement("div");

        item.className="confetti";

        item.innerHTML=list[Math.floor(Math.random()*list.length)];

        item.style.left=Math.random()*100+"%";

        item.style.fontSize=(15+Math.random()*20)+"px";

        item.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(item);

        setTimeout(()=>{
            item.remove();
        },6000);

    }

});


// =============================
// Gift Popup
// =============================

const gift=document.getElementById("gift");

const popup=document.getElementById("popup");

const typing=document.getElementById("typing");

const message = `Happy Birthday, Eti! 🎉🎂

May Allah always keep you happy, healthy, and blessed. I pray that, little by little, all your dreams and wishes come true.

Stay happy, keep smiling, and enjoy your special day. Wishing you lots of love and best wishes. ❤️🎁

With Love ❤️

Your Brother
Shahriar`;

gift.onclick=()=>{

    popup.style.display="flex";

    typing.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        typing.innerHTML+=message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(timer);

        }

    },40);

}

function closePopup(){

    popup.style.display="none";

}
