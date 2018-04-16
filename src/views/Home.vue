<template>
  <div class="home">
    <section class="d-flex flex-wrap flex-row" id="portfolio" >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-sm-6 portfolio-item" v-for="(peli,index) in peliculas" :key="index">
            <a class="portfolio-link" data-toggle="modal" :href="'#portfolioModal'+peli.episode_id">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid peli-foto" :src="'images/'+ peli.title.split(' ').join('_').toLowerCase()+'.jpg'" :alt="peli.title">
            </a>
            <div class="portfolio-caption">
              <h4>{{peli.title}}</h4>
              <p class="date"> <b>Release Date: </b>{{peli.release_date}}</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <div class="portfolio-modal modal fade" v-for="(peli,index) in peliculas" :key="index" :id="'portfolioModal'+peli.episode_id" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Episode {{peli.episode_id}}: {{peli.title}}</h2>
      
                  <iframe v-if="peli.episode_id == 4" src="https://www.youtube.com/embed/vZ734NWnAHA" frameborder="0" width="600" height="400"></iframe>
                  <iframe v-if="peli.episode_id == 5" src="https://www.youtube.com/embed/JNwNXF9Y6kY" frameborder="0" width="600" height="400"></iframe>
                  <iframe v-if="peli.episode_id == 6" src="https://www.youtube.com/embed/7L8p7_SLzvU" frameborder="0" width="600" height="400"></iframe>
                  <iframe v-if="peli.episode_id == 1" src="https://www.youtube.com/embed/bD7bpG-zDJQ" frameborder="0" width="600" height="400"></iframe>
                  <iframe v-if="peli.episode_id == 2" src="https://www.youtube.com/embed/gYbW1F_c9eM" frameborder="0" width="600" height="400"></iframe>
                  <iframe v-if="peli.episode_id == 3" src="https://www.youtube.com/embed/5UnjrG_N8hU" frameborder="0" width="600" height="400"></iframe>
                  <iframe v-if="peli.episode_id == 7" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" width="600" height="400"></iframe>
                 
                  <p class="text-justify">{{peli.opening_crawl}}</p>
                  <ul>
                    <li> <b>Release Date:</b> {{peli.release_date}}</li>
                    <br>
                    <li><b>Producer:</b> {{peli.producer}}</li>
                    <br>
                    <li><b>Director:</b>  {{peli.director}}</li>
                  </ul>
                  <char :url="peli.characters"/>
                  <button class="btn btn-outline-warning" data-dismiss="modal" type="button">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Char from '../components/Char.vue'

export default {
  name: 'home',
  mounted(){
    this.getFilms();
  },
  components:{
    'char': Char
  },
  data(){
    return{
      peliculas:[]
    }
  },
  methods:{
    getFilms(){
        axios.get('https://swapi.co/api/films/')
        .then(res =>{
          this.peliculas = res.data.results;
          this.peliculas.sort((a,b)=>parseInt(a.release_date.slice(0,4))-parseInt(b.release_date.slice(0,4)));
        })
        .catch(err =>{
          alert("El error es el siguiente: " + err);
        })
    }
  }
}
</script>
<style scoped>
  .peli-foto{
    width: 300px;
    height: auto;
  }
 .date{
   color: whitesmoke;
 }
</style>
