import { Letter } from "./letter";

export class Word {
  constructor(word: string) {
    this.letters = [];
    for (let letter of word) {
      this.letters.push(new Letter(letter));
    }
  }

  public letters: Letter[];

  public get word() {
    return this.letters.map((letter) => letter.letter).join("");
  }

}
