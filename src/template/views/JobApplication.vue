<template>
    <h2 class="page-title">Application Form</h2>
    <application-form />
</template>

<script>
import applicationForm from '@c/application-form'
export default {
    name: 'job-create',
    components:{
        applicationForm
    }
}
</script>

<style
  src="~v/jobEdit.scss"
  lang="scss"
  scoped
></style>