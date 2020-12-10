<template>
    <h2 class="page-title">Job Details</h2>
    <loader v-if="loading" />
    <job
        v-if="!loading && data"
        job
        detail
        :data="data"
        class="pagebx"
    />
    <!-- </div> -->
</template>

<script>
    import job from '@c/job'
    export default {
        name: 'job-view',
        components:{
            job
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

<style>

</style>