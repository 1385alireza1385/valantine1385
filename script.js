const audio = document.getElementById("bgMusic");

const normalSongs = [
"music/2.mp3",
"music/3.mp3"
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
روز دختر مبارک عزیزترینم 🌷
نمی‌دونم چطور توی چند خط بگم که چقدر بودنت برای من ارزشمنده.
تو از اون آدمایی هستی که فقط با یه پیام یا یه لبخند،
می‌تونی حال یه روز کامل رو خوب کنی.

مهربونی، صداقت و قلب قشنگت چیزی نیست
که بشه به سادگی از کنارش گذشت 🤍

امیدوارم همیشه بخندی،
همیشه بدرخشی و هر آرزویی که توی دلت داری،
یه روز قشنگ به حقیقت تبدیل بشه ✨

خوشحالم که تو رو توی زندگیم دارم.
روزت مبارک دختر دوست‌داشتنی ❤️
`;

msg.classList.add("show");
}


/* ===== متن طولانی مود شب ===== */

function showDeepLove(){

const msg=document.getElementById("loveMessage");

const text = `
می‌خوام امشب یه حرفی رو بهت بزنم که مدت‌هاست توی دلمه... 🤍<br><br>

شاید خودتم ندونی،
ولی خیلی بیشتر از چیزی که فکر می‌کنی
توی فکر منی...

بعضی وقتا وسط روز،
یهویی گوشیمو برمی‌دارم
فقط ببینم پیامی ازت اومده یا نه 😌❤️

بعد خودم به خودم می‌خندم
که چجوری یه فرشته تونسته
اینقدر قشنگ دل یه نفر رو ببره...

راستش رو بخوای،
دلتنگت می‌شم...
خیلی بیشتر از چیزی که نشون میدم...

دلم برای خنده‌هات تنگ می‌شه،
برای شیطنت‌هات،
برای وقتایی که اذیتم می‌کنی
و بعدش خودت از همه بیشتر می‌خندی 🤍

بعضی شبا قبل خواب
فقط بهت فکر می‌کنم...
به حرفامون،
به خاطره‌هامون،
به لحظه‌هایی که کنار هم داشتیم...

و همون موقع دلم می‌خواد
کاش فاصله‌ای وجود نداشت...

کاش می‌شد الان کنارت باشم،
یه گوشه بشینم،
بهت نگاه کنم
و فقط از بودنت لذت ببرم... ❤️

دلم برای بغلت تنگ شده...
برای اون حس قشنگی که
آدم دلش نمی‌خواد تموم بشه...

برای اون آرامشی که
فقط با فکر کردن بهت
یه ذره ازش نصیبم می‌شه... 🤍

می‌دونی قشنگ‌ترین قسمت ماجرا چیه؟

اینکه هنوزم وقتی اسمت روی صفحه میاد،
همون ذوق روزای اول
میاد سراغم... 😌❤️

هنوزم لبخند می‌زنم...
هنوزم دلم آروم می‌شه...
هنوزم ته دلم خوشحال می‌شم
که تو رو دارم...

عاشق مهربونی‌هامونم،
عاشق شوخی‌هامونم،
عاشق اون لحظه‌های ساده‌ای که
فقط بین خودمون می‌مونه...

تو برای من فقط یه آدم نیستی...

تو بخشی از قشنگ‌ترین حس‌های زندگی منی فرشته زندگمی ، شیشه جونمی،کل دنیامی...

همون آدمی که
وقتی ناراحتم یادش آرومم می‌کنه،
وقتی خوشحالم دلم می‌خواد باهاش شریک بشم،
و وقتی دلتنگم،
بیشتر از هر کسی دلم می‌خواد کنارش باشم... 🤍
ماه زیبا و قشنگم و درخشانم...

اگه یه روز ازم بپرسن
قشنگ‌ترین اتفاق زندگیت چی بوده،
بدون فکر کردن
اسم تو میاد توی ذهنم... ❤️

ممنونم که هستی...
ممنونم که لبخند می‌زنی...
ممنونم که دنیامو قشنگ‌تر کردی...

و بدون...
هر چقدر زمان بگذره،
بازم وقتی بهت فکر می‌کنم
همون حس شیرین و دوست‌داشتنی
توی قلبم زنده می‌شه... 🤍✨
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
