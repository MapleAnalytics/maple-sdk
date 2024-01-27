"use client"

import { useEffect, useRef } from "react"

import { tracker, type TrackerConfig } from "./index.js"
import { track } from "./lib/generic.js"

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

export { Analytics, track }

export default Analytics
