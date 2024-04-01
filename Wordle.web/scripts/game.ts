import { Letter, LetterState } from "./letter";
import { Word } from "./word";

export class Game {
  constructor(word: string) {
    this.word = new Word(word);
  }

  public word: Word;
  public guesses: Word[] = [];

  public guess(wordGuess: string): Word {
    let guess = new Word(wordGuess);
    this.guesses.push(guess);

    // Reset the state of the letters
    for (let letter of this.word.letters) {
      letter.state = LetterState.Unknown;
    }

    // Use the wordle rules to update the guess with the states of the letter
    // Check for exact matches
    for (let i = 0; i < this.word.letters.length; i++) {
      if (this.word.letters[i].letter === guess.letters[i].letter) {
        this.word.letters[i].state = LetterState.RightPlace;
        guess.letters[i].state = LetterState.RightPlace;
      }
    }

    // Check for right letter wrong place
    for (let i = 0; i < guess.letters.length; i++) {
      if (guess.letters[i].state === LetterState.Unknown) {
        for (let j = 0; j < this.word.letters.length; j++) {
          if (
            this.word.letters[j].state === LetterState.Unknown &&
            this.word.letters[j].letter === guess.letters[i].letter
          ) {
            this.word.letters[j].state = LetterState.RightLetter;
            guess.letters[i].state = LetterState.RightLetter;
            break;
          }
        }
      }
      if (guess.letters[i].state == LetterState.Unknown) {
        guess.letters[i].state = LetterState.Wrong;
      }
    }

    return guess;
  }
}
