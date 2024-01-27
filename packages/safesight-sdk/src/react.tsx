"use client"

import { useEffect, useRef } from "react"

import { type TrackerConfig, tracker } from "./index.js"

interface AnalyticsProps extends Omit<TrackerConfig, "websiteId"> {
	token: string
	debug?: boolean
}

const Analytics = ({ token, ...rest }: AnalyticsProps) => {
	const hasBeenCalled = useRef(false)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!hasBeenCalled.current) {
			tracker({
				websiteId: token,
				...rest,
			})
			hasBeenCalled.current = true
		}
	}, [token, ...Object.values(rest)])

	return null
}

export { Analytics, tracker }

export default Analytics
