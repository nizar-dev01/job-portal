<template>
    <div class="bgbx outer">
        <div class="box candidate">
            <h4 class="title">{{ data.name }}</h4>
            <h5 class="info">{{ data.mail }}</h5>
            <h5 class="info">{{ data.phone }}</h5>
            <h5 class="info">{{ data.address }}</h5>
            <router-link :to="`/application/${data.slug}`" class="app-link">
                <span class="label">
                    See Application
                </span>
                <icon icon="arrow-right" />
            </router-link>
        </div>
        <div class="box job" v-if="data.job">
            <h4 class="title">
                {{ data.job.title }}
            </h4>
            <h5 class="info">
                {{ data.job.company }}
            </h5>
            <h5 class="info">
                {{ data.job.location }}
            </h5>
            <div class="action-row">
                <button
                    class="bt approve"
                    type="button"
                >
                    Approve
                </button>
                <button
                    class="bt reject danger"
                    type="button"
                >
                    Reject
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'application',
        created(){
            console.log('app comp data : ',this.data.job)
        },
        props:[
            'data'
        ]
    }
</script>

<style src="~c/application.scss" lang="scss" scoped></style>