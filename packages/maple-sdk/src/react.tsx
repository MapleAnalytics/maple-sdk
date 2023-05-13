import React, { FC, useEffect, useRef } from 'react'

import { tracker } from '.'

interface UserTrackerProps {
	token: string
	debug?: boolean
}

export const UserTracker: FC<UserTrackerProps> = ({ token, debug }) => {
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
