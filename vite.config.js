import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: './',
    build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            }
        }
    },
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'remove-vue-scoped',
                    Rule(rule) {
                        rule.selector = rule.selector.replace(/\[data-v-[^\]]+\]/g, '')
                    }
                }
            ]
        }
    }
})
