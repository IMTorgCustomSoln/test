//const { loadPyodide } = require("pyodide");
//import { loadPyodide } from "pyodide";
//import  loadPyodide  from "/workspaces/spa-visual-doc-index/node_modules/pyodide/pyodide.js";
//import "/workspaces/spa-visual-doc-index/node_modules/pyodide";
//import "pyodide"

export default {
    instance: null,
    readyCallbacks: [],
    // initiate the pyodide instance
    async init() {
      // only initiate once
      if (!this.instance) {
        this.instance = await loadPyodide();
        // after initiating success, execute the callback queue
        this.readyCallbacks.forEach((func) => {
          func(this.instance);
        });
        this.readyCallbacks = []
      }
    },
    // use this function to ensure the instance is initiated
    onReady(func) {
      if (!this.instance) {
        this.readyCallbacks.push(func);
      } else {
        func(this.instance);
      }
    },
  };
  