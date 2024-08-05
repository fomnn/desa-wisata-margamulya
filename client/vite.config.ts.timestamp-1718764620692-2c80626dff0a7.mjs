// vite.config.ts
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'file:///C:/Dev/Vue/desa-wisata-margamulya/client/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.2/node_modules/vite/dist/node/index.js'
import vue from 'file:///C:/Dev/Vue/desa-wisata-margamulya/client/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.2__vue@3.4.29_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import VueDevTools from 'file:///C:/Dev/Vue/desa-wisata-margamulya/client/node_modules/.pnpm/vite-plugin-vue-devtools@7.2.1_rollup@4.18.0_vite@5.3.1_@types+node@20.14.2__vue@3.4.29_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs'
import Icons from 'file:///C:/Dev/Vue/desa-wisata-margamulya/client/node_modules/.pnpm/unplugin-icons@0.19.0_@vue+compiler-sfc@3.4.29_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/vite.js'

const __vite_injected_original_import_meta_url = 'file:///C:/Dev/Vue/desa-wisata-margamulya/client/vite.config.ts'
const vite_config_default = defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', __vite_injected_original_import_meta_url)),
    },
  },
})
export {
  vite_config_default as default,
}
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxEZXZcXFxcVnVlXFxcXGRlc2Etd2lzYXRhLW1hcmdhbXVseWFcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxEZXZcXFxcVnVlXFxcXGRlc2Etd2lzYXRhLW1hcmdhbXVseWFcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9EZXYvVnVlL2Rlc2Etd2lzYXRhLW1hcmdhbXVseWEvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFZ1ZURldlRvb2xzKCksXG4gICAgSWNvbnMoe1xuICAgICAgY29tcGlsZXI6ICd2dWUzJyxcbiAgICAgIGF1dG9JbnN0YWxsOiB0cnVlLFxuICAgICAgXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1QsU0FBUyxlQUFlLFdBQVc7QUFFdlYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBRXhCLE9BQU8sV0FBVztBQU4rSyxJQUFNLDJDQUEyQztBQVNsUCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsTUFDSixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsSUFFZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
