export type AllowedPropertyValues = string | number | boolean | null

declare global {
	interface Window {
		// Base interface
		Safesight?: {
			sendEvent: (name: string, payload: any) => void
		}
	}
}
