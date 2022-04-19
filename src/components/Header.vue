<template>
    <header>
        <nav class="container">
            <router-link to="/"><img alt="Bitcoin-price" id="logo" src="https://theme.zdassets.com/theme_assets/2284639/4b20ea7e1106988b0e6b99903a770e49692d7080.png"></router-link>

            <img v-on:click="openMenu" alt="Abrir menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">

            <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

            <div id="menu-items" :class="{active:menuActive}">

                <img alt="Bitcoin-price" id="menu-logo" src="https://cdn-images-1.medium.com/max/1200/1*UlDujYjQ6qMTV_b2klTOYg.png">

            <div id="search-api">    
                <input type="date" name="date-search" id="date-search">
                <router-link to ="/historical"><input type="button" value="Search for date" id="button-search"></router-link>
            </div>                

            </div>

        </nav>
    </header>
</template>

<script>

export default{
    name: 'Header',
    data(){
        return {
            menuActive: false
        }
    },
    methods:{
        openMenu: function(){
            this.menuActive = true;
        },
        closeMenu: function(){
            this.menuActive = false;
        }
    }
}
</script>

<style scoped>

header{
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
}

#logo{
    width: 100px;
}

#menu-button{
    width: 25px;
}

#menu-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
}

#menu-logo{
    width: 40px;
    margin-top: 10px;
    margin-bottom: 20px;
}

#menu-items{
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#menu-items.active{
    display: flex;
}

#historical{

    color: var(--color-text-light);

}

#search-api{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 10%;
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
    
    #menu-button, #menu-logo, #menu-overlay{
        display: none;
    }
    #menu-items{
        display: flex;
        flex-direction: row;
        position: static;
        height: 60px;
        width: 18%;
    }
    #search-api{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    }
     
}


</style>