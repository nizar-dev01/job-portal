<template>
    <div class="preloader-container">
        <div class="lds-dual-ring"></div>
    </div>
</template>

<script>
export default {
    name:'preloader'
}
</script>

<style lang="css" scoped>
.preloader-container{
    min-height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #9ba5be;
  border-color: #9ba5be  transparent #9ba5be  transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>