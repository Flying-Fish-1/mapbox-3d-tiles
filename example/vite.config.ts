import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      'mapbox-3d-tiles': path.resolve(__dirname, '../src'),
    }
  }
})