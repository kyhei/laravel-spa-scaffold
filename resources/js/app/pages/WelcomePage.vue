<template>
  <div class="wrapper">
    <div class="content">
      <div class="title m-b-md">Laravel</div>
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
  color: #636b6f;
  font-family: 'Nunito', sans-serif;
  font-weight: 200;
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
}

.title {
  font-size: 84px;
}
</style>