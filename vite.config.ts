/// <reference types="vitest" />

import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import remarkFrontMatter from 'remark-frontmatter'
import remarkFrontMatterMdx from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    mdx({
      remarkPlugins: [remarkFrontMatter, remarkFrontMatterMdx],
      stylePropertyNameCase: 'css',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
})
