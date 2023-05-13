import { defineConfig } from 'tsup'

export default defineConfig((opts) => ({
	entryPoints: ['src/index.ts', 'src/react.tsx', 'src/tracker.ts'],
	format: ['cjs'],
	clean: !opts.watch,
	outDir: 'dist',
	target: 'es2017',
}))
