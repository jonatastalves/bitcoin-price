<template>
  <div id="app">

    <Header />
    <home />
    
  </div>
</template>

<script>

import './styles/global.css'

import Header from './components/Header';
import Home from './pages/home'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>
