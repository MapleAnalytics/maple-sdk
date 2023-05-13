import React, { FC, useEffect, useRef } from 'react'

import { tracker } from '.'

interface AnalyticsProps {
	token: string
	debug?: boolean
}

export const Analytics: FC<AnalyticsProps> = ({ token, debug }) => {
	const hasBeenCalled = useRef(false)

	useEffect(() => {
		if (!hasBeenCalled.current) {
			tracker({
				websiteId: token,
				debug: debug,
			})
			hasBeenCalled.current = true
		}
	}, [token])

	return <></>
}
