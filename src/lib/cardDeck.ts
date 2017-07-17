import { guid } from "../utils";
import { Card, Face, Suite } from "./card";

export class CardDeck {
    public static create() {
        const cards: Card[] = [];

        for (const suite in Suite) {
            if (isNaN(Number(suite))) {
                const s = (Suite[suite] as any) as Suite;

                for (const value of Card.values) {
                    cards.push(new Card(s, undefined, value));
                }

                for (const face in Face) {
                    if (isNaN(Number(face))) {
                        const f = (Face[face] as any) as Face;
                        cards.push(new Card(s, f, undefined));
                    }
                }

                cards.push(new Card(s, undefined, undefined));
            }
        }

        return new CardDeck(cards);
    }

    private cards: any;
    private availableCards: Card[];

    constructor(cards: Card[]) {
        this.availableCards = cards.slice(0);
        for (const card of cards) {
            const id: string = guid();
            this.cards[id] = card;
        }
        Object.seal(this.cards);
    }

    public shuffle() {
        const array = this.cards;
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    }

    public handOut() {
        const card = this.availableCards.pop();
        if (typeof card !== "undefined") {
            return card;
        }
        throw new Error("No cards");
    }

    public getCard(id: string): Card {
        return this.cards[id];
    }
}
