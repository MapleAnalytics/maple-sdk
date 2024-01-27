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
