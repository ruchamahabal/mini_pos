import { ref } from "vue"
import { formatDate } from "@app/utils/formatDate"
import { useAuthStore } from "@app/stores/authStore"

export default function setup(context: Record<string, any>) {
	// Reactive state, computed values, watchers and functions for this page.
	// Read this page's data sources and variables from context, e.g. context.todos
	const emoji = ref("")
	const authStore = useAuthStore()

	return { emoji, formatDate, authStore }
}
