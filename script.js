/* ===============================
   SLIDESHOW
================================ */
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 4000);

/* ===============================
   LOVE MESSAGE
================================ */
function showLove() {
    const msg = document.getElementById("loveMessage");

    msg.innerHTML = `
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
    نه با حرف، نه با زور،<br>
    فقط با دوست‌داشتنت.<br><br>

    انگار وسط تاریکی<br>
    اومدی دستمو گرفتی و گفتی:<br>
    «نترس، من هستم» 🤍<br><br>

    وقتی پیشتم،<br>
    دنیا آروم‌تر می‌شه،<br>
    صداها خفه‌تر،<br>
    دل من… قرص‌تر.<br><br>

    تو عزیزترینی،<br>
    خاص‌ترینی،<br>
    و بی‌رقیب‌ترین آدم زندگی منی.<br>
    بودنت دلگرمیه،<br>
    موندنت رؤیاست…<br><br>

    من کنارت می‌مونم،<br>
    با شیطنت‌هام، با ضعف‌هام،<br>
    با عشقی که هر روز<br>
    بیشتر و عمیق‌تر<br>
    فقط برای تو می‌تپه ❤️
    `;

    msg.classList.add("show");
}
function showDeepLove() {
    const msg = document.getElementById("loveMessage");

    msg.innerHTML = `
    می‌خوام یه چیزی رو آروم و واقعی بهت بگم…<br><br>

    تو فقط کسی نیستی که دوستش دارم،<br>
    تو کسی هستی که باهاش<br>
    خودِ زندگی معنی پیدا می‌کنه 🤍<br><br>

    بعضی وقتا وسط شلوغی روز،<br>
    یهو یاد خنده‌ت می‌افتم<br>
    و بدون اینکه بفهمم چرا،<br>
    دلم آروم می‌شه…<br><br>

    تو بلدی منو،<br>
    بلدی کی قوی‌ام،<br>
    بلدی کی دلم می‌لرزه،<br>
    و قشنگ‌ترین قسمت ماجرا اینه<br>
    که بازم کنارمی…<br><br>

    کنار تو بودن یعنی<br>
    امنیت،<br>
    یعنی شیطنت‌های بی‌دلیل،<br>
    یعنی حرف‌هایی که فقط بین خودمونه 😌<br><br>

    من عاشق اینم که با تو<br>
    آینده رو تصور می‌کنم،<br>
    با همه‌ی ترس‌ها و امیدهاش…<br>
    چون می‌دونم اگه تو باشی،<br>
    هر مسیری قابل رفتنه 🤍<br><br>

    دختر من،<br>
    تو انتخاب قلبمی،<br>
    نه از سر عادت،<br>
    از سر عشق…<br><br>

    و اگه هزار بار دیگه هم<br>
    فرصت انتخاب داشته باشم،<br>
    هر بار،<br>
    بی‌مکث،<br>
    فقط تو ❤️
    `;

    msg.classList.add("show");
}


/* ===============================
   FLOWER & HEART RAIN
================================ */
const rain = document.getElementById("flowerRain");
const icons = ["🌹","❤️","🌸"];

setInterval(() => {
    const el = document.createElement("div");
    el.className = "flower";
    el.innerText = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 4 + Math.random() * 4 + "s";
    el.style.fontSize = 18 + Math.random() * 14 + "px";
    rain.appendChild(el);

    setTimeout(() => el.remove(), 8000);
}, 350);
/* ===============================
   DEEP LOVE BUTTON (SAFE BIND)
================================ */
document.addEventListener("DOMContentLoaded", () => {
    const deepBtn = document.getElementById("deepLoveBtn");
    if (deepBtn) {
        deepBtn.addEventListener("click", showDeepLove);
    }
});

