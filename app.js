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

let quotes = ["not an anti or a pro-shipper but a third secret thing (adult with job)", "alien, yes i'm an alien!", "\"you should know better\" i dont know ANYTHING!"];
let select = quotes[Math.floor(Math.random() * quotes.length)];
$("#quote").html(select);

function penisMode() {
    $("#titleText").html("PENIS!!!");
    $("#titleText").css({
        "font-size": "26pt",
        "color": "red"
    })
    $("#activationText").css("visibility", "visible");
}