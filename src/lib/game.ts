import { guid } from "../utils";
import { Card, Face, Suite } from "./card";
import { CardDeck } from "./cardDeck";
import { Participant } from "./participant";

import { EventEmitter } from "events";

export class Game {
    public id: string;
    public deck: CardDeck;
    public pile: Card[];
    public discardPile: Card[];
    public participants: any;

    constructor() {
        this.id = guid();
        this.deck = CardDeck.create();
        this.pile = [];
        this.discardPile = [];
    }

    public join(name: string) {
        const participantToken = guid();
        this.participants[participantToken] = new Participant(this, name);
        return { participantToken, name };
    }

    public leave(participantToken: string) {
        delete this.participants[participantToken];
        return { participantToken };
    }

    public handOutCards() {
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
    }

    public discardCard(card: Card) {
        this.pile.remove(card);
        this.discardPile.push(card);
    }
}