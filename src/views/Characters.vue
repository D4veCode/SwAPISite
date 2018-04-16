<template>
  <div class="about">

    <section class="d-flex flex-wrap flex-row" id="portfolio" >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 col-sm-6 portfolio-item" v-for="(char,index) in personajes" :key="index">
            <a class="portfolio-link" data-toggle="modal" :href="'#portfolioModal'+char.name">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img v-if="char.name == 'Ki-Adi-Mundi'" class="img-fluid peli-foto" :src="'images/characters/'+ char.name.split('-').join('_').toLowerCase()+'.jpg'" :alt="char.name">
              <img v-else class="img-fluid peli-foto" :src="'images/characters/'+ char.name.split(' ').join('_').toLowerCase()+'.jpg'" :alt="char.name">
            </a>
            <div class="portfolio-caption">
              <h4>{{char.name}}</h4>
              <p class="text-muted">Birth year: {{char.birth_year}}</p>
              <planets :url="char.homeworld"/>
            </div>
            
          </div>
        </div>
      </div>
      
    </section>
       <div class="portfolio-modal modal fade characters" v-for="(char,index) in personajes" :key="index" :id="'portfolioModal'+char.name" tabindex="-1" role="dialog" aria-hidden="true">
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
                  <h2 class="text-uppercase"> {{char.name}}</h2>
    
                  <species :url="char.species[0]"/>
                  <br>
                  <planets :url="char.homeworld"/>
                  <br>
                  <h2>Participation: </h2>
                  <films :url="char.films"/>
                  <button class="btn btn-outline-warning" data-dismiss="modal" type="button">
                    Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
           <div class="col-12 d-flex justify-content-center">
                <div class="btn-group" role="group" aria-label="Basic example" v-if="previous == null">
                    <button type="button" disabled class="btn btn-dark" @click="getPage(previous)">Previous</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=1')">1</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=2')">2</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=3')">3</button>
                    <button type="button" class="btn btn-dark" @click="getPage(next)">Next</button>
                </div>
               <div class="btn-group" role="group" aria-label="Basic example" v-if="(next == 'https://swapi.co/api/people/?page=2' || next == 'https://swapi.co/api/people/?page=3' || next == 'https://swapi.co/api/people/?page=4') && (previous != null)">
                    <button type="button" class="btn btn-dark" @click="getPage(previous)">Previous</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=1')">1</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=2')">2</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=3')">3</button>
                    <button type="button" class="btn btn-dark" @click="getPage(next)">Next</button>
                </div>
                <div class="btn-group" role="group" aria-label="Basic example" v-if="next == 'https://swapi.co/api/people/?page=5' || next == 'https://swapi.co/api/people/?page=6' || next == 'https://swapi.co/api/people/?page=7'">
                    <button type="button" class="btn btn-dark" @click="getPage(previous)">Previous</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=4')">4</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=5')">5</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=6')">6</button>
                    <button type="button" class="btn btn-dark" @click="getPage(next)">Next</button>
                </div>
                 <div class="btn-group" role="group" aria-label="Basic example" v-if="(next == 'https://swapi.co/api/people/?page=8' || next == 'https://swapi.co/api/people/?page=9') && (next!= null)">
                    <button type="button" class="btn btn-dark"  @click="getPage(previous)">Previous</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=7')">7</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=8')">8</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=9')">9</button>
                    <button type="button" class="btn btn-dark" @click="getPage(next)">Next</button>
                </div>
                <div class="btn-group" role="group" aria-label="Basic example" v-if="next == null">
                    <button type="button" class="btn btn-dark"  @click="getPage(previous)">Previous</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=7')">7</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=8')">8</button>
                    <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/people/?page=9')">9</button>
                    <button type="button" disabled class="btn btn-dark" @click="getPage(next)">Next</button>
                </div>
           </div>
       </div>
  </div>
</template>
<script>
import axios from 'axios'
import Specie from '../components/Species.vue'
import Planet from '../components/Planetas.vue'
import Film from '../components/Films.vue'

export default {
  name: 'home',
  components:{
     'species':Specie,
     'planets': Planet,
     'films': Film,
  },  
  mounted(){
    this.getCharacters();
  },
  data(){
    return{
      personajes:[],
      next: '',
      previous: ''
    }
  },
  methods:{
    getCharacters(){
        axios.get('https://swapi.co/api/people')
        .then(res =>{
          this.personajes = res.data.results;
          this.next = res.data.next;
          this.previous = res.data.previous;
        })
        .catch(err =>{
          alert("El error es el siguiente: " + err);
        })
    },
   getPage(path){
        axios.get(path)
        .then(res =>{
          this.personajes = [];
          this.personajes = res.data.results;
          this.next = res.data.next;
          this.previous = res.data.previous;
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
    height: 270px;
  }

</style>