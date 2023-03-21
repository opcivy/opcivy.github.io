// loading animation
let buttons = gsap.from('.button', {opacity:0, ease:"power1.out", y:"3vw", duration:1.5});
let title = gsap.from('#titleText', {opacity:0, duration: 1, y:"-3vw", ease:"power1.out"});

// hover color classes
$(".link").hover(
    function () {
        $(this).removeClass('whi').addClass('yel');
    },
    function () {
        $(this).removeClass('yel').addClass('whi');
    }
)

let quotes = ["So please, go pursue \"your own\" freedom and dreams.",
 "You've listened to their stories and troubles, but what of your own?",
 "Hand in hand let's make a promise, never take it back.",
 "We were always held together, never let us part.",
 "We do not 'come into' this world; grew out of it –  just as an apple tree apples, the earth peoples."];
let select = quotes[Math.floor(Math.random() * quotes.length)];
$("#quote").html(select);
