import { ref } from "vue"
import useToggle from "@app/composables/useToggle"
import { useCounterStore } from "@app/stores/counterStore"

export default function setup(context: Record<string, any>) {
	const count = ref(10)
	const { value, toggle } = useToggle()
	const counterStore = useCounterStore()
	return { count, value, toggle, counterStore }
}
