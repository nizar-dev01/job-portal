<template>
    <h2 class="page-title">Create a Job</h2>
    <jobEditor create />
</template>

<script>
import jobEditor from '@c/job-editor'
export default {
    name: 'job-create',
    components:{
        jobEditor
    }
}
</script>

<style
  src="~v/jobEdit.scss"
  lang="scss"
  scoped
></style>