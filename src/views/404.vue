<template>
  <div class="not-found-page">
    <div class="content-box">
      <span class="title">404 Not Found</span>
      <a-button type="primary"
                @click="() => this.$router.push('/') ">返回首页</a-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.not-found-page {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #40c381;
}
.content-box {
  display: flex;
  flex-direction: column;
}
.content-box .title {
  font-size: 24px;
  font-weight: bolder;
  color: #fff;
}
</style>
