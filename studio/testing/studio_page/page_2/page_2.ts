import { ref, computed } from "vue"
import { useCounterStore } from "@app/stores/counterStore"
import { formatDate } from "@app/utils/formatDate"

export default function setup(context: Record<string, any>) {
	const count = ref(0)
	const text = ref("")
	const doubled = computed(() => count.value * 2)
	function increment() { count.value++ }

	const todos = context.todos
	console.log("Todos from context:", todos.data)

	const counterStore = useCounterStore()

	return { count, doubled, increment, counterStore, text, formatDate }
}
