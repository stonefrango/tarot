class Card {
    constructor(title, isReversed) {
        this.title = title;
        this.isReversed = isReversed;
    }
}

let shuffledDeck = [];
let selectedCards = [];
let spreadCardCount = 3;
let spreadCardCountRemain = spreadCardCount;
let cardPos = 1;

const unshuffledDeck = ["0 - The Fool","I - The Magician","II - The High Preistess","III - The Empress","IV - The Emperor","V - The Heirophant","VI - The Lovers","VII - The Chariot","VIII - Strength","IX - The Hermit","X - Wheel Of Fortune","XI - Justice","XII - The Hanged Man","XIII - Death","XIV - Temperance","XV - The Devil","XVI - The Tower","XVII - The Star","XVIII - The Moon","XIX - The Sun","XX - Judgment","XXI - The World","Ace Of Wands","Two Of Wands","Three Of Wands","Four Of Wands","Five Of Wands","Six Of Wands","Seven Of Wands","Eight Of Wands","Nine Of Wands","Ten Of Wands","Page Of Wands","Knight Of Wands","Queen Of Wands","King Of Wands","Ace Of Cups","Two Of Cups","Three Of Cups","Four Of Cups","Five Of Cups","Six Of Cups","Seven Of Cups","Eight Of Cups","Nine Of Cups","Ten Of Cups","Page Of Cups","Knight Of Cups","Queen Of Cups","King Of Cups","Ace Of Swords","Two Of Swords","Three Of Swords","Four Of Swords","Five Of Swords","Six Of Swords","Seven Of Swords","Eight Of Swords","Nine Of Swords","Ten Of Swords","Page Of Swords","Knight Of Swords","Queen Of Swords","King Of Swords","Ace Of Pentacles","Two Of Pentacles","Three Of Pentacles","Four Of Pentacles","Five Of Pentacles","Six Of Pentacles","Seven Of Pentacles","Eight Of Pentacles","Nine Of Pentacles","Ten Of Pentacles","Page Of Pentacles","Knight Of Pentacles","Queen Of Pentacles","King Of Pentacles"];
const shuffledOrder = randoSequence(unshuffledDeck);

function shuffle() {
    while (shuffledOrder.length > 0) {
        shuffledDeck.push(
            new Card(shuffledOrder.pop(),rando(true,false))
        )
    }
    console.log(shuffledDeck);
    document.getElementById("deal").style.display="unset";
    document.getElementById("deal").removeAttribute("disabled");
    document.getElementById("shuffle").style.display="none";
}

function deal() {
    if (spreadCardCountRemain > 0) {
        console.log(spreadCardCountRemain);
        let ind = (3 - spreadCardCountRemain);
        console.log(ind);
        selectedCards.push(shuffledDeck.pop());
        console.log(selectedCards);
        document.querySelector("#wrapper > div:nth-child(" + cardPos + ") > div.card > div > div.cardfront > div").innerHTML=selectedCards[ind].title.value;
        document.querySelector("#wrapper > div:nth-child(" + cardPos + ") > div.card").style.display="unset";
        if (selectedCards[ind].isReversed==true) {
            document.querySelector("#wrapper > div:nth-child(" + cardPos + ") > div.card > div").classList.add("cardreversed");
        }
        ++cardPos;
        --spreadCardCountRemain;
        if (spreadCardCountRemain == 0) {
            document.getElementById("buttoncontainer").style.display="none";
        }
    }
}
