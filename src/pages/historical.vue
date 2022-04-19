<template>
    <main>
        <div id="search-api">    
            <input v-model="dateID" type="date" name="date-search" id="date-search">
            <button v-on:click="dateChoose" id="button-search">Search for date</button>
        </div>

        <div class="card">
            <h2>BITCOIN</h2>                
                <p>USD: {{bitcoinPrice.usd}}</p>
                <p>BRL: {{bitcoinPrice.brl}}</p>
                <p>EUR: {{bitcoinPrice.eur}}</p>
        </div>
        <div class="card">
            <h2>DACXI</h2>                
                <p>USD: {{dacxiPrice.usd}}</p>
                <p>BRL: {{dacxiPrice.brl}}</p>
                <p>EUR: {{dacxiPrice.eur}}</p>
        </div>
        <div class="card">
            <h2>ETHEREUM</h2>                
                <p>USD: {{ethereumPrice.usd}}</p>
                <p>BRL: {{ethereumPrice.brl}}</p>
                <p>EUR: {{ethereumPrice.eur}}</p>
        </div>
        <div class="card">
            <h2>TERRA-LUNA</h2>                
                <p>USD: {{terra_lunaPrice.usd}}</p>
                <p>BRL: {{terra_lunaPrice.brl}}</p>
                <p>EUR: {{terra_lunaPrice.eur}}</p>
        </div>
        <div class="card">
            <h2>COSMOS</h2>                
                <p>USD: {{cosmosPrice.usd}}</p>
                <p>BRL: {{cosmosPrice.brl}}</p>
                <p>EUR: {{cosmosPrice.eur}}</p>
        </div>

    </main>
</template>

<script>

    import api from '../services/api.js';

   export default{
 
    name: 'Historical',
    

    data(){
        return{

            bitcoinPrice: {},
            dacxiPrice: {},
            ethereumPrice: {},
            terra_lunaPrice: {},
            cosmosPrice: {},  
            dateChoosen:'',
            dateID:''
                          
        }

    },

    methods:{
        
        dateChoose: function(){
            
            this.dateChoosen = this.dateID.split("-").reverse().join("-")

                api.get(`coins/bitcoin/history?date=${this.dateChoosen}`).then(response =>{
                this.bitcoinPrice = response.data.market_data.current_price
                })        

                api.get(`coins/ethereum/history?date=${this.dateChoosen}`).then(response =>{
                this.ethereumPrice = response.data.market_data.current_price
                })      

                api.get(`coins/cosmos/history?date=${this.dateChoosen}`).then(response =>{
                this.cosmosPrice = response.data.market_data.current_price
                })      

                api.get(`coins/dacxi/history?date=${this.dateChoosen}`).then(response =>{
                this.dacxiPrice = response.data.market_data.current_price
                })      

                api.get(`coins/terra-luna/history?date=${this.dateChoosen}`).then(response =>{
                this.terra_lunaPrice = response.data.market_data.current_price
                })
           
        }
    },

       

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

.card-date{

    width: 50vw;
    height: 30vh;
    background-color: var(--color-background-card);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.246) 10px 10px;
    align-items: center;

}

.card h2{
    background-color: var(--color-background-home);
    width: 100%;
    text-align: center;
    color: white;
}

.card p{
    font-size: 1.0em;
}

#search-api{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 15vw;
}

#button-search{

    width: 10em;
    height: 2.5em;
    border-radius: 5px;
    border: none;
    background-color: var(--color-background-button);
    box-shadow: black 2px 2px;
    color: white;
}

#button-search:hover{
    cursor:pointer
}

#date-search{
    
    width: 10em;
    height: 2.5em;
    border-radius: 5px;
    border: none;
    box-shadow: black 2px 2px;
    
}

@media (min-width: 700px){

    

    main{
        justify-content: space-around;
        height: calc(100vh - 120px);
        flex-direction: row;
    }

    .card{        
       
        width: 15vw;
        height: 20vw;
    }

    .card-date{
    
    width: 70vw;
    height: 10vh;
    background-color: var(--color-background-card);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.246) 10px 10px;
    align-items: center;

    }
 
    
}

</style>