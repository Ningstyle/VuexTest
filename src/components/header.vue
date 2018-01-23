<template>
  <div class="hello">
   <header class="header">
     <a href="javascript:;" class="back" v-on:click = 'Back()'>{{$store.state.HeaderStore.comhead.leftname}}</a>
     <a href="javascript:;" class="title">{{$store.state.HeaderStore.comhead.centername}}</a>
     <a href="javascript:;" class="menu">{{$store.state.HeaderStore.comhead.rightname}}</a>
   </header>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    Back: function () {
      this.$router.back()
      this.$store.commit('increment1')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../styles/header.css'
</style>
