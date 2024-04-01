<template>
  <div>
    <h1>Wordle</h1>

    <div v-for="guess in game.guesses" :key="guess.word">
      <div>
        <span v-for="letter in guess.letters" :key="letter.letter">
          <div class="letter" :class="'color-' + letter.color">
            {{ letter.letter }}
          </div>
        </span>
      </div>
    </div>

    <input v-model="guess" v-on:keyup.enter="onEnter" />
    <button @click="submitGuess">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { Game } from "./scripts/game";
import { type LetterState } from "./scripts/letter";

let game = ref(new Game("tempt"));

let guess = ref("");

function submitGuess() {
  console.log("submitting guess", guess.value);
  game.value.guess(guess.value);
  guess.value = "";
}

function onEnter() {
  submitGuess();
}
</script>

<style scoped>
.color-green {
  background-color: green;
}
.color-yellow {
  background-color: yellow;
}
.color-gray {
  background-color: gray;
}
.letter {
  min-width: 50px;
  min-height: 50px;
  border-color: black;
  border-width: 1px;
  border-style: solid;
  display: inline-block;
  text-align: center;
  align-content: center;
  font-size: 2em;
  text-transform: capitalize;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
