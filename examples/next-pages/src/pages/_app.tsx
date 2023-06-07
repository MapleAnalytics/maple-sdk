import "@/styles/globals.css"
import type { AppProps } from "next/app"

import xd from "maple-sdk"

export default function App({ Component, pageProps }: AppProps) {
	console.log(xd)
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}
