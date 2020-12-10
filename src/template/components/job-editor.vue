<template>
    <div class="job-editor bgbx pagebx">
        <div class="input-group">
            <h4 class="field-name">Job Title</h4>
            <input type="text" class="input text">
        </div>
        <div class="input-group">
            <h4 class="field-name">Company Name</h4>
            <input type="text" class="input text">
        </div>
        <div class="input-group">
            <h4 class="field-name">Location</h4>
            <input type="text" class="input text">
        </div>
        <div class="input-group">
            <h4 class="field-name">Job Description</h4>
            <editor class="input editor" v-model="test"></editor>
        </div>
        <div class="input-group submit">
            <button class="bt big submit" type="button">Save</button>
            <button class="bt big danger remove" type="button">Remove This Job</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'job-editor',
    data(){
        return {
            test: ''
        }
    }

}
</script>

<style
  src="~c/editor.scss"
  lang="scss"
  scoped
></style>