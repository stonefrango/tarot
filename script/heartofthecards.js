class Card {
    constructor(title, isReversed) {
        this.title = (typeof title === 'object' && title !== null && title.hasOwnProperty('value')) ? title.value : title;
        this.isReversed = isReversed;
    }
}

let shuffledDeck = [];
let selectedCards = [];
let spreadCardCount = 3; 
let spreadCardCountRemain = spreadCardCount;
let cardPos = 1; 

const unshuffledDeck = ["0 - The Fool","I - The Magician","II - The High Preistess","III - The Empress","IV - The Emperor","V - The Heirophant","VI - The Lovers","VII - The Chariot","VIII - Strength","IX - The Hermit","X - Wheel Of Fortune","XI - Justice","XII - The Hanged Man","XIII - Death","XIV - Temperance","XV - The Devil","XVI - The Tower","XVII - The Star","XVIII - The Moon","XIX - The Sun","XX - Judgment","XXI - The World","Ace Of Wands","Two Of Wands","Three Of Wands","Four Of Wands","Five Of Wands","Six Of Wands","Seven Of Wands","Eight Of Wands","Nine Of Wands","Ten Of Wands","Page Of Wands","Knight Of Wands","Queen Of Wands","King Of Wands","Ace Of Cups","Two Of Cups","Three Of Cups","Four Of Cups","Five Of Cups","Six Of Cups","Seven Of Cups","Eight Of Cups","Nine Of Cups","Ten Of Cups","Page Of Cups","Knight Of Cups","Queen Of Cups","King Of Cups","Ace Of Swords","Two Of Swords","Three Of Swords","Four Of Swords","Five Of Swords","Six Of Swords","Seven Of Swords","Eight Of Swords","Nine Of Swords","Ten Of Swords","Page Of Swords","Knight Of Swords","Queen Of Swords","King Of Swords","Ace Of Pentacles","Two Of Pentacles","Three Of Pentacles","Four Of Pentacles","Five Of Pentacles","Six Of Pentacles","Seven Of Pentacles","Eight Of Pentacles","Nine Of Pentacles","Ten Of Pentacles","Page Of Pentacles","Knight Of Pentacles","Queen Of Pentacles","King Of Pentacles"];

function shuffle() {
    shuffledDeck = [];
    selectedCards = [];
    cardPos = 1; 
    spreadCardCountRemain = spreadCardCount; 
    const currentShuffledOrder = randoSequence(unshuffledDeck);

    while (currentShuffledOrder.length > 0) {
        shuffledDeck.push(
            new Card(currentShuffledOrder.pop(), rando(true, false))
        );
    }

    for (let i = 1; i <= spreadCardCount; i++) {
        const cardElement = document.querySelector("#wrapper > div:nth-child(" + i + ") > div.card");
        if (cardElement) {
            cardElement.style.display = "none";
            const cardContentElement = cardElement.querySelector(".cardcontent");
            if (cardContentElement) {
                cardContentElement.classList.remove('flipped');
                delete cardContentElement.dataset.listenerAdded;
            }
            cardElement.classList.remove('cardreversed');
        }
    }

    document.getElementById("deal").style.display="unset";
    document.getElementById("deal").removeAttribute("disabled");
    document.getElementById("shuffle").style.display="none";
    document.getElementById("buttoncontainer").style.display="flex"; 
}

function deal() {
    if (spreadCardCountRemain > 0) {
        let ind = (spreadCardCount - spreadCardCountRemain);
        selectedCards.push(shuffledDeck.pop());
        const currentCardElement = document.querySelector("#wrapper > div:nth-child(" + cardPos + ") > div.card");
        const currentCardContentElement = currentCardElement.querySelector(".cardcontent");
        currentCardContentElement.querySelector(".cardfront .cardtitle").innerHTML = selectedCards[ind].title;
        currentCardElement.style.display="flex";

        if (selectedCards[ind].isReversed === true) { 
            currentCardElement.classList.add("cardreversed"); 
            console.log("Card is reversed.");
        } else {
             console.log("Card is not reversed.");
        }

        if (!currentCardContentElement.dataset.listenerAdded) {
             currentCardContentElement.addEventListener('click', function() {
                this.classList.toggle('flipped');
            });
            currentCardContentElement.dataset.listenerAdded = 'true'; 
        }

        ++cardPos;
        --spreadCardCountRemain;

        if (spreadCardCountRemain === 0) { 
            document.getElementById("buttoncontainer").style.display="none";
        }
    }
}