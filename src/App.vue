<template>
  <div id="app">
      <transition :name="transitionName">
          <router-view class="view"/>
      </transition>
  </div>
</template>
<script>
import utils from '@/utils/'
export default {
  name: 'App',
  data(){
    return {
      transitionName:"slide-right"
    }
  },
  watch: {
　　　$route (to, from) {
        if (to.meta.level > from.meta.level) {
          this.transitionName = 'slide-left'
        } else {
          this.transitionName = 'slide-right'
        }
      }
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}
input,textarea{
  -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
        -o-appearance: none;
}
.view{
  position: absolute;
  left: 0;
  top:0;
  background: #fff;
  width: 100%;
  height: 100%;
}
html{
  height: 100%;
  width: 100%;
}
body{
  position: fixed;
  height: 100%;
  width: 100%;
  margin: 0;
  font-size: 0.65rem;
  color: #333;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  position: relative;
  height: 100%;
  overflow: auto;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter {
  transform: translate(-100%, 0);
}
.slide-left-enter {
  transform: translate(100%, 0);
}
</style>
