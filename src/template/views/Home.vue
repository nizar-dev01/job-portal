<template>
  <div class="hero">
    <ul class="job-list">
      <li class="job-li" v-for="n in 8" :key="n">
        <div class="job-box">
          <div class="row top">
            <div class="col">
              <div class="text">
                <h2 class="title">Job Title goes here</h2>
                <p class="info company">Company Name Pvt.Ltd</p>
                <p class="info location">Location, address, street</p>
              </div>
              <div class="action">
                <button class="bt apply" type="button">Apply</button>
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
              <button class="bt link">View More..</button>
              <button class="bt icon-round outline">S</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style
  src="~v/home.scss"
  lang="scss"
  scoped
></style>