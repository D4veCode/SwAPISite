<template>
  <div class="species">
        <p class="mb-0"><b>Language</b>: {{specie.language}}</p>
        <p class="mb-0"><b>Classification</b>: {{specie.classification}}</p>
        <p class="mb-0"><b>Specie Name</b>: {{specie.name}}</p>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'species',
  props: ['url'],
  mounted(){
    this.getSpecies();
  },
  data(){
    return{
      specie:{}
    }
  },
  methods:{
    getSpecies(){
        //console.log(this.url)
        axios.get(this.url)
        .then(res =>{
          //console.log(res.data);
          this.specie = res.data;
          //console.log(this.specie);
        })
        .catch(err =>{
          alert("El error es el siguiente: " + err);
        })
    }
  }
}
</script>
