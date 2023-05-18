<template>
    <div class="main-container" id="container">
     <Header></Header>
     <SlideBar />
     <router-view></router-view>
     </div>
</template>

<script>
import Header from "./components/Header.vue";
import SlideBar from "./components/SlideBar.vue";
export default {
  name: "App",
  components: {
    Header,
    SlideBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#body {
    position: relative;
}
.content-wrapper{
  background: #fff;
}
</style>
