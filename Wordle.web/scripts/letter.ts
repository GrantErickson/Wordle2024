export class Letter {
  constructor(letter: string) {
    this.letter = letter;
  }

  public letter: string;
  public state: LetterState = LetterState.Unknown;

  public get color() {
    switch (this.state) {
      case LetterState.RightPlace:
        return "green darken-1";
      case LetterState.RightLetter:
        return "yellow";
      case LetterState.Wrong:
        return "gray";
      default:
        return "white";
    }
  }
}

export enum LetterState {
  Unknown = 0,
  RightPlace = 1,
  RightLetter = 2,
  Wrong = 3,
}
