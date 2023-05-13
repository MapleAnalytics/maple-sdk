import { defineConfig } from 'tsup'

export default defineConfig((opts) => ({
	entryPoints: ['src/index.ts', 'src/react.tsx', 'src/tracker.ts'],
	format: ['cjs'],
	clean: !opts.watch,
	outDir: 'dist',
	sourcemap: true,
	target: 'es2017',
	esbuildOptions(options) {
		options.banner = {
			js: '"use client"',
		}
	},
}))