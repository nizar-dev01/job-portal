<template>
    <div class="job-editor bgbx pagebx">
        <div class="input-group">
            <h4 class="field-name">Your Name</h4>
            <input
                type="text"
                class="input text"
                v-model="application.name"
            />
        </div>
        <div class="input-group">
            <h4 class="field-name">Email</h4>
            <input
                type="text"
                class="input text"
                v-model="application.email"
            />
        </div>
        <div class="input-group">
            <h4 class="field-name">Phone Number</h4>
            <input
                type="text"
                class="input text"
                v-model="application.phone"
            />
        </div>
        <div class="input-group">
            <h4 class="field-name">Address</h4>
            <input
                type="text"
                class="input text"
                v-model="application.address"
            />
        </div>
        <div class="input-group">
            <h4 class="field-name">Your Resume</h4>
            <input
                type="file"
                class="input hidden"
                ref="fileinput"
                @change="addResume"
            />
            <div
                class="input text resume-view"
                v-if="application.resume"
            >
                {{ application.resume.name }}
                <button
                    class="action danger remove bt strip"
                    type="button"
                    @click="application.resume = null"
                >
                    <icon :icon="'times'" />
                </button>
            </div>
            <button
                class="bt big resume-bt"
                @click="$refs.fileinput.click()"
                type="button"
                v-else
            >Upload Resume</button>
        </div>
        <div class="input-group" v-if="addCover">
            <h4 class="field-name">
                Cover Letter 
                <button class="action danger bt strip" @click="addCover = false">
                    <icon icon="times" />
                </button>
            </h4>
            <editor
                class="input editor"
                v-model="application.coverLetter"
            ></editor>
        </div>
        <div class="input-group" v-else>
            <button
                class="bt strip add-cover"
                type="button"
                @click="addCover = true"
            >
            Add a Cover Letter
            <span class="round"><icon icon="plus" /></span>
        </button>
        </div>
        <div class="input-group" v-if="error.empty">
            <p class="error-msg">Please Fill All Fields</p>
        </div>
        <div class="input-group submit">
            <button
                @click="submit"
                class="bt big submit"
                type="button"
                v-loader="loading"
            >Apply</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'job-editor',
    data(){
        return {
            addCover: false,
            loading: false,
            application:{
                resume: null,
                name:'',
                email: '',
                phone: '',
                address: '',
                coverLetter: '',
                job_slug: ''
            },
            error:{
                empty: false
            }
        }
    },
    computed:{
        user(){
            return this.$store.getters['data/user']
        }
    },
    methods:{
        addResume(e){
            const
                file = e.target.files[0],
                {name,type,size} = file,
                resume = { name, type, size, file }
            this.application.resume = resume
        },
        submit(){
            if(this.loading) return
            const invalid = Object.entries(this.application)
                .some(e=> e[0] == 'resume' || e[0] == 'coverLetter' || e[1] ? false : true)
            if(invalid) return this.error.empty = true
            this.error.empty = false
            this.loading = true
            this.$store.dispatch('data/applyForJob',this.application)
            .then(r=>{
                if(r.status==200){
                    alert('Done :)')
                    this.$router.push('/').catch(e=>e)
                }
            }).catch(()=>alert('Something went wrong'))
            .finally(()=>this.loading = false)
        }
    },
    created(){
        this.application.job_slug = this.$route.params.slug
        if(this.user){
            console.log('logged in user',this.user)
            for(const prop in this.application){
                if(this.user[prop]) this.application[prop] = this.user[prop]
            }
        }
    }
}
</script>

<style
  src="~c/application-form.scss"
  lang="scss"
  scoped
></style>