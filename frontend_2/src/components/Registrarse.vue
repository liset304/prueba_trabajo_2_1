<template>
    <div class="logIn_user">
        <div class="container_logIn_user">
            <h2>Registrate Ahora</h2>
            <form v-on:submit.prevent="processloginUser">
                <input type="text" v-model="user.idUser" placeholder="Cedula">
                <input type="text" placeholder="username" v-model="user.username">
                <br/>
                <input type="password" placeholder="password" v-model="user.password">
                <br/>
                <input type="text" v-model="user.name" placeholder="Nombre completo">
                <br/>
                <input type="text" v-model="user.email" placeholder="Email">
                <br/>
                <input type="text" v-model="user.Tipo" placeholder="Tipo de Persona
                                                                     (Natural o Juridica)">
                <br/>
                <button class="login" v-if="!is_auth" v-on:click="loadLogIn" > Registrate </button>

            </form> 
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'singUp',
        data: function(){
            return{
                user:{
                id:"",    
                username: "",
                password: "",
                name: "",
                email: "",
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
                    alert("Las credenciales son incorrectas.");

            });
        }
    }    
}
</script>

<style>
 .logIn_user{
        margin: 0;
        padding: 100%;
        height: 0%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_logIn_user {
        border: 1px solid  #4e1cc2;
        border-radius: 1px;
        width: 70%;
        height: 100%;
        top: 0%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logIn_user h2{
        color: #283747;

    }

    .logIn_user form{
        width: 8%;
        
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