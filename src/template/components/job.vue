<template>
    <div v-if="job" class="job-box">
        <div class="row top">
            <div class="col">
                <div class="text">
                    <h2 class="title">Job Title goes here</h2>
                    <p class="info company">Company Name Pvt.Ltd</p>
                    <p class="info location">Location, address, street</p>
                </div>
                <div class="action">
                    <router-link
                        class="bt apply"
                        :to="`/job/${'job-slug'}/application`"
                        type="button"
                    >Apply</router-link>
                </div>
            </div>
        </div>
        <div class="details">
            <ul class="col job-details">
                <li>detail 1 goes here</li>
                <li>detail 2 goes here</li>
                <li>detail 3 goes here</li>
            </ul>
        </div>
        <div class="actions">
            <router-link
                class="bt link"
                :to="`/job/${'job-slug'}`"
            >View More..</router-link>
            <button class="bt icon-round outline">S</button>
        </div>
    </div>
    <div v-else-if="edit" class="edit-box">

    </div>
</template>

<script>
    export default {
        name: 'job',
        props:{
            edit: Boolean,
            job: Boolean
        }
    }
</script>

<style
  src="~c/job.scss"
  lang="scss"
  scoped
></style>