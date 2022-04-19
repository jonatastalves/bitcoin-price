<template>
    <main>
           
        <div class="card">
            <h2>BITCOIN</h2>                
                <p></p>
                <p></p>
                <p></p>
        </div>
        <div class="card">
            <h2>DACXI</h2>                
                <p></p>
                <p></p>
                <p></p>
        </div>
        <div class="card">
            <h2>ETHEREUM</h2>                
                <p></p>
                <p></p>
                <p></p>
        </div>
        <div class="card">
            <h2>TERRA-LUNA</h2>                
                <p></p>
                <p></p>
                <p></p>
        </div>
        <div class="card">
            <h2>COSMOS</h2>                
                <p></p>
                <p></p>
                <p></p>
        </div>

    </main>
</template>

<script>
    export default{
        name:'Historical'
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
    font-size: 1.5em;
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