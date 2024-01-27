import { isBrowser, isProduction, parseProperties } from "./helper.js"
import { AllowedPropertyValues } from "./types.js"

/**
 * Tracks a custom event. Please refer to documentation for more information on custom events.
 * @param name - The name of the event.
 * * Examples: `Purchase`, `Click Button`, or `Play Video`.
 * @param [properties] - Additional properties of the event. Nested objects are not supported. Allowed values are `string`, `number`, `boolean`, and `null`.
 */
export function track(name: string, properties?: Record<string, AllowedPropertyValues>): void {
	if (!isBrowser()) {
		const msg =
			"[Safesight] Please import `track` from `safesight/server` when using this function in a server environment"

		if (isProduction()) {
			// eslint-disable-next-line no-console -- Show warning in production
			console.warn(msg)
		} else {
			throw new Error(msg)
		}

		return
	}

	if (!properties) {
		window.Safesight?.sendEvent(name, {})
		return
	}

	try {
		const props = parseProperties(properties, {
			strip: isProduction(),
		})

		window.Safesight?.sendEvent(name, props)
	} catch (err) {
		if (err instanceof Error && !isProduction()) {
			// eslint-disable-next-line no-console -- Logging to console is intentional
			console.error(err)
		}
	}
}
