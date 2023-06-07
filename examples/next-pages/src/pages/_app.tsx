import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Analytics } from "maple-sdk/react"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Analytics token="yourToken"></Analytics>
			<Component {...pageProps} />
		</>
	)
}
