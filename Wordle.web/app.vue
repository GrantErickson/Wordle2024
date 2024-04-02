<template>
  <div>
    <h1>Wordle</h1>

    <div v-for="guess of game.guesses" :key="guess.text">
      <Word :word="guess" />
    </div>

    <input v-model="guess" v-on:keyup.enter="onEnter" />
    <button @click="submitGuess">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { Game } from "./scripts/game";
let game = reactive(new Game("tempt"));

let guess = ref("");

function submitGuess() {
  console.log("submitting guess", guess.value);
  if (game.guessIsValid(guess.value)) {
    game.guess(guess.value);
    guess.value = "";
  } else {
    console.log("invalid guess");
  }
}

function onEnter() {
  submitGuess();
}
</script>
