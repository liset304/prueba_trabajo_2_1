<template>
    <div class="logIn_user">
        <div class="container_logIn_user">
            <h2>FILTRAR LAS PROPIEDADES</h2>
            <h3>Ingrese alguna de las opciones</h3>
            <form v-on:submit.prevent="processloginUser">
                <input type="text" placeholder="Nombre propietario" v-model="user.name">
                <br/>
                <input type="text" placeholder="# de Cedula" v-model="user.idUser">
                <br/>
                <input type="text" placeholder="Nombre del predio" v-model="user.idUser">
                <br/>
                <input type="text" placeholder="Numero catastral" v-model="user.idUser">
                <br/>
                <button type="submit"> Buscar </button> 
            </form> 
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'inicioexitoso',
        data: function(){
            return{
                user:{
                    username:"",
                    password:""
                }
            }
        },
        methods: {
            processloginUser: function(){
                axios.post(
                    'end point de produccion',
                    this.user,
                    {headers:{}}
            )
            .then((result) => {
                let dataLogin = {
                    username: this.user.username,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh
                }

                this.$emit('completedLogIn',dataLogin)

            })
            .catch((error)=>{
                if(error.response.status == "401")
                    alert("Complete todo los campos");

            });
        }
    }    
}
</script>

<style>
 .logIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_logIn_user {
        border: 3px solid  #283747;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logIn_user h2{
        color: #283747;

    }
    .logIn_user h3{
        color: #283747;

    }

    .logIn_user form{
        width: 75%;
        
    }

    .logIn_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #283747;
    }

    .logIn_user button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }

    .logIn_user button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #283747;
    }



</style>