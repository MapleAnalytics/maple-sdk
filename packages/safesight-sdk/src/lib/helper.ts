import { AllowedPropertyValues } from "./types.js"

function getEnvironment() {
	// Check if 'process' and 'process.env' are defined
	if (typeof process !== "undefined" && process.env) {
		const nodeEnv = process.env.NODE_ENV || "development"
		return nodeEnv.trim().toLowerCase()
	}

	return "production"
}

export function isProduction(environment?: "production" | "development"): boolean {
	if (environment) {
		return environment === "production"
	}
	return getEnvironment() === "production"
}

export function isBrowser(): boolean {
	return typeof window !== "undefined"
}

/**
 * Generate uuid to identify the session. Random, not data-derived
 */

export function createRandomId() {
	return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

function removeKey(key: string, { [key]: _, ...rest }): Record<string, unknown> {
	return rest
}

export function parseProperties(
	properties: Record<string, unknown> | undefined,
	options: {
		strip?: boolean
	},
): Error | Record<string, AllowedPropertyValues> | undefined {
	if (!properties) return undefined
	let props = properties
	const errorProperties: string[] = []
	for (const [key, value] of Object.entries(properties)) {
		if (typeof value === "object" && value !== null) {
			if (options.strip) {
				props = removeKey(key, props)
			} else {
				errorProperties.push(key)
			}
		}
	}

	if (errorProperties.length > 0 && !options.strip) {
		throw Error(
			`The following properties are not valid: ${errorProperties.join(
				", ",
			)}. Only strings, numbers, booleans, and null are allowed.`,
		)
	}
	return props as Record<string, AllowedPropertyValues>
}
