import { useEffect, useRef } from "react"

import { type TrackerConfig, tracker } from "./index.js"

interface AnalyticsProps extends Omit<TrackerConfig, "websiteId"> {
	token: string
	debug?: boolean
}

export const Analytics = ({ token, ...rest }: AnalyticsProps) => {
	const hasBeenCalled = useRef(false)

	useEffect(() => {
		if (!hasBeenCalled.current) {
			tracker({
				websiteId: token,
				...rest,
			})
			hasBeenCalled.current = true
		}
		// Including all props in the dependency array
	}, [token, ...Object.values(rest)])

	// Return null for components that don't render anything
	return null
}

export default Analytics
