<template>
	<div class="flex flex-col gap-2 w-fit">
		<Popover transition="default">
			<template #target="{ togglePopover }">
				<slot name="target">
					<Button class="w-fit" variant="subtle" @click="togglePopover">
						<span v-if="currentEmoji" class="mr-2">{{ currentEmoji.emoji }}</span>
						{{ currentEmoji ? currentEmoji.description : props.description || "Pick Emoji" }}
					</Button>
				</slot>
			</template>
			<template #body="{ close }">
				<div class="flex w-72 flex-col rounded-lg bg-surface-white shadow-xl border border-gray-100 overflow-hidden">
					<div class="p-2 border-b border-gray-100 bg-gray-50">
						<TextInput
							v-model="searchQuery"
							placeholder="Search emojis..."
							type="search"
							autocomplete="off"
						/>
					</div>
					<div class="p-2 overflow-y-auto max-h-64 grid grid-cols-8 gap-1 bg-white">
						<button
							v-for="emoji in filteredEmojis"
							:key="emoji.emoji"
							@click="selectEmoji(emoji, close)"
							class="text-xl hover:bg-gray-100 p-1.5 rounded transition-colors flex items-center justify-center cursor-pointer"
							:title="emoji.description"
						>
							{{ emoji.emoji }}
						</button>
						<div v-if="filteredEmojis.length === 0" class="col-span-8 text-center text-gray-500 py-6 text-sm">
							No emojis found for "{{ searchQuery }}"
						</div>
					</div>
				</div>
			</template>
		</Popover>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { Button, TextInput, Popover } from "frappe-ui";
import { gemoji } from "gemoji";

const props = defineProps<{
	name: string,
	description?: string,
}>()
const slots = defineSlots<{ target: () => any }>()
const emit = defineEmits(["emojiChanged"])
const model = defineModel()

const currentEmoji = ref<any>(null);
const searchQuery = ref("");

// Virtualize/limit to 200 items unless searching, to prevent lag
const filteredEmojis = computed(() => {
	const query = searchQuery.value.toLowerCase().trim();
	if (!query) return gemoji.slice(0, 200);

	return gemoji.filter(e =>
		e.description.toLowerCase().includes(query) ||
		e.names.some(n => n.toLowerCase().includes(query)) ||
		e.tags.some(t => t.toLowerCase().includes(query))
	).slice(0, 200); // Still limit search results for performance
});

const selectEmoji = (emoji: any, close: () => void) => {
	currentEmoji.value = emoji;
	emit("emojiChanged", emoji);
	close();
};
</script>
