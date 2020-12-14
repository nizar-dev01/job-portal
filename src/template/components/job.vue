<template>
    <div v-if="job" class="job-box bgbx databx">
        <div class="row top">
            <div class="col">
                <div class="text">
                    <h2 class="title">{{ data.title }}</h2>
                    <p class="info company">{{ data.company }}</p>
                    <p class="info location">{{ data.location }}</p>
                </div>
                <div class="action">
                    <router-link
                        v-if="userId && userId === data.created_by"
                        class="bt apply"
                        :to="`/job/${data.slug}/edit`"
                        type="button"
                    >Edit Job</router-link>
                    <router-link
                        v-else
                        class="bt apply"
                        :to="`/job/${data.slug}/application`"
                        type="button"
                    >Apply</router-link>
                </div>
            </div>
        </div>
        <div class="details" v-if="detail" v-html="data.description">
        </div>
        <div class="actions">
            <router-link
                class="bt link"
                :to="`/job/${data.slug}`"
                v-if="!detail"
            >View More..</router-link>
            <button
                type="button"
                class="bt strip like"
                v-if="userId"
                @click="likeJob"
                :key="like"
            >
                <icon :icon="[ like || data.likedBy.includes(userId) ? 'fas' : 'far' ,'heart']" />
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'job',
        data(){
            return {
                like: false
            }
        },
        methods:{
            likeJob(){
                this.like = !this.like
                this.$store.dispatch('data/likeJob',{
                    user: this.userId,
                    job: this.data.slug
                })
            }
        },
        computed:{
            ...mapGetters({
                userType: 'data/userType',
                userId: 'data/userId'
            })
        },
        props:{
            job: Boolean,
            detail: Boolean,
            data: Object
        }
    }
</script>

<style
  src="~c/job.scss"
  lang="scss"
  scoped
></style>