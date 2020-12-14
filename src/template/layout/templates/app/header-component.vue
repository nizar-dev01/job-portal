<template>
  <div class="header">
    <router-link class="logo" to="/">
      <span class="logo-title">
        JOB PORTAL
      </span>
      <span class="descr">
        FIND YOUR DREAM JOB
      </span>
    </router-link>
    <button
      class="menu bt outline round"
      type="button"
    >
      <icon icon="user" />
      <div class="dropdown bgbx">
          <ul class="menu-list">
            <li
              class="logout"
              @click="$router.push('/applications').catch(e=>e)"
              v-if="userType === 0"
            >
              View Applications
            </li>
            <li
              class="logout"
              @click="$router.push('/job/create').catch(e=>e)"
              v-if="userType === 0"
            >
              Create a Job
            </li>
            <li
              class="logout"
              @click="logout"
              v-if="loggedIn"
            >
              Logout
            </li>
            <li
              class="logout"
              @click="$router.push('/login').catch(e=>e)"
              v-else
            >
              Login
            </li>
          </ul>
      </div>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters({
      loggedIn: 'data/loggedIn',
      userType: 'data/userType'
    })
  },
  methods:{
    logout(){
      this.$store.dispatch('data/logout')
    }
  },
  watch:{
    loggedIn(to){
      if(!to && this.$route.meta && this.$route.meta.user){
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./style/header.scss"
  scoped
></style>