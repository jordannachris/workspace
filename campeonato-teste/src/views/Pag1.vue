<template> 
<div>
    <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
  export default {
      name:'Pag1',
        data() {
            return {
                valores: []
            }},
        created() {
            fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
            .then(resposta => resposta.json())
            .then (json => 
                    this.valores = json)
        }
  
  }
</script>

<style scoped>
</style>