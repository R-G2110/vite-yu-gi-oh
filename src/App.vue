<script>

import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
      .then( result =>{
        store.cardList = result.data.data;
        
      })
      .catch(err => {
        console.log(err);
      })

    }
  },
  mounted(){
    this.getApi();
    console.log('card list: ' + store.cardList.length);
  }
}
</script>

<template>
  <Header titleStr="Yu-Gi-Oh Api" />
  <Main />
</template>

<style lang="scss">

@use './scss/main.scss'

</style>