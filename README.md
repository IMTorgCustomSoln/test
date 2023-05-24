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