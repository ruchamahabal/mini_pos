import { ref } from "vue"

export default function useToggle(initial = true) {
	const value = ref(initial)
	const toggle = () => (value.value = !value.value)
	return { value, toggle }
}
