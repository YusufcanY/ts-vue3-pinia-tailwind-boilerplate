<template>
  <h2 class="text-xl font-black prose">{{ props.msg }}</h2>
  <button class="px-3 py-2 bg-white border border-gray-300 rounded-md shadow" @click="increment">
    count is: {{ count }}
  </button>
</template>

<script setup lang="ts">
import { useExampleStore } from '@store/example';
const store = useExampleStore()
const count = computed(() => store.count)
const props = defineProps<{
  msg: string
  optionalProp?: number
}>()

function increment() {
  store.increment()
}
</script>
