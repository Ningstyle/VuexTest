<template>
  <div class="revise">
    <p><input v-bind:type="type" v-bind:placeholder='msg' v-model="value"></p>
    <a href="javascript:;" @click = 'Revis()'>确认修改</a>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'revise',
  data () {
    return {
      couid: this.$route.query.couid,
      msg: '请输入姓名',
      type: 'text',
      value: ''
    }
  },
  created () {
    if (this.couid == 0) {
      this.msg = '请输入姓名'
    } else if (this.couid == 1) {
      this.msg = '请输入性别'
    } else if (this.couid == 2) {
      this.msg = '请输入出生年月'
      this.type = 'date'
    } else if (this.couid == 3) {
      this.msg = '请输入兴趣爱好'
    } else if (this.couid == 4) {
      this.msg = '请输入家庭住址'
    } else if (this.couid == 5) {
      this.msg = '请输入联系电话'
    }
  },
  computed: {
    ...mapState({
      cont: state => state.IformationStore.comall
    })
  },
  methods: {
    Revis: function () {
      if (this.value != '') {
        if (this.couid == 0) {
          this.cont[0].cont = this.value
          this.$store.commit('increment1')
          this.$router.back()
        } else if (this.couid == 1) {
          this.cont[1].cont = this.value
          this.$store.commit('increment1')
          this.$router.back()
        } else if (this.couid == 2) {
          this.cont[2].cont = this.value
          this.$store.commit('increment1')
          this.$router.back()
        } else if (this.couid == 3) {
          this.cont[3].cont = this.value
          this.$store.commit('increment1')
          this.$router.back()
        } else if (this.couid == 4) {
          this.cont[4].cont = this.value
          this.$store.commit('increment1')
          this.$router.back()
        } else if (this.couid == 5) {
          this.cont[5].cont = this.value
          this.$store.commit('increment1')
          this.$router.back()
        }
      } else {
        alert('请填写')
      }
    }
  }
}
</script>
<style scoped>
@import '../styles/revise.css'
</style>
