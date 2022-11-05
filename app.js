// loading animation
let buttons = gsap.from('.button', {opacity:0, ease:"power1.out", y:"3vw", duration:2});

// hover color classes
$(".link").hover(
    function () {
        $(this).removeClass('whi').addClass('yel');
    },
    function () {
        $(this).removeClass('yel').addClass('whi');
    }
)