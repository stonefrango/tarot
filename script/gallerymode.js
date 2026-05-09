class Card {
    constructor(title, isReversed) {
        this.card = (typeof title === 'object' && title !== null && title.hasOwnProperty('value')) ? title.value : title;
        this.isReversed = isReversed;
    }
}

let shuffledDeck = [];
let selectedCards = [{ numpip: "0", title: "The Fool", cardimg: "0.jpg" }, { numpip: "I", title: "The Magician", cardimg: "1.jpg" }, { numpip: "II", title: "The High Priestess", cardimg: "2.jpg" }, { numpip: "III", title: "The Empress", cardimg: "3.jpg" }];
let spreadCardCount = selectedCards.length;
let spreadCardCountRemain = spreadCardCount;
let cardPos = 1; 

function deal() {
    if (spreadCardCountRemain > 0) {
        let ind = (spreadCardCount - spreadCardCountRemain);
        const currentCardElement = document.querySelector("#wrapper > div:nth-child(" + cardPos + ") > div.card");
        const currentCardContentElement = currentCardElement.querySelector(".cardcontent");
        if (selectedCards[ind].cardimg != null) {
            currentCardContentElement.querySelector(".cardfront").style.backgroundImage = "url('../images/" + selectedCards[ind].cardimg + "')";
        } else {
            currentCardContentElement.querySelector(".cardfront .cardtitle").innerHTML = (
                selectedCards[ind].card.title == "Swords" || 
                selectedCards[ind].card.title == "Wands" || 
                selectedCards[ind].card.title == "Pentacles" ||
                selectedCards[ind].card.title == "Cups" ? 
                    selectedCards[ind].card.numpip + " of " + selectedCards[ind].card.title : 
                    selectedCards[ind].card.numpip + " - " + selectedCards[ind].card.title
            );
        }
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