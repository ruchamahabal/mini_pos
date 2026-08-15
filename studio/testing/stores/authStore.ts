import { defineStore } from "pinia"
import { reactive } from "vue"

export const useAuthStore = defineStore("auth", () => {
	const state = reactive({ user: "Shrihari" })

	function login() {
		state.user = "something"
	}

	function signout() {
		state.count = null
	}
	
	return { state, login, signout }
})