import { Letter } from "./letter";

export class Word {
  constructor(word: string) {
    this.letters = [];
    for (let letter of word) {
      this.letters.push(new Letter(letter));
    }
  }

  public letters: Letter[];

}


export enum LetterState {
  Unknown = 0,
  RightPlace = 1,
  RightLetter = 2,
  Wrong = 3,
}
