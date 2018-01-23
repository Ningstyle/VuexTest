<template>
  <div class="iformation">
    <li v-for="(x, key) in ifmat" v-on:click = 'revise(key)' v-bind:key='x.id'>
      <div class="ifmatleft">{{x.text}}</div>
      <div class="ifmatright">{{x.cont}}</div>
      <span class="spanR">
        <img src='../assets/Siod.png' height="100%" width="100%" alt="">
      </span>
    </li>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'iformation',
  data () {
    return {
      ifmat: ''
    }
  },
  computed: {
    ...mapState({
      cont: state => state.IformationStore.comall,
      heade: state => state.HeaderStore.comhead
    })
  },
  created () {
    this.ifmat = this.cont
  },
  methods: {
    revise: function (index) {
      this.$store.commit('increment')
      this.$router.push({path: '/revise?couid=' + index})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../styles/fiormation.css'
</style>
