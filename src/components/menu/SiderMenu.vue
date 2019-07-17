<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1299551_7a0d3vf0ms5.js'
})
export default {
  props: {
    menuList: Array,
    theme: String,
    mode: String
  },
  name: 'SiderMenu',
  data () {
    return {
    }
  },
  components: {
    IconFont
  },
  methods: {
    createMenuNode (menus) {
      let resultNode = []
      if (menus !== null && menus !== undefined && menus.length > 0) {
        menus.map(item => {
          if (!item.children) {
            resultNode.push(<a-menu-item onClick={() => { if (item.path) { this.$router.push(item.path) } else { this.$router.push('/404') } }} key={item.key}><icon-font type={item.icon}></icon-font>&nbsp;<span>{item.title}</span></a-menu-item>)
          } else {
            let subItemNode = this.createMenuNode(item.children)
            resultNode.push(<a-sub-menu key={item.key}><span slot="title"><icon-font type={item.icon}></icon-font>&nbsp;<span>{item.title}</span></span>{subItemNode}</a-sub-menu>)
          }
        })
      }
      return resultNode
    }
  },
  render () {
    let menuItem = this.createMenuNode(this.menuList)
    let menu = <a-menu theme={this.theme} mode={this.mode}>{menuItem}</a-menu>
    return (menu)
  }
}
</script>
<style scoped>
</style>
