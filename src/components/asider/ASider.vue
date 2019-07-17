<template>
  <a-layout-sider
      :trigger="null"
      collapsible
      v-model="siderIsCollapsed">
      <div class="user-info">
        <img :src="iconUrl">
        <div class="user-name"><span>{{userName}}</span></div>
      </div>
      <sider-menu
               :theme="'dark'"
               :mode="'inline'"
               :menuList="menuList"></sider-menu>
    </a-layout-sider>
</template>
<script>
import SiderMenu from '../menu/SiderMenu'
export default {
  props: {
    menuList: Array,
    theme: String,
    mode: String,
    iconUrl: String,
    userName: String
  },
  computed: {
    siderIsCollapsed () {
      return this.$store.getters.siderIsCollapsed
    }
  },
  components: {
    SiderMenu
  }
}
</script>
<style scoped>
.user-info {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #333;
}
.user-info img{
  border:1px solid #eee;
  border-radius: 50%;
  width: 60px;
}
.user-name span{
  color: #ccc;
  font-size: 18px;
  font-weight: 800;
}
</style>
