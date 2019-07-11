<template>
  <div class="wrapper">
    <div class="content">
      <div class="title">Laravel Scaffold</div>
      <div class="sub-title">Template for Single Page Application</div>
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
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  background-color: #fff;
  height: 100vh;
  margin: 0;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.content {
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-weight: 200;
  color: #636b6f;
}

.title {
  font-size: 84px;
}

.sub-title {
  font-size: 48px;
}
</style>