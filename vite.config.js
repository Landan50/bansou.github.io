import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true
  },
  // /bansou.github.io
  base: './bansou.github.io',
  // base: './',
  build: {
    outDir: 'dist', //输出目录
    // assetsDir: 'assets', //静态资源目录
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',//指定 入口文件（entry chunks） 的输出文件名格式
        chunkFileNames: 'js/[name]-[hash].js',//指定 代码分割后的 chunk 文件（非入口文件）的输出文件名格式。这些文件通常是动态导入（import()）或公共依赖（如 node_modules 中的库）拆分出的文件。
        assetFileNames(assetInfo) {//控制非 JS 资源（如 CSS、图片）
          const name = assetInfo.names;

          if (name[0].endsWith('css')) {
            return 'css/[name]-[hash].css';
          }

          if (name[0].endsWith('pdf')) {
            return 'pdf/[name]-[hash].pdf';
          }

          const imgExts = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif'];

          if (imgExts.some(ext => name[0].endsWith(ext))) {
            return 'images/[name]-[hash].[ext]';
          }

          return 'assets/[name]-[hash].[ext]';
        },
      }
    }
  },
  // assetsInclude: ['**/*.pdf'],
  resolve: {
    alias: {
      // 'jquery': path.resolve(__dirname, 'node_modules/jquey/src/jquery.js')
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    // 显式替换 vue-i18n 的特性标志
    __VUE_I18N_FULL_INSTALL__: true,  // 是否完全安装（推荐 true）
    __VUE_I18N_LEGACY_API__: false,   // 是否支持 Legacy API（推荐 false）
    __INTLIFY_PROD_DEVTOOLS__: false, // 生产环境是否启用 DevTools（推荐 false）
  }
})
