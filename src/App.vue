<template>
  <div id="app">

    <Header />
    <Home />
    <Footer />
    
  </div>
</template>

<script>

import './styles/global.css'

import Header from './components/Header';
import Home from './pages/home'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>
