<template>
<table class="tabla">

  <tr>

    <th scope="row">Propiedades</th>

    <th>datos</th>

  </tr>

  <tr>

    <th>documento de identificación</th>

    <td></td>

  

  </tr>

  <tr>

    <th>Nombre del propietario</th>

    <td></td>

  </tr>

  <tr>

    <th>numero de matricula inmobiliaria</th>

    <td></td>

    

  </tr>
   <tr>

    <th>Nombre de Predio</th>

    <td></td>
  </tr>
   <tr>

    <th>dirección del predio</th>

    <td></td>
  </tr>
</table>
</template>
<script>
export default {
        name: 'enlistar',    
}
</script>

<style>
.tabla {
  width:90%;
  height: 95%;
  margin: 20 1 5 6;
  font-family:'Segoe UI';
  text-decoration: none;
  color: rgb(248, 247, 255);
  background: linear-gradient(70deg, rgb(37, 58, 126), rgb(60, 89, 105));
  font-size: 15px;
  text-align: center ;
  border-color: tomato;
}

th, td {
   width: 25%;
   text-align: center;
}
</style>