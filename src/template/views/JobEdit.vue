<template>
    <h2 class="page-title">Edit Job</h2>
    <loader v-if="loading" />
    <jobEditor
        v-if="data && !loading"
        :data="data"
    />
</template>

<script>
import jobEditor from '@c/job-editor'
export default {
    name: 'job-edit',
    components:{
        jobEditor
    },
    data(){
        return {
            data: null,
            loading: false
        }
    },
    methods:{
        loadJob(){
            this.loading = true
            const slug = this.$route.params.slug
            this.$store.dispatch('data/getjob',{slug})
            .then(r=>{
                if(r.status==200){
                    this.data = r.data
                }
            }).catch(e=>{
                this.error = e.message || 'Something went wrong!'
            }).finally(()=>this.loading = false)
        }
    },
    created(){
        this.loadJob()
    }
}
</script>

<style
  src="~v/jobEdit.scss"
  lang="scss"
  scoped
></style>