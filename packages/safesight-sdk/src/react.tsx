"use client"

import { useEffect } from "react"

import { type TrackerConfig, tracker } from "./index.js"

interface AnalyticsProps extends Omit<TrackerConfig, "websiteId"> {
	token: string
}

export const Analytics = ({ token, ...rest }: AnalyticsProps) => {
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		tracker({
			websiteId: token,
			...rest,
		})
	}, [])

	return null
}

export default Analytics
