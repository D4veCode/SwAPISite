<template>
  <div id="app">
    <h1 class="site-heading text-center text-white d-none d-lg-block">
      <span class="site-heading-upper text-primary mb-3">A Free and Nice Star Wars API viewer for Fans!</span>
      <span class="site-heading-lower fuente">STAR WARS API</span>
    </h1>
   	<nav class="navbar navbar-expand-lg navbar-dark py-lg-4 sticky-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="/"><img src="./assets/img/star.svg" alt="starwars"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mx-auto" id="menu">
            <li class="nav-item px-lg-4 active" v-if="url == '/'">
             <router-link class="nav-link text-uppercase text-expanded " router-link-active to="/"> 
                Home
                <span class="sr-only">(current)</span>
             </router-link>
            </li>
             <li class="nav-item px-lg-4" @click="getUrl" v-else>
             <router-link class="nav-link text-uppercase text-expanded " router-link-active to="/"> 
                Home
                <span class="sr-only">(current)</span>
             </router-link>
            </li>
            <li class="nav-item px-lg-4 active" v-if="url == '/personajes'">
              <router-link class="nav-link text-uppercase text-expanded" router-link-active to="/personajes"> 
                Characters
             </router-link>
            </li>
            <li class="nav-item px-lg-4" @click="getUrl" v-else>
              <router-link class="nav-link text-uppercase text-expanded" router-link-active to="/personajes"> 
                Characters
             </router-link>
            </li>
            <li class="nav-item px-lg-4 active" v-if="url == '/planetas'">
              <router-link class="nav-link text-uppercase text-expanded" router-link-active to="/planetas"> 
                Planets
             </router-link>
            </li>

            <li class="nav-item px-lg-4" @click="getUrl" v-else>
              <router-link class="nav-link text-uppercase text-expanded" router-link-active to="/planetas"> 
                Planets
             </router-link>
            </li>
            <li class="nav-item px-lg-4 active" v-if="url == '/naves'">
             <router-link class="nav-link text-uppercase text-expanded" router-link-active to="/naves"> 
                Ships
             </router-link>
            </li>
             <li class="nav-item px-lg-4" @click="getUrl" v-else>
             <router-link class="nav-link text-uppercase text-expanded" router-link-active to="/naves"> 
                Ships
             </router-link>
            </li>
            <li class="nav-item px-lg-4 active" v-if="url == '/navesEstelares'">
             <router-link class="nav-link text-uppercase text-expanded" router-link-active to="/navesEstelares"> 
                Starships
             </router-link>
            </li>
            <li class="nav-item px-lg-4" @click="getUrl" v-else>
             <router-link class="nav-link text-uppercase text-expanded" router-link-active to="/navesEstelares"> 
                Starships
             </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <transition name="fade"><router-view/></transition>
      
    <footer class="footer text-faded text-center py-5 mt-4">
      <div class="container">
        <ul>
          <li><a href="https://twitter.com/DavidWrote" target="blank" class="fa fa-twitter" id="twitter"></a></li>
          <li><a href="https://www.instagram.com/davidalejandrosb/" target="blank" class="fa fa-instagram" id="instagram"></a></li>
          <li><a href="https://github.com/D4veCode" target="blank" class="fa fa-github" id="facebook"></a></li>
        </ul>
        <p class="m-0 small">Copyright &copy; David Serrada 2018</p>
      </div>
    </footer>
    
  </div>

</template>
<script>
export default {
  name: 'app',
  mounted(){
    this.getUrl();
  },
  data(){
    return{
      url: ''
    }
  },
  methods:{
    getUrl(){
      this.url = this.$route.path;
    }
  }
}
</script>

<style>
@font-face {
    font-family: "starjedi";
    font-style: normal;
    font-weight: normal;
    src: local("?"), url("../public/fonts/Starjedi.eot") format("eot"), url("../public/fonts/Starjedi.ttf") format("truetype");
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
.fuente{
  font-family: starjedi, Raleway;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
ul{
  padding-left: 0;
}
ul li {
  display: inline-block;
  align-content: center;
}
ul li a {
    text-decoration-style: none;
}
.fa {
    padding: 8px;
    font-size: 30px;
    width: 1.5em;
    text-align: center;
    text-decoration: none;

    color: white
 
}
footer p {
  align-content: center;
}
a .fa:hover{
   text-decoration-style: none;
   color:white
}
</style>
