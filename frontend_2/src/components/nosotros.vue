<template>
   
    <div class="main-component">
        <div class=""> 
            <h1>NUESTRO EQUIPO DE DESARROLLADORES</h1>

        </div>
        <br/>
        <div class="imagen"> 
            <button class = "b1" v-if="!is_auth">
            </button>
            <h1>LISET JOHANA BERNAL RAMIREZ</h1>
            <h4>Ingeniera informática egresada
                de la Universidad Internacional
                de La Rioja (España) con
                habilidades para solucionar
                problemas y gusto por la
                investigación y los retos
                laborales.
            </h4>  
        </div>
        
    </div>
</template>
<script>
export default {
        name: 'nosotros',    
}
</script>
<style>
.main-component {
  width:100%;
  height: 95%;
  font-family:'Segoe UI';
  text-decoration: none;
  color: rgb(248, 247, 255);
  position: sticky;
  font-size: 15px;
  text-align: center ;
  position: center;
  
}

.imagen {
  width:100%;
  height: 95%;
  font-family:'Segoe UI';
  text-decoration: none;
  color: rgb(248, 247, 255);
  background: linear-gradient(70deg, rgb(37, 58, 126), rgb(60, 89, 105));
  position: sticky;
  font-size: 15px;
  text-align: center ;
  position: center;
}

.imagen  .b1{
   
   background: transparent;
   color: rgb(19, 29, 25);
   position: center;
   top: 1px;
   left: 400px;
   border: none;
   font-size: large; 
}
</style>