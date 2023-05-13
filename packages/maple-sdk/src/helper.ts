function getEnvironment(): string {
	const nodeEnv = process.env.NODE_ENV || 'development'
	return nodeEnv.trim().toLowerCase()
}

export function isProduction(): boolean {
	return getEnvironment() === 'production'
}

export function isBrowser(): boolean {
	return typeof window !== 'undefined'
}
