<template>
    <div class="bgbx outer">
        <div class="box candidate">
            <h4 class="title">Muhammed Nizar K</h4>
            <h5 class="info">nizar.dev01@gmail.com</h5>
            <h5 class="info">+91 7510676835</h5>
            <h5 class="info">Omassery, Calicut, Kerala</h5>
            <router-link :to="`/application/${'app-1-slug'}`" class="app-link">
                <span class="label">
                    See Application
                </span>
                <icon icon="arrow-right" />
            </router-link>
        </div>
        <div class="box job">
            <h4 class="title">
                Front Edn Developer
            </h4>
            <h5 class="info">
                IOCOD Infotech Solutions Pvt.Ltd
            </h5>
            <h5 class="info">
                UL Cyber Park, Calicut, Kerala
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

    }
</script>

<style src="~c/application.scss" lang="scss" scoped></style>