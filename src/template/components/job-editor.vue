<template>
    <div class="job-editor bgbx pagebx">
        <div class="input-group">
            <h4 class="field-name">Job Title</h4>
            <input type="text" class="input text" v-model="job.title">
        </div>
        <div class="input-group">
            <h4 class="field-name">Company Name</h4>
            <input type="text" class="input text" v-model="job.company">
        </div>
        <div class="input-group">
            <h4 class="field-name">Location</h4>
            <input type="text" class="input text" v-model="job.location">
        </div>
        <div class="input-group">
            <h4 class="field-name">Job Description</h4>
            <editor class="input editor" v-model="job.description"></editor>
        </div>
        <div class="input-group submit">
            <button
                class="bt big submit"
                type="button"
                @click="update"
                v-loader="loading.update"
            >{{create ? 'Create Job' : 'Save' }}</button>
            <button
                v-if="!create"
                class="bt big danger remove"
                type="button"
                @click="remove"
                v-loader="loading.remove"
            >Remove This Job</button>
        </div>
        <router-link
            v-if="data"
            class="bt round view outline"
            :to="`/job/${data.slug}`"
        >
            <icon icon="eye" />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'job-editor',
    data(){
        return {
            job: {
                title: '',
                company: '',
                location: '',
                description: ''
            },
            loading:{
                remove: false,
                update: false
            }
        }
    },
    methods:{
        update(){
            if(this.loading.update) return
            this.loading.update = true
            this.$store.dispatch('data/updateJob',{
                ...this.job,
                id: this.data ? this.data.id : null,
                created_by: this.$store.getters['data/userId'],
                create: this.create
            }).then(r=>{
                if(r.status==200){
                    if(this.create){
                        this.$router.push(`/job/${r.data.slug}/edit`)
                    }
                    alert('Successfully created new Job')
                }
            }).catch(e=>console.log(e))
            .finally(()=>this.loading.update = false)
        },
        remove(){
            this.loading.remove = true
            this.$store.dispatch('data/removeJob',this.data.slug)
            .then(r=>{
                if(r.status==200){
                    alert(r.data)
                    this.$router.replace('/').catch(e=>e)
                }
            }).finally(()=>this.loading.remove = false)
        }
    },
    created(){
        if(this.data) Object.keys(this.job).forEach(el=>this.job[el] = this.data[el])
    },
    props:{
        data: Object,
        create: Boolean
    }

}
</script>

<style
  src="~c/editor.scss"
  lang="scss"
  scoped
></style>