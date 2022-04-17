<template>
    <div>
        <main>
            <div class="card"></div>
        </main>
    </div>
</template>
<script>

export default{
    name: 'home'
}
</script>

<style scoped>

main{
    background-color: var(--color-background-home);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.card{
    width: 70vw;
    height: 60vh;
    background-color: var(--color-background-card);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.246) 10px 10px;
}

@media (min-width: 700px){

    main{
        justify-content: space-around;
    }

    .card{        
       
        width: 80vw;
        height: 35vw;
    }
    
}

</style>
