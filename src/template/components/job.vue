<template>
    <div v-if="job" class="job-box bgbx">
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
        <div class="details" v-if="detail">
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
                v-if="!detail"
            >View More..</router-link>
            <button
                type="button"
                class="bt strip like"
                @click="like = !like"
                :key="like"
            >
                <icon :icon="[ like ? 'fas' : 'far' ,'heart']" />
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'job',
        data(){
            return {
                like: false
            }
        },
        props:{
            job: Boolean,
            detail: Boolean
        }
    }
</script>

<style
  src="~c/job.scss"
  lang="scss"
  scoped
></style>