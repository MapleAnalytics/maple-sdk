import React, { FC, useEffect, useRef } from "react"

import { TrackerConfig, tracker } from "./index.js"

interface AnalyticsProps extends Omit<TrackerConfig, "websiteId"> {
	token: string
	debug?: boolean
}

export const Analytics: FC<AnalyticsProps> = ({ token, ...rest }) => {
	const hasBeenCalled = useRef(false)

	useEffect(() => {
		if (!hasBeenCalled.current) {
			tracker({
				websiteId: token,
				...rest,
			})
			hasBeenCalled.current = true
		}
	}, [token])

	return <></>
}

export default { Analytics }
