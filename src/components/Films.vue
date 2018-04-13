<template>
  <div class="species">
        <ul>
          <li v-for="(film, index) in films" :key="index" class="mb-0"><b>Episode {{film.episode_id}}:</b>  {{film.title}}&nbsp; </li>
        </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'films',
  props: ['url'],
  mounted(){
    this.getFilms(this.url);
  },
  data(){
    return{
      films:[]
    }
  },
  methods:{
    getFilms(path){
      this.films = [];
      for(var i = 0; i < path.length; i++){
        console.log(path[i]);
        axios.get(path[i])
        .then(res =>{
          //console.log(res.data);
          this.films.push(res.data);
         
        })
        .catch(err =>{
          alert("El error es el siguiente: " + err);
        })
      }
    }
  }
}
</script>
<style scoped>
ul>li{
  display: inline-block;
}
</style>
