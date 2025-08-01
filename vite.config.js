import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],          // 指定需要生成 d.ts 的源文件
      outDir: 'dist',               // 输出目录（默认与 build.outDir 一致）
      insertTypesEntry: true,       // 是否生成统一的 index.d.ts 入口
      rollupTypes: true             // 是否将所有类型合并成一个文件（推荐开启）
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'mapbox-3d-tiles',
      formats: ['es', 'umd'], // 必须指定
      fileName: (format) =>
        format === 'es'
          ? 'mapbox-3d-tiles.mjs'   // ← 指定 .mjs
          : 'mapbox-3d-tiles.umd.js'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})