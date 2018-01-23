<template>
  <div id="app">
    <app-header></app-header>
    <div class="Content" style="margin-top:45px">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
  @import 'styles/reset.css'
  @import 'styles/app.css'
</style>
