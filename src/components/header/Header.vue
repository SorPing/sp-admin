<template>
  <a-layout-header class="header">
    <a-icon class="trigger"
            :type="this.menuIsCollapsed ? 'menu-unfold' : 'menu-fold'"
            @click="changeMenuIsCollapsed" />
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
    changeMenuIsCollapsed () {
      console.log(this.menuIsCollapsed)
      this.$store.commit('changeMenuIsCollapsed')
    }
  },
  computed: {
    menuIsCollapsed () {
      return this.$store.getters.menuIsCollapsed
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
