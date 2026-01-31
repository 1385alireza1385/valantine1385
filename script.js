const audio = document.getElementById("bgMusic");

const normalSongs = [
"music/All of ME.mp3",
"music/I Need Your Love.mp3"
];

const deepSong = "music/Eric Chiryoku - Forgiveness.mp3";

let songIndex = 0;


/* ===== TYPE WRITER ===== */

function typeWriter(element, text, speed = 30){
element.innerHTML="";
let i=0;

function typing(){
if(i<text.length){
element.innerHTML += text.charAt(i);
i++;
setTimeout(typing,speed);
}
}

typing();
}


/* ===== NORMAL MODE ===== */

function normalMode(){

document.body.classList.remove("deep-mode");

removeNightEffects();
startFlowerRain();
showLove();

audio.src = normalSongs[songIndex];
audio.play();

audio.onended=()=>{
songIndex=(songIndex+1)%normalSongs.length;
audio.src=normalSongs[songIndex];
audio.play();
}

}


/* ===== DEEP MODE ===== */

function deepMode(){

document.body.classList.add("deep-mode");

stopFlowerRain();
createFireflies();
createStars();
createMist();
createWaterReflection();

showDeepLove();

audio.onended=null;
audio.src=deepSong;
audio.play();

}


/* ===== متن طولانی مود اول ===== */

function showLove(){

const msg=document.getElementById("loveMessage");

msg.innerHTML=`
می‌دونی چرا کنارت حالم این‌همه خوبه؟<br>
چون وقتی با توام، لازم نیست نقش بازی کنم…<br>
خودمم، دقیقاً همونجوری که هستم 🤍<br><br>

شیطونم، می‌خندم، آروم می‌شم،<br>
یه وقتایی هم لج می‌کنم 😌<br>
ولی تو تنها کسی هستی که<br>
همه‌ی اینا رو بلدی و دوست داری…<br><br>

دخترِ من،<br>
بودنت امن‌ترین جای دنیاست برام 🤍<br>
جایی که دلم همیشه می‌خواد<br>
برگرده و بمونه…<br><br>

راستش رو بخوای،<br>
تو منو عوض کردی…<br>
فقط با دوست‌داشتنت.<br><br>
بعضی لحظه‌ها خیلی ساده‌ان…
اما وقتی با آدم خاصی تقسیم بشن،
می‌شن خاطره‌هایی که هیچ‌وقت پاک نمی‌شن 🤍

کنار کسی بودن که لبخندتو می‌شناسه،
یکی از قشنگ‌ترین اتفاق‌های زندگیه…

گاهی فقط بودنِ یک نفر،
کافیه تا دل آدم
آروم‌تر از همیشه بتپه ❤️

و قشنگ‌ترین قسمت ماجرا اینه که
بعضی آدم‌ها،
بی‌صدا وارد زندگی می‌شن
ولی عمیق‌ترین رد رو
روی قلب آدم می‌ذارن…
بعضی لحظه‌ها خیلی ساده‌ان…
اما وقتی با آدم خاصی تقسیم بشن،
می‌شن خاطره‌هایی که هیچ‌وقت پاک نمی‌شن 🤍

کنار کسی بودن که لبخندتو می‌شناسه،
یکی از قشنگ‌ترین اتفاق‌های زندگیه…

گاهی فقط بودنِ یک نفر،
کافیه تا دل آدم
آروم‌تر از همیشه بتپه ❤️

و قشنگ‌ترین قسمت ماجرا اینه که
بعضی آدم‌ها،
بی‌صدا وارد زندگی می‌شن
ولی عمیق‌ترین رد رو
روی قلب آدم می‌ذارن…


وقتی پیشتم دنیا آروم‌تر می‌شه ❤️
`;

msg.classList.add("show");
}


/* ===== متن طولانی مود شب ===== */

