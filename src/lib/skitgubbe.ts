// tslint:disable-next-line:max-classes-per-fil
/*
const players = [ new Player("Robert"), new Player("Mange"), new Player("Elenore"), new Player("Joakim") ];
for (const player of players) {
    skitgubbe.addPlayer(player);
}
skitgubbe.prepareDeck();
skitgubbe.handOUt();
*/


// tslint:disable-next-line:max-classes-per-file


/*
// tslint:disable-next-line:max-classes-per-file
export class Skitgubbe extends EventEmitter {
    public participants: any = {};
    public pile: Card[];
    public discardPile: Card[];
    public deck: CardDeck;

    constructor() {
        super();
    }
    public prepareDeck() {
        this.deck = CardDeck.create();
        for (let i = 0; i < rand(1, 5); i++) {
            this.deck.shuffle();
        }
    }

    public handOutCards(gameId: string) {
        // const randomPlayerIndex = rand(0, this.participants.length - 1);
        // const player = this.players[randomPlayerIndex];
        // Lowest value begins
        for (let i = 1; i <= 3; i++) {
            for (const key in this.participants) {
                if (typeof key === "string") {
                    const participant = this.participants[key] as Participant;
                    const card = this.deck.handOut();
                    participant.hand.push(card);
                }
            }
        }
        this.emit("cardsHandOut");
    }

    public take(token: string) {
        const card = this.deck.handOut();
        this.emit("cardTaken", { token });
        return card;
    }

    public put(participantToken: string, cardId: string) {
        const card = this.deck.getCard(cardId);
        this.pile.push(card);
        this.emit("cardPut", { participantToken, cardId });
    }
}
*/
