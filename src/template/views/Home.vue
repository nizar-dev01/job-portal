<template>
  <div class="hero">
    <ul class="job-list">
      <li class="job-li" v-for="n in 9" :key="n">
        <job job />
      </li>
    </ul>
  </div>
</template>

<script>
import job from '@c/job'
export default {
  components:{
    job
  }
}
</script>

<style
  src="~v/home.scss"
  lang="scss"
  scoped
></style>