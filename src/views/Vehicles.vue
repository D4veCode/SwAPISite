<template>
  <div class="Vehicles">
    <div class="row">
      <div class="col-12 col-md-3 col-sm-12 d-flex flex-wrap flex-row justify-content-around" v-for="(veh, index) in vehiculos" :key="index">
        <div class="card mb-2" style="width: 18rem;">
          <div class="card-body">
            <h3 class="card-title">{{veh.name}}</h3>
            <h5 class="card-subtitle mb-2 text-muted"><b>Vehicle Class: </b>{{veh.vehicle_class}}</h5>
          </div>
          <h3 class="card-title">Vehicle Data: </h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Model: {{veh.model}}</li>
            <li class="list-group-item">Length: {{veh.length}}</li>
            <li class="list-group-item">Crew: {{veh.crew}}</li>
            <li class="list-group-item">Passengers Capacity: {{veh.passengers}}</li>
          </ul>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <div class="btn-group" role="group" aria-label="Basic example" v-if="previous == null">
          <button type="button" disabled class="btn btn-dark" @click="getPage(previous)">Previous</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=1')">1</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=2')">2</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=3')">3</button>
          <button type="button" class="btn btn-dark" @click="getPage(next)">Next</button>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example" v-if="(next == 'https://swapi.co/api/vehicles/?page=2' || next == 'https://swapi.co/api/vehicles/?page=3' || next == 'https://swapi.co/api/vehicles/?page=4') && (previous != null)">
          <button type="button" class="btn btn-dark" @click="getPage(previous)">Previous</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=1')">1</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=2')">2</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=3')">3</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=4')">4</button>
          <button type="button" class="btn btn-dark" @click="getPage(next)">Next</button>
        </div>
               
        <div class="btn-group" role="group" aria-label="Basic example" v-if="next == null">
          <button type="button" class="btn btn-dark" @click="getPage(previous)">Previous</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=1')">1</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=2')">2</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=3')">3</button>
          <button type="button" class="btn btn-dark" @click="getPage('https://swapi.co/api/vehicles/?page=4')">4</button>
          <button type="button" disabled class="btn btn-dark" @click="getPage(next)">Next</button>
        </div>
     </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'home',
  mounted(){
    this.getVehicles();
  },
  data(){
    return{
      vehiculos:[],
      next: '',
      previous: ''
    }
  },
  methods:{
    getVehicles(){
        axios.get('https://swapi.co/api/vehicles')
        .then(res =>{
            this.vehiculos = res.data.results;
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
            this.vehiculos = res.data.results;
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
.card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-color: #BDBDBD
}

.card {
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 2px;
  background-clip: padding-box;
}
.card span.card-title {
    color: #fff;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
}

.card .card-content {
  padding: 16px;
  border-radius: 0 0 2px 2px;
  background-clip: padding-box;
  box-sizing: border-box;
}
.card .card-content p {
  margin: 0;
  color: inherit;
}
.card .card-content span.card-title {
  line-height: 48px;
}
.card .card-action {
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  padding: 16px;
}
.card .card-action a {
  color: #ffab40;
  margin-right: 16px;
  transition: color 0.3s ease;
  text-transform: uppercase;
}
.card .card-action a:hover {
  color: #ffd8a6;
  text-decoration: none;
}
.card-title{
    font-family: Raleway;
    
}

ul > li{
    font-family: Gugi;
    background-color: black;
    color: white;
}
</style>
