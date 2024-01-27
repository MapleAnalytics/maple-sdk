/** @jsxImportSource @builder.io/qwik */

import { component$, useVisibleTask$ } from "@builder.io/qwik"

import { type TrackerConfig, tracker } from "./index.js"

interface AnalyticsProps extends Omit<TrackerConfig, "websiteId"> {
	token: string
}

export const Analytics = component$(({ token, ...rest }: AnalyticsProps) => {
	useVisibleTask$(() => {
		tracker({
			websiteId: token,
			...rest,
		})
	})

	return null
})

export default Analytics
