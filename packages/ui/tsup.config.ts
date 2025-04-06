import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    compilerOptions: {
      incremental: false
    }
  },
  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  minify: false,
  external: ['react', 'react-dom']
}); 