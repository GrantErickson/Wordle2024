export class Letter {
  constructor(letter: string) {
    this.letter = letter;
  }

  public letter: string;
  public state: LetterState = LetterState.Unknown;
}

export enum LetterState {
  Unknown = 0,
  RightPlace = 1,
  RightLetter = 2,
  Wrong = 3,
}
