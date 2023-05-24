import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//import { viteSingleFile } from "vite-plugin-singlefile"

import { viteZip } from 'vite-plugin-zip-file';
import path from 'path';
import { env } from 'node:process';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


export default defineConfig({
  resolve: {
    alias: {
      vue: '@vue/compat',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  plugins: [
    vue(),
    //viteSingleFile()
    viteZip({
      folderPath: path.resolve(__dirname, 'dist'),
      outPath: path.resolve(__dirname, 'dist-zip'),
      zipName: 'Test.zip',
      enabled: env.NODE_ENV === 'production'? true: false
    })
  ],/*
  build: {
    commonjsOptions: {
      include: [
        '/node_modules/pyodide/python_stdlib.zip',
        '/node_modules/pyodide/pyodide.asm.js',
        '/node_modules/pyodide/micropip-0.3.0-py3-none-any.whl',
        '/node_modules/pyodide/packaging-23.0-py3-none-any.whl',
        '/node_modules/pyodide/pdfminer.six-20221105-py3-none-any.whl',
        '/node_modules/pyodide/cryptography-39.0.2-cp311-cp311-emscripten_3_1_32_wasm32.whl',
        '/node_modules/pyodide/charset_normalizer-3.1.0-py3-none-any.whl',
        '/node_modules/pyodide/openssl-1.1.1n.whl',
        '/node_modules/pyodide/six-1.16.0-py2.py3-none-any.whl',
        '/node_modules/pyodide/cffi-1.15.1-cp311-cp311-emscripten_3_1_32_wasm32.whl',
        '/node_modules/pyodide/pycparser-2.21-py2.py3-none-any.whl',
      ],
    },
  },*/
});
