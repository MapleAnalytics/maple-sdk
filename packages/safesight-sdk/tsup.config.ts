import { Options, defineConfig } from "tsup"

const cfg: Options = {
	splitting: false,
	sourcemap: true,
	treeshake: false,
	dts: true,
	format: ["cjs", "esm"],
}

export default defineConfig((opts) => [
	{
		...cfg,
		clean: !opts.watch,
		entry: ["src/index.ts", "src/tracker.ts"],
		outDir: "dist",
	},
	{
		...cfg,
		entry: {
			index: "src/react.tsx",
		},
		format: ["cjs", "esm"],
		clean: !opts.watch,
		outDir: "dist/react",
		external: ["react"],
		esbuildOptions(options) {
			options.banner = {
				js: '"use client"',
			}
		},
	},
])
