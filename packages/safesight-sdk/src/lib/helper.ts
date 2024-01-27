function getEnvironment() {
	// Check if 'process' and 'process.env' are defined
	if (typeof process !== "undefined" && process.env) {
		const nodeEnv = process.env.NODE_ENV || "development"
		return nodeEnv.trim().toLowerCase()
	} else {
		return "production"
	}
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
