var root = document.documentElement;
var Quote = /** @class */ (function () {
    function Quote(attribute, text, color) {
        this.attribute = attribute;
        this.text = text;
        this.color = color;
    }
    return Quote;
}());
var quotelist = [
    new Quote("the whole rest - KIVΛ", 'so please, go pursue "your own" freedom and dreams.', "84b6bf"),
    new Quote("tonia (in sound mind)", "you've listened to their stories and troubles, but what of your own?", "eebaa5"),
    new Quote("alan watts", "we do not 'come into' this world; grew out of it –  just as an apple tree apples, the earth peoples.", "a32d2d"),
    new Quote("my bag - rav", "told myself if i can walk a mile then i can run a hundred / with no finish line in sight, though i\'m not sure what i\'m becoming", "477b8e"),
    new Quote("ripped pants - spongebob", "be true to yourself, don't miss your chance, and you won't end up like the fool who ripped his pants", "fff316"),
    new Quote("forever lost - MYTH & ROID", "as we strive toward our future the sadness never disappears, it just becomes a part of us, deep inside.", "5f625f"),
    new Quote("non-breath oblige - pinocchioP", "i want to live but i'm told to die, i want to die but i'm told to live", "8f49c4"),
    new Quote("unknown mother goose - wowaka", "it seems that once again i'll be humming the same tune", "6d6d6d"),
    new Quote("everhood", "life is short, so make the most of it. no matter what though, the end will still come regardless, so make peace.", "b80000"),
    new Quote("everhood", "there are no absolute truths. you are free to wrap your half - truths into whatever, that is the true beauty of it.", "b80000"),
    new Quote("rolling girl - wowaka", "one more time, one more time, once again today this girl will keep on rolling", "787878"),
    new Quote("world's end dancehall - wowaka", "something seems to be unusual and wrong, shall we believe in what is called 'our fate'?", "bababa"),
    new Quote("mabel - balloon", "we're vague because we are scared of lies", "efa97d"),
    new Quote("young girl a - siinamota", "how many times, how many more times / will it take until i can just be myself?", "faf7ae"),
    new Quote("patchwork staccato - toa", "before i felt afraid, but now it's all the same / a screen and me, why won't it ever change?", "fe5436"),
    new Quote("non-breath oblige - pinocchio-p", "we are the lives suffocated by hatefulness and lies made to point the knife", "8f49c4"),
    new Quote("lower one's eyes - lanndo", "if i never get to see you again, if i never come and find you my friend / then ill tie you ever tightly here beside me, never slowing", "e1c777"),
    new Quote("bondrewd", "may your journey be overflowing with curses and blessings", "c18ef9"),
    new Quote("bondrewd", "families are built by strangers who cross paths and come together. having souls that love each other is what makes people family.", "c18ef9"),
    new Quote("crazy? i was crazy once. they locked me in a room. a rubber room. a rubber room with rats. and rats make me crazy", "crazy? i was crazy once. they locked me in a room. a rubber room. a rubber room with rats. and rats make me crazy", "bababa"),
    new Quote("hinata miyake - a place further than the universe", "when you hit the point of no return, that's the moment it becomes a true journey.", "e86211"),
    new Quote("kimari - a place further than the universe", "we always had a choice, but we chose to be here.", "e82611"),
    new Quote("hinata miyake - a place further than the universe", "never think the stars you see are all the stars there are.", "e86211"),
];

var quoteIndex = Math.floor(Math.random() * quotelist.length - 1);
function newQuote() {
    quoteIndex++;
    if (quoteIndex > quotelist.length) {
        quoteIndex = 0;
    }
    var selQuote = quotelist[quoteIndex];
    var r = document.querySelector(":root");
    document.querySelector("#quoteText").innerHTML = selQuote.text;
    document.querySelector("#attrText").innerHTML = selQuote.attribute;
    root.style.setProperty("--quote-color", "#".concat(selQuote.color));
}
newQuote();
