<template>
  <h2 class="page-title">View All Applications</h2>
  <loader v-if="loading" />
  <ul class="app-list" v-else-if="apps">
    <li
      class="app-li"
      v-for="(app,i) in apps"
      :key="i"
    >
      <application
        :data="app"
      />
    </li>
  </ul>
</template>

<script>
import application from '@c/application'
export default {
  name: 'applications',
  data(){
    return {
      apps: null,
      loading: false,
      error: false,
      empty: false,
    }
  },
  computed:{
    userId(){
      return this.$store.getters['data/userId']
    }
  },
  methods:{
    getApplications(){
      this.loading = true
      this.$store.dispatch('data/getApplications',this.userId)
      .then(r=>{
        if(r.status == 200){
          this.apps = r.data
        }
      }).catch(e=>{
        this.errorMsg = e.message || 'Something Went Wrong!'
        this.error = this.empty = true
      })
      .finally(()=>this.loading = false)
    }
  },
  created(){
    this.getApplications()
  },
  components:{
    application
  }
}
</script>

<style
  src="~v/applications.scss"
  lang="scss"
  scoped
></style>