export default function setup(context) {
	// Reactive state, computed values, watchers and functions for this page.
	// Read this page's data sources and variables from context, e.g. context.todos
	const discussions = [
	{ name: "1", title: "Weekly sync notes", author: "Rosa Diaz", comment: "Sounds good, let us ship it on Monday", time: "2 h", comments: 4, unread: true },
	{ name: "2", title: "Redesigning the onboarding flow", author: "Jake Peralta", comment: "I added the new mockups to the page", time: "5 h", comments: 12, unread: false },
	{ name: "3", title: "Q3 hiring plan", author: "Amy Santiago", comment: "Two backend roles and one designer", time: "1 d", comments: 7, unread: true },
	{ name: "4", title: "Incident review: search downtime", author: "Terry Jeffords", comment: "Root cause was the index rebuild", time: "2 d", comments: 9, unread: false },
	{ name: "5", title: "Docs sprint retrospective", author: "Raymond Holt", comment: "Velocity was acceptable.", time: "4 d", comments: 3, unread: false },
]

	return {discussions}
}
