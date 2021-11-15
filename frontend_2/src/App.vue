<template>
  <div id="app" class="app">
    <div class="header"> 
      <nav class="nav">
          <button class = "b1" v-if="!is_auth">
          </button>
       <button class="b2" v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
       <button class="b3" v-if="!is_auth" v-on:click="loadLogIn">Login</button>
       <button v-if="is_auth">Cerrar sesión</button>
       <button v-if="is_auth" v-on:click="loadInicio">Inicio</button>
      </nav>
    </div>
    <div class="barra">
      <nav class="nav">
        <button class = "b1" v-if="!is_auth" v-on:click="loadInicio">Inicio</button>
       <button class="b2" v-if="!is_auth" v-on:click="loadnosotros" >Nosotros</button>
       <button class="b3" v-if="!is_auth" >Preguntas Frecuentes</button>
       <button class = "b1" v-if="is_auth">Inicio</button>
       <button class="b2" v-if="is_auth" v-on:click="loadnosotros" >Nosotros</button>
       <button class="b3" v-if="is_auth" v-on:click="loadLogIn">Preguntas Frecuentes</button>
      </nav>
    </div>
    <div class="centro"> 
      <router-view
      v-on:completedInicio="completedInicio"
      v-on:completedLogin="completedLogin"
      v-on:completedSingUp="completedSingUp"
      v-on:completednosotros="completednosotros"
      > </router-view>
    </div>
    <div class="footer">
      <h7>
        © Todos los Derechos Reservados | Carrera 14b # 112 - 17 | Bogota - Colombia | info@arcerojas.com | +571 743 5810 / 321 644 2383
      </h7>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'app',

    data: function(){
          return{
            is_auth: false
          }
    },
    components:{

    },

    methods:{
        verifyAuth: function() {
        if(this.is_auth == false)
        this.$router.push({name: "inicio"})
        },
        loadInicio: function(){
        this.$router.push({name: "inicio"})
        },
        loadLogIn: function(){
        this.$router.push({name: "login"})
        },
        loadSignUp: function(){
        this.$router.push({name: "singUp"})
        },
        loadnosotros: function(){
        this.$router.push({name: "nosotros"})
        },
        completedInicio: function(data) {},
        completedLogIn: function(data) {},
        completedSignUp: function(data) {},
        completednosotros: function(data) {},
      },

      created: function(){
        this.verifyAuth()
      }     
}
</script>
<style>
.app{ 
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: rgb(220, 242, 252);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.app .header {
  display: flex;
  font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  top: 35px;
  width: 99%;
  height: 14%;
  background-color: rgb(220, 242, 252);
  
}

.app .barra {
  display: flex;
  font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  top: 70px;
  background-color: rgb(121, 187, 218);
  width:100%;
  height: 10%;
  
}
.app .header .nav{
  display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  color: #fff;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  
  

}


.app .barra .nav{
  display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  text-decoration: none;
  color: rgb(214, 231, 172);
  width: 95%;
  position: -webkit-sticky;
  position: sticky;
  left:20%;
  
}


.app .header .nav  .b1{
   border:none;
   background: rgb(220, 242, 252);
   width: 22%;
   background-image: url("./assets/logo1.1.png");
   
}



.app .barra .nav  .b1{
  
   background: transparent;
   color: rgb(19, 29, 25);
   position: -webkit-sticky;
   position: sticky;
   top: 1px;
   left: 400px;
   border: none;
   font-size: large; 
}

.app .barra .nav  .b1:hover{
  
   background: rgb(133, 160, 149);
   color: rgb(217, 235, 228);
   position: -webkit-sticky;
   position: sticky;
   top: 1px;
   left: 400px;
   border: none;
   font-size: large;  
}
.app .header .nav .b2{   
    width: 60px;
    height: 35px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: transparent;
    border-radius: 7px;
    font-size: larger;
    transition: 00.5s;
    color: rgb(34, 81, 212);
    position: sticky;
    width: 10%;
    left: 78%
    
   
}

.app .barra .nav  .b2:hover{
  
   background: rgb(133, 160, 149);
   color: rgb(217, 235, 228);
   position: -webkit-sticky;
   position: sticky;
   top: 1px;
   left: 500px;
   border: none;
   font-size: large;  
}
.app .barra .nav .b2{   
   background: transparent;
   width: 10%;
   position: -webkit-sticky;
   position: sticky;
   top: 1px;
   left: 500px;
   font-size: large;
   border: none;
   color: rgb(19, 29, 25);

   
}

.app .header .nav .b3{   
    
    width: 60px;
    height: 35px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #82a24c;
    border-radius: 7px;
    font-size: 15px;
    transition: 00.5s;
    color: #fff;
    position: sticky;
    width: 10%;
    left: 88.5%;

}
.app .header .nav .b3:hover{   
    
    width: 60px;
    height: 35px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #c4f373;
    color: #0c0c0c;
    border-radius: 7px;
    font-size: 15px;
    position: sticky;
    width: 10%;
    left: 88.5%;
}

.app .barra .nav .b3{   
    
   background: transparent;
   border:none;
   color: rgb(19, 29, 25);;
   position: -webkit-sticky;
   position: sticky;
   top: 15px;
   left: 700px;
   font-size: large;
}

.app .barra .nav  .b3:hover{
  
   background: rgb(133, 160, 149);
   color: rgb(217, 235, 228);
   position: -webkit-sticky;
   position: sticky;
   top: 1px;
   border: none;
   font-size: large;
   left: 700px;  
}

.footer{
   width:100%;
    height: 30px;
    background: rgba(53, 61, 82, 0.75);
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    text-align: center;
}

.centro {
  width:100%;
  height: 74.5%;
  display: flex;
  font-family:'Segoe UI';
  text-decoration: none;
  color: white;
  position: sticky;
  text-align: center ;
  position: center;
  
}

</style>

