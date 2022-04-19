<template>
    <div>
        <main>
            <div class="card" v-for="(coinPrice,index) in coinsPrice" :key="index">
                <h2>{{index.toUpperCase()}}</h2>                
                <p>USD: {{coinPrice.usd}}</p>
                <p>BRL: {{coinPrice.brl}}</p>
                <p>EUR: {{coinPrice.eur}}</p>
            </div>
        </main>
    </div>
</template>
<script>
import api from '../services/api.js';

export default{
 
    name: 'home',
    data(){
        return{
            coinsPrice: {}
        }
    },
     mounted(){
        api.get('/price?ids=bitcoin%2Cethereum%2Ccosmos%2Cdacxi%2Cterra-luna&vs_currencies=usd%2Cbrl%2Ceur').then(response =>{
            this.coinsPrice = response.data
        })
    }
}


</script>

<style scoped>

main{
    background-color: var(--color-background-home);
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 220vh;
}

.card{
    width: 50vw;
    height: 30vh;
    background-color: var(--color-background-card);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.246) 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.card h2{
    background-color: var(--color-background-home);
    width: 100%;
    text-align: center;
    color: white;
}

.card p{
    font-size: 1.5em;
}

@media (min-width: 700px){

    main{
        justify-content: space-around;
        flex-direction: row;
        height: calc(100vh - 120px);
    }

    .card{        
       
        width: 15vw;
        height: 20vw;
    }
    
}

</style>
