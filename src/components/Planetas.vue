<template>
  <div class="species">
        <p class="mb-0"><b>Homeworld</b>: {{planet.name}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'planetas',
  props: ['url'],
  mounted(){
    this.getPlanets();
  },
  data(){
    return{
      planet:{}
    }
  },
  methods:{
    getPlanets(){
        //console.log(this.url)
        axios.get(this.url)
        .then(res =>{
          //console.log(res.data);
          this.planet = res.data;
          //console.log(this.planet);
        })
        .catch(err =>{
          alert("El error es el siguiente: " + err);
        })
    }
  }
}
</script>