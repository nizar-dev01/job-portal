<template>
    <h2 class="page-title">View Application</h2>
    <loader v-if="loading" />
    <div class="job-app-view bgbx" v-else-if="application">
        <div class="row">
            <div class="col">
                <div class="box app">
                    <h2 class="title">Application</h2>
                    <div class="info-group" v-if="application.name">
                        <h3 class="field">Name</h3>
                        <h4 class="info">{{ application.name }}</h4>
                    </div>
                    <div class="info-group" v-if="application.email">
                        <h3 class="field">Email</h3>
                        <h4 class="info">{{ application.email }}</h4>
                    </div>
                    <div class="info-group" v-if="application.phone">
                        <h3 class="field">Phone Number</h3>
                        <h4 class="info">{{ application.phone }}</h4>
                    </div>
                    <div class="info-group" v-if="application.address">
                        <h3 class="field">Address</h3>
                        <h4 class="info">{{ application.address }}</h4>
                    </div>
                    <div class="info-group" v-if="application.cover">
                        <h3 class="field">Cover Letter</h3>
                        <div v-html="application.cover" class="cover-letter"></div>
                    </div>
                    <div class="info-group" v-if="application.resume">
                        <button
                            class="bt strip"
                            @click.stop.prevent="showres"
                            type="button"
                        >Resume <icon icon="arrow-right" /></button>
                    </div>
                    <div class="info-group action">
                        <button
                            class="bt approve big"
                            type="button"
                        >
                            Approve
                        </button>
                        <button
                            class="bt reject danger big"
                            type="button"
                        >
                            Reject
                        </button>
                    </div>
                </div>
            </div>
            <div class="col job">
                <div class="box job">
                    <h2 class="title">Job</h2>
                    <div class="info-group" v-if="application.job.title">
                        <h3 class="field">Job Title</h3>
                        <h4 class="info">{{ application.job.title }}</h4>
                    </div>
                    <div class="info-group" v-if="application.job.company">
                        <h3 class="field">Company</h3>
                        <h4 class="info">{{ application.job.company }}</h4>
                    </div>
                    <div class="info-group" v-if="application.job.location">
                        <h3 class="field">Location</h3>
                        <h4 class="info">{{ application.job.location }}</h4>
                    </div>
                    <div class="info-group" v-if="application.job.description">
                        <h3 class="field">Job Description</h3>
                        <div class="html-view" v-html="application.job.description"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'application',
    data(){
        return {
            application: null,
            loading: false,
            error: false
        }
    },
    methods:{
        getApp(){
            this.loading = true
            this.$store.dispatch('data/getApp',this.$route.params.slug)
            .then(r=>{
                if(r.status==200){
                    this.application = r.data
                }
            }).catch(e=>{
                this.error = true
                this.errorMsg = e.message || 'Something Went Wrong!'
            }).finally(()=>this.loading = false)
        },
        showres(){
            const
                file = this.application.resume.file,
                blob = new Blob([file], {type: file.type}),
                filename = this.application.resume.name
            const elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;        
            document.body.appendChild(elem);
            elem.click();        
            document.body.removeChild(elem);
        }
    },
    created(){
        this.getApp()
    }
}
</script>

<style
    src="~v/application.scss"
    scoped
    lang="scss"
></style>