<template>
  <div class="container">
    <b-jumbotron
      header="Visual Document Index"
      lead="Bring your files to life"
    >
      <!--<b-button variant="primary" @click="showModal"> Click me! </b-button>-->
    </b-jumbotron>
  </div>
  <b-container>
    <b-row>
      <b-col cols="5">Image</b-col>
      <b-col cols="7">
        <ImportData v-on:set-child-data="updateParent" />
        <div>Search</div>
        <div>{{ files }}</div>
        <Test/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
      Table
    </b-col>
    </b-row>
  </b-container>
</template>

<script>
//import pyodide from './utils.js'
//const pyodide = await import('./utils.js');
//pyodide.init()

import { loadPyodide } from 'pyodide';
import { BIcon, BIconCamera } from 'bootstrap-vue';
import ImportData from './ImportData.vue';
//import Test from './Test.vue';

export default {
  name: '',
  components: {
    ImportData
  },
  data(){return {
    files: []
    }
  },
  methods: {
    updateParent (newFiles){
      for(const file of newFiles){
        this.files.push(file);
      }
      loadPyodide({ indexURL: '/node_modules/pyodide/' }).then(
        (pyodide) => {
          console.log( pyodide.runPython(`"Hello from pyodide"`) )
        }
        );
      /*
      async function main(){
        let pyodide = await loadPyodide();
        
        await pyodide.loadPackage("micropip")
        const micropip = pyodide.pyimport("micropip");
        await micropip.install('pdfminer.six');
        //let micropip = pyodide.pyimport('"pdfminer.six"');
        console.log(pyodide.runPython(`
        import pdfminer
        pdfminer.__version__`
        ));
        console.log(pyodide.runPython("1 + 2"));
      }
      main();*/
    }
    /*
    showModal() {
      this.$bvModal.msgBoxOk('Modal from @vue/compat');
    },*/
  },
};
</script>
