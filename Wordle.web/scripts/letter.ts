export class Letter {
  constructor(char: string) {
    this.char = char;
  }

  public char: string;
  public state: LetterState = LetterState.Unknown;
}

export enum LetterState {
  Unknown = 0,
  RightPlace = 1,
  RightLetter = 2,
  Wrong = 3,
}
