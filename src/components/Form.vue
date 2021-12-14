<template lang="es">
<div align="left">

        <h2>Conversor a Dólares</h2>
        <div>
          Ingrese Monto $: <input type="text" v-model="pesos"><br>
          Valor del dolar en $: <input type="text" v-model="valorDolar"> 
          - Actualización<input type="checkbox" v-model="isServiceOn"/> {{ time }}
          <Conversor :pesos="pesos" :valorDolar="valorDolar" :isServiceOn="isServiceOn"
             @time="time=$event"
            />
        </div>
        <p>------------- Teoria -------------<br>
          1:c<br>
          2:b<br>
          3:c<br>
          4:a<br>
          5:b</p>
</div>
</template>

<script lang="js">
  import Conversor from './Conversor.vue'
  export default  {
    name: 'src-components-conversor',
    components: {
      Conversor
    },
    mounted () {
    },
    data () {
      return {
        valorDolar: 0,
        pesos: 0,
        isServiceOn: false,
        time: ''
      }
    },
    methods: {
      },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-conversor {

  }

  .jumbotron {
  padding: 32px !important;
}
</style>
