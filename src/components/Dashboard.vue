<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
body {
  font-size: 0.875rem;
}
.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
.card-right {
  position: absolute;
  right: 30px;
  top: 0px;
  width: 580px;
  height: 380px;
}
.Introduction {
  position: relative;
}
.card-left {
  z-index: 1;
  margin-top: 20px;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
  height: 600px;
}
</style>
