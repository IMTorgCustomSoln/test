<template>
    <div>{{ this.addResult }}</div>
</template>

<script>
const pyodide = await import('./utils.js')

/*
pyodide.onReady(instance){
    instance.runPython(`
            import sys
            sys.version`)
};*/


export default ({
    name: 'Test',
    data(){return{
        addResult: 1
    }}
}

</script>