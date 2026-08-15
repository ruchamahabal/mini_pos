import { defineStore } from "pinia"
import { reactive } from "vue"

export const useCounterStore = defineStore("counter", () => {
	const state = reactive({ count: 0 })

	function increment() {
		state.count++
	}

	function reset() {
		state.count = 0
	}
	
	return { state, increment, reset }
})