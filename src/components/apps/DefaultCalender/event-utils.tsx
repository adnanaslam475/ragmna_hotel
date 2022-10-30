import { EventInput } from '@fullcalendar/react'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
	{
		id: createEventId(),
		title: 'All-day event',
		start: todayStr,
		color: 'red',
	},
	{
		id: createEventId(),
		title: 'Timed event',
		start: todayStr + 'T12:00:00',
		color: 'red',
	},
]

export function createEventId() {
	return String(eventGuid++)
}

export const handlePreventInput = (event, notAllowedCharacters) => {
	if (notAllowedCharacters.includes(event.key)) {
		return event.preventDefault();
	}
}