function showDeepLove(){

const msg=document.getElementById("loveMessage");

const text = `
می‌خوام یه چیزی رو آروم و واقعی بهت بگم…

تو فقط کسی نیستی که دوستش دارم،
تو کسی هستی که باهاش زندگی معنی پیدا می‌کنه 🤍

بعضی وقتا وسط شلوغی روز،
یهو یاد خنده‌ت می‌افتم
و بدون اینکه بفهمم چرا،
دلم آروم می‌شه…

تو بلدی منو،
بلدی کی قوی‌ام،
بلدی کی دلم می‌لرزه،
و قشنگ‌ترین قسمت ماجرا اینه
که بازم کنارمی…

کنار تو بودن یعنی
امنیت،
یعنی شیطنت‌های بی‌دلیل،
یعنی حرف‌هایی که فقط بین خودمونه 😌

من عاشق اینم که با تو
آینده رو تصور می‌کنم،
چون می‌دونم اگه تو باشی،
هر مسیری قابل رفتنه 🤍

دختر من،
تو انتخاب قلبمی،
نه از سر عادت،
از سر عشق…

و اگه هزار بار دیگه هم
فرصت انتخاب داشته باشم،
هر بار فقط تو ❤️
شب‌ها عجیب‌تر می‌شن
وقتی دل آدم
به یاد کسی گرم باشه…

بعضی حس‌ها
با صدا گفته نمی‌شن،
فقط توی سکوت شب
آروم توی قلب جا می‌گیرن 🤍

گاهی عشق،
نه در حرف‌ها،
بلکه در آرامشی که یک نفر
به زندگی میاره،
معنی پیدا می‌کنه…

و بعضی آدم‌ها
مثل نور ماه هستن،
شاید دور،
اما روشنایی‌شون
همیشه حس می‌شه…

`;

msg.classList.add("show");
typeWriter(msg,text);

}


/* ===== SLIDESHOW ===== */

let slides=document.querySelectorAll(".slide");
let slideIndex=0;

setInterval(()=>{
slides[slideIndex].classList.remove("active");
slideIndex=(slideIndex+1)%slides.length;
slides[slideIndex].classList.add("active");
},4000);


/* ===== FLOWER RAIN ===== */

const rain=document.getElementById("flowerRain");
const icons=["🌹","❤️","🌸"];
let rainInterval;

function startFlowerRain(){

rainInterval=setInterval(()=>{
const el=document.createElement("div");
el.className="flower";
el.innerText=icons[Math.floor(Math.random()*icons.length)];
el.style.left=Math.random()*100+"vw";
el.style.animationDuration=4+Math.random()*4+"s";
rain.appendChild(el);
setTimeout(()=>el.remove(),8000);
},350);

}

function stopFlowerRain(){
clearInterval(rainInterval);
}


/* ===== FIREFLIES ===== */

let fireflyInterval;

function createFireflies(){
fireflyInterval=setInterval(()=>{
const f=document.createElement("div");
f.className="firefly";
f.style.left=Math.random()*100+"vw";
f.style.top=Math.random()*100+"vh";
document.body.appendChild(f);
setTimeout(()=>f.remove(),6000);
},500);
}


/* ===== STARS ===== */

function createStars(){
for(let i=0;i<60;i++){
const star=document.createElement("div");
star.className="star";
star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";
document.body.appendChild(star);
}
}


/* ===== MIST ===== */

function createMist(){
const mist=document.createElement("div");
mist.className="mist";
document.body.appendChild(mist);
}


/* ===== WATER ===== */

function createWaterReflection(){
const water=document.createElement("div");
water.className="water-reflection";
document.body.appendChild(water);
}


/* ===== REMOVE NIGHT EFFECTS ===== */

function removeNightEffects(){
clearInterval(fireflyInterval);

document.querySelectorAll(".firefly").forEach(e=>e.remove());
document.querySelectorAll(".star").forEach(e=>e.remove());
document.querySelectorAll(".mist").forEach(e=>e.remove());
document.querySelectorAll(".water-reflection").forEach(e=>e.remove());
}


/* ===== START ===== */

startFlowerRain();
