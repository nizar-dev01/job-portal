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
        <div class="input-group submit">
            <button class="bt big submit" type="button">Apply</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'job-editor',
    data(){
        return {
            addCover: false,
            application:{
                resume: null,
                name:'',
                email: '',
                phone: '',
                coverLetter: ''
            }
        }
    },
    methods:{
        addResume(e){
            const
                file = e.target.files[0],
                {name,type,size} = file,
                resume = { name, type, size, file }
            this.application.resume = resume
        }
    }
}
</script>

<style
  src="~c/application-form.scss"
  lang="scss"
  scoped
></style>