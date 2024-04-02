import { Letter } from "./letter";

export class Word {
  constructor(word: string) {
    for (const char of word) {
      this.letters.push(new Letter(char));
    }
  }

  public letters: Letter[] = [];

  public get text() {
    const chars = this.letters.map((letter) => letter.char);
    return chars.join("");
  }
}
