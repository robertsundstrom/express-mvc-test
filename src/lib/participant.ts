import { Card, Face, Suite } from "./card";
import { CardDeck } from "./cardDeck";
import { Game } from "./game";

export class Participant {

    // tslint:disable-next-line:variable-name
    public hand: Card[] = [];
    public isReady: boolean = false;

    constructor(public game: Game, name: string) {
        Object.seal(this.hand);
    }

    public takeCard() {
        const card = this.game.deck.handOut();
        this.hand.push(card);
    }

    public putCard(card: Card) {
        this.hand.remove(card);
        this.game.pile.push(card);
    }

    public switchCard(card: Card, forCard: Card) {
        this.hand.remove(card);
        this.hand.push(forCard);
        // this.hand.remove(for);
        // this.hand.push(card);
    }
}