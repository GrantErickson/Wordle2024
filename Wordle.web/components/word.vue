<template>
  <div class="word">
    <span v-for="letter of word.letters" :key="letter.char">
      <Letter :letter="letter" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { Word } from "~/scripts/word";

const props = defineProps({
  word: { type: Word, required: true },
});
</script>

<style scoped>
.word {
  margin: 5px;
}
</style>
