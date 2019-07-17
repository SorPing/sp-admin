<template>
  <a-layout>
    <side-menu :theme="'dark'"
               :mode="'inline'"
               :menuList="menuList"></side-menu>
    <a-header></a-header>
    <a-layout-content></a-layout-content>
  </a-layout>
</template>
<script>
import SideMenu from '../components/menu/SideMenu'
import Header from '../components/header/Header'
export default {
  data () {
    return {
      menuList: [
        {
          title: '仪表盘',
          key: 1,
          icon: 'icon-gongyezujian-yibiaopan',
          children: [
            {
              title: '列表',
              key: 1.1,
              icon: 'icon-liebiao'
            },
            {
              title: '图表',
              key: 1.2,
              icon: 'icon-zhexiantu'
            },
            {
              title: '表格',
              key: 1.3,
              icon: 'icon-biaodanzujian-biaoge1'
            }
          ]
        },
        {
          title: '系统设置',
          key: 2,
          icon: 'icon-icon_shezhi'
        }
      ]
    }
  },
  components: {
    SideMenu,
    'a-header': Header
  }
}
</script>
