<template lang="es">

  <section class="src-components-conversor">
    <h5>Valor Convertido USD: {{ Number.isNaN(resultado)? '' : resultado.toFixed(2) }}</h5>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-conversor',
    props: ['pesos', 'valorDolar', 'isServiceOn'],
    mounted () {
     
    setInterval(() => {
        if(this.isServiceOn) this.getCotizaciones();
      }, 2000);
    },
    data () {
      return {
        url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
        precioDolar: 0,
        time: new Date().toLocaleString()
      }
    },
    methods: {
      limpiar() {
        this.time = ''
        this.$emit('time', this.time)
      },
      async getCotizaciones() {
        try {
          let respuesta = await this.axios(this.url)
          let dolarWS = respuesta.data.find(d => d.casa.nombre === 'Dolar Blue')
          this.precioDolar = parseFloat(dolarWS.casa.venta.replace(",", "."))
          this.time = new Date().toLocaleString();
          this.$emit('time', this.time);
          this.$emit('valorDolarSrv', this.precioDolar);
        }
        catch(error) {
          console.error(error)
        }
      }

    },
    computed: {
        resultado: function () {

           if(this.isServiceOn) {
             this.getCotizaciones();
               return this.pesos / this.precioDolar;
             } else {
               this.limpiar();
               return this.pesos / this.valorDolar;
             }
           
          
       }
    }
}


</script>

<style scoped lang="css">
  .src-components-conversor {

  }
</style>
