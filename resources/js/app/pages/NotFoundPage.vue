<template>
  <div class="wrapper">
    <div class="content">
      <div class="content-item">Oops!!</div>
      <div class="content-item">requested page is not found</div>
      <router-link
        class="content-item-link"
        :to="{name: 'top'}"
      >Back to Top page</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  created() {}
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-color: #fff;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  &-item {
    color: gray;
    font-size: 32px;
    margin-top: 24px;

    &-link {
      @extend .content-item;
      font-size: 24px;
    }
  }
}
</style>