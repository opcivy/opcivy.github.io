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

let quotes = ["not an anti or a pro-shipper but a third secret thing (adult with job)",
 "\"you should know better\" i dont know ANYTHING!",
 "You've listened to their stories and troubles, but what of your own?"];
let select = quotes[Math.floor(Math.random() * quotes.length)];
$("#quote").html(select);

let names = ["azzy", "ivy", "vi"];
let nameSelect = names[Math.floor(Math.random() * names.length)];
$("#name").html(nameSelect);