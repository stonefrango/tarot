class Card {
    constructor(title, isReversed) {
        this.title = title;
        this.isReversed = isReversed;
    }
}

let shuffledDeck = [];

const unshuffledDeck = ["The Fool","The Magician","The High Preistess","The Empress","The Emperor","The Heirophant","The Lovers","The Chariot","Strength","The Hermit","Wheel Of Fortune","Justice","The Hanged Man","Death","Temperance","The Devil","The Tower","The Star","The Moon","The Sun","Judgment","The World","Ace Of Wands","Two Of Wands","Three Of Wands","Four Of Wands","Five Of Wands","Six Of Wands","Seven Of Wands","Eight Of Wands","Nine Of Wands","Ten Of Wands","Page Of Wands","Knight Of Wands","Queen Of Wands","King Of Wands","Ace Of Cups","Two Of Cups","Three Of Cups","Four Of Cups","Five Of Cups","Six Of Cups","Seven Of Cups","Eight Of Cups","Nine Of Cups","Ten Of Cups","Page Of Cups","Knight Of Cups","Queen Of Cups","King Of Cups","Ace Of Swords","Two Of Swords","Three Of Swords","Four Of Swords","Five Of Swords","Six Of Swords","Seven Of Swords","Eight Of Swords","Nine Of Swords","Ten Of Swords","Page Of Swords","Knight Of Swords","Queen Of Swords","King Of Swords","Ace Of Pentacles","Two Of Pentacles","Three Of Pentacles","Four Of Pentacles","Five Of Pentacles","Six Of Pentacles","Seven Of Pentacles","Eight Of Pentacles","Nine Of Pentacles","Ten Of Pentacles","Page Of Pentacles","Knight Of Pentacles","Queen Of Pentacles","King Of Pentacles"];
const shuffledOrder = randoSequence(unshuffledDeck);

function shuffle() {
    while (shuffledOrder.length > 0) {
        shuffledDeck.push(
            new Card(shuffledOrder.pop(),rando(true,false))
        )
    }
    console.log(shuffledDeck);
}