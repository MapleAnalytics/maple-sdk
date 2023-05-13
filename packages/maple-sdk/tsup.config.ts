import { defineConfig } from 'tsup'

export default defineConfig((opts) => ({
	entryPoints: ['src/index.ts', 'src/react.tsx', 'src/tracker.ts'],
	format: ['cjs', 'esm'],
	clean: !opts.watch,
	outDir: 'dist',
	target: 'es2017',
	treeshake: true,
	sourcemap: 'inline',
	minify: true,
	dts: true,
	splitting: false,
	external: ['react'],
	esbuildOptions(options) {
		options.banner = {
			js: '"use client"',
		}
	},
}))
