# Visual Document Index

## Build

This project builds into a single zip file.

Run the app while viewing the `Network` display to determine missing python `.whl`.  
Use the GET links to download the files, manually, through the browser.
_Note:_ these files typically download as `.wasm` files, so they need to be renamed with the original extension.

These files should include:
```
micropip-0.3.0-py3-none-any.whl
packaging-23.0-py3-none-any.whl
pdfminer.six-20221105-py3-none-any.whl
charset_normalizer-3.1.0-py3-none-any.whl
...
```
Copy these into `./node_modules/pyodide/` directory.

Add each of these to the `vite.config.js` file so that they will be included in the distribution:

```node
  build: {
    commonjsOptions: {
      include: [
```

```
npm run build
```

Host files on S3 bucket so that they can be accessed.  The `file://` protocol does not allow CORS on the file system, but `http://` does allow it.

## Develop

```
npm run dev
```


## References

* Bootstrap-vue is not quite ready for Vue3 (explained [here](https://bootstrap-vue.org/vue3))
* This Vue3 [setup](https://stackblitz.com/edit/bootstrap-vue-with-compat?file=main.js) is used
* build SPA with Pyodide, [tutorial](https://testdriven.io/blog/build-spa-with-python-part-3/)


## Broken Pyodide Deploy / ToDo

* vite does not build with static pyodide assets in `public/` dir, [ref](https://vitejs.dev/guide/assets.html#the-public-directory), [ref](https://stackoverflow.com/questions/72631935/vue3-vite-default-is-not-exported-by-xxx)
* vite should build index and public/ assets as a zip file, [ref](https://github.com/Ssis53/vite-plugin-zip), [ref](https://github.com/7th-Cyborg/vite-plugin-zip-pack)
* use pyodide to read a file, line-by-line, [ref](https://stackoverflow.com/questions/75871139/read-a-file-line-by-line-in-pyodide)
* install [pdftitle](https://github.com/metebalci/pdftitle), [pdfminer.six]()
* make pyodide available to any component, [ref](https://stackoverflow.com/questions/75949590/how-can-i-make-loadpyodide-available-to-any-component)
* explore alternative pyodide deploys which may solve many other problems, but may cause other difficulties for installing modules: [usePython](https://github.com/synw/usepython), [vuePython](https://github.com/synw/vuepython)