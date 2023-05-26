function getEnvironment(): string {
	const nodeEnv = process.env.NODE_ENV || 'development'
	return nodeEnv.trim().toLowerCase()
}

export function isProduction(environment?: 'production' | 'development'): boolean {
	if (environment) {
		return environment === 'production'
	}

	return getEnvironment() === 'production'
}

export function isBrowser(): boolean {
	return typeof window !== 'undefined'
}
