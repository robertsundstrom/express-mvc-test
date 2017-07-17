export enum Suite { Hearts, Diamonds, Clubs, Spades }

export enum Face { Jack, Queen, King }

export type CardValues = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export class Card {
    public static values: CardValues[] = [ 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // tslint:disable-next-line:variable-name
    private _suite: Suite;
    // tslint:disable-next-line:variable-name
    private _face: Face | undefined;
    // tslint:disable-next-line:variable-name
    private _value: CardValues | undefined;

    constructor(suite: Suite, face: Face | undefined, value: CardValues | undefined) {
        this._suite = suite;
        this._face = face;
        this._value = value;
    }

    public get suite(): Suite {
        return this._suite;
    }

    public get face(): Face | undefined {
        return this._face;
    }

    public get value(): CardValues | undefined {
        return this._value;
    }

    get isAce() {
        return !!this.suite && !this.face && !this.value;
    }

    public toString() {
        if (typeof this.face === "undefined" && typeof this.value === "undefined") {
            return `Ace of ${Suite[this._suite]}`;
        } else if (typeof this.face !== "undefined") {
            return `${Face[this.face]} of ${Suite[this._suite]} `;
        } else if (typeof this.value !== "undefined") {
            return `${this.value} of ${Suite[this._suite]}`;
        }
    }
}
