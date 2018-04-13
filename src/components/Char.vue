<template>
  <div class="char">
        <ul>
          <li v-for="(char, index) in chars" :key="index" class="mb-0">{{char.name}} &nbsp; </li>
        </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'char',
  props: ['url'],
  mounted(){
    this.getChars();

  },
  data(){
    return{
      chars:[]
    }
  },
  methods:{
    getChars(){
      for(var i = 0; i < this.url.length; i++){
        //  console.log(this.url[i]);
        axios.get(this.url[i])
        .then(res =>{
          //console.log(res.data);
          this.chars.push(res.data);
         
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