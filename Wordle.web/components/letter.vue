<template>
  <div class="letter" :class="colorClass">
    {{ letter.char }}
  </div>
</template>

<script setup lang="ts">
//import { defineProps } from "vue";
import { Letter, LetterState } from "~/scripts/letter";

const props = defineProps({
  letter: { type: Letter, required: true },
});

const colorClass = computed(() => {
  switch (props.letter.state) {
    case LetterState.RightPlace:
      return "color-green";
    case LetterState.RightLetter:
      return "color-yellow";
    case LetterState.Wrong:
      return "color-gray";
    default:
      return "color-white";
  }
});
</script>

<style scoped>
.color-green {
  background-color: green;
}
.color-yellow {
  background-color: yellow;
}
.color-gray {
  background-color: lightgray;
}
.color-white {
  background-color: whitesmoke;
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
