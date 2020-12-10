<template>
  <loader v-if="loading" />
  <div class="hero" v-else>
    <ul class="job-list">
      <li
        class="job-li"
        v-for="(j,i) in jobs"
        :key="i"
      >
        <job
          job
          :data="j"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import job from '@c/job'
export default {
  components:{
    job
  },
  data(){
    return {
      jobs: null,
      loading: false
    }
  },
  methods:{
    loadJobs(){
      this.loading = true
      this.$store.dispatch('data/getjobs')
      .then(r=>{
        if(r.status==200) this.jobs = r.data
      }).finally(()=>this.loading = false)
    }
  },
  created(){
    this.loadJobs()
  }
}
</script>

<style
  src="~v/home.scss"
  lang="scss"
  scoped
></style>