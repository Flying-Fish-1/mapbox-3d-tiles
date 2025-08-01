import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      outDir: 'dist',
      insertTypesEntry: true,
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'mapbox-3d-tiles',
      formats: ['es', 'umd'],
      fileName: (format) =>
        format === 'es'
          ? 'mapbox-3d-tiles.mjs'
          : 'mapbox-3d-tiles.umd.js'
    },
    rollupOptions: {
      external: ['mapbox-gl','three'],
      output: {
        globals: {
          'mapbox-gl': 'mapboxgl',
          'three': 'THREE'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})