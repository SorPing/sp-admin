<template>
  <a-layout-header class="header">
    <a-icon class="trigger"
            :type="this.siderIsCollapsed ? 'menu-unfold' : 'menu-fold'"
            @click="changeSiderIsCollapsed" />
  </a-layout-header>
</template>
<script>
export default {
  name: 'AHeader',
  data () {
    return {

    }
  },
  methods: {
    changeSiderIsCollapsed () {
      this.$store.commit('changeSiderIsCollapsed')
    }
  },
  computed: {
    siderIsCollapsed () {
      return this.$store.getters.siderIsCollapsed
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #fff;
  display: flex;
  padding: 0 10px;
  width: 100%;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 10px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
