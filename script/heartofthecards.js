class Card {
    constructor(title, isReversed) {
        this.card = (typeof title === 'object' && title !== null && title.hasOwnProperty('value')) ? title.value : title;
        this.isReversed = isReversed;
    }
}

let shuffledDeck = [];
let selectedCards = [];
let spreadCardCount = 3; 
let spreadCardCountRemain = spreadCardCount;
let cardPos = 1; 

const unshuffledDeck = [{numpip:"0",title:"The Fool"},{numpip:"I",title:"The Magician"},{numpip:"III",title:"The High Priestess"},{numpip:"III",title:"The Empress"},{numpip:"IV",title:"The Emperor"},{numpip:"V",title:"The Hierophant"},{numpip:"VI",title:"The Lovers"},{numpip:"VII",title:"The Chariot"},{numpip:"VIII",title:"Strength"},{numpip:"IX",title:"The Hermit"},{numpip:"X",title:"Wheel of Fortune"},{numpip:"XI",title:"Justice"},{numpip:"XII",title:"The Hanged Man"},{numpip:"XIII",title:"Death"},{numpip:"XIV",title:"Temperance"},{numpip:"XV",title:"The Devil"},{numpip:"XVI",title:"The Tower"},{numpip:"XVII",title:"The Star"},{numpip:"XVIII",title:"The Moon"},{numpip:"XIX",title:"The Sun"},{numpip:"XX",title:"Judgment"},{numpip:"XXI",title:"The World"},{numpip:"Ace",title:"Wands"},{numpip:"Two",title:"Wands"},{numpip:"Three",title:"Wands"},{numpip:"Four",title:"Wands"},{numpip:"Five",title:"Wands"},{numpip:"Six",title:"Wands"},{numpip:"Seven",title:"Wands"},{numpip:"Eight",title:"Wands"},{numpip:"Nine",title:"Wands"},{numpip:"Ten",title:"Wands"},{numpip:"Page",title:"Wands"},{numpip:"Knight",title:"Wands"},{numpip:"Queen",title:"Wands"},{numpip:"King",title:"Wands"},{numpip:"Ace",title:"Cups"},{numpip:"Two",title:"Cups"},{numpip:"Three",title:"Cups"},{numpip:"Four",title:"Cups"},{numpip:"Five",title:"Cups"},{numpip:"Six",title:"Cups"},{numpip:"Seven",title:"Cups"},{numpip:"Eight",title:"Cups"},{numpip:"Nine",title:"Cups"},{numpip:"Ten",title:"Cups"},{numpip:"Page",title:"Cups"},{numpip:"Knight",title:"Cups"},{numpip:"Queen",title:"Cups"},{numpip:"King",title:"Cups"},{numpip:"Ace",title:"Swords"},{numpip:"Two",title:"Swords"},{numpip:"Three",title:"Swords"},{numpip:"Four",title:"Swords"},{numpip:"Five",title:"Swords"},{numpip:"Six",title:"Swords"},{numpip:"Seven",title:"Swords"},{numpip:"Eight",title:"Swords"},{numpip:"Nine",title:"Swords"},{numpip:"Ten",title:"Swords"},{numpip:"Page",title:"Swords"},{numpip:"Knight",title:"Swords"},{numpip:"Queen",title:"Swords"},{numpip:"King",title:"Swords"},{numpip:"Ace",title:"Pentacles"},{numpip:"Two",title:"Pentacles"},{numpip:"Three",title:"Pentacles"},{numpip:"Four",title:"Pentacles"},{numpip:"Five",title:"Pentacles"},{numpip:"Six",title:"Pentacles"},{numpip:"Seven",title:"Pentacles"},{numpip:"Eight",title:"Pentacles"},{numpip:"Nine",title:"Pentacles"},{numpip:"Ten",title:"Pentacles"},{numpip:"Page",title:"Pentacles"},{numpip:"Knight",title:"Pentacles"},{numpip:"Queen",title:"Pentacles"},{numpip:"King",title:"Pentacles"}];

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
            cardElement.style.visibility = "hidden";
            const cardContentElement = cardElement.querySelector(".cardcontent");
            if (cardContentElement) {
                cardContentElement.classList.remove('flipped');
                const newCardContentElement = cardContentElement.cloneNode(true);
                cardContentElement.parentNode.replaceChild(newCardContentElement, cardContentElement);
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
        currentCardContentElement.querySelector(".cardfront .cardtitle").innerHTML = (selectedCards[ind].card.title == "Swords" || selectedCards[ind].card.title == "Wands" || selectedCards[ind].card.title == "Pentacles" ? selectedCards[ind].card.numpip + " of " + selectedCards[ind].card.title : selectedCards[ind].card.numpip + " - " + selectedCards[ind].card.title);
        currentCardElement.style.visibility = "visible";

        if (selectedCards[ind].isReversed === true) { 
            currentCardElement.classList.add("cardreversed");
        }

        currentCardContentElement.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        ++cardPos;
        --spreadCardCountRemain;

        if (spreadCardCountRemain === 0) { 
            document.getElementById("buttoncontainer").style.display="none";
        }
    }
}