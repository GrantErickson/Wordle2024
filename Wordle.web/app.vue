<template>
  <v-container>
    <v-card width="300" elevation="4">
      <v-card-title> <h1>Wordle</h1> </v-card-title>
      <v-card-text>
        <div v-for="guess of game.guesses" :key="guess.text">
          <Word :word="guess" />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-text-field label="guess" v-model="guess" v-on:keyup.enter="onEnter" />
        <v-btn size="large" color="purple" variant="tonal" @click="submitGuess" class="ml-4 mb-4" prepend-icon="mdi-location-enter">Submit</v-btn>
      </v-card-actions> 
    </v-card>

  </v-container>
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